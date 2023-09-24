import { useGetVacationsQuery, usePutVacationMutation } from "../store/api/vacations.api.";
import { useNavigate, Navigate } from 'react-router-dom';
import { useState} from 'react';

export function EditVacation() {
    
    const [fromDate, setfromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [price, setPrice] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const vcnId = window.location.pathname.replace('/vacations/byid/', "");
    const { data } = useGetVacationsQuery("")
    const currentVacation = data?.filter(vacation => (vacation.vcnId == vcnId))
    const [destination, setDestination] = useState("");
    const [about, setAbout] = useState("");
    const [FirstRun, setFirstRun] = useState(true);
    currentVacation?.map(vacation => {
        if (FirstRun){
            setDestination(vacation.destination)
            setAbout(vacation.about)
            setImageSrc(vacation.imageSrc)
            setPrice(vacation.price.toString())
            setFirstRun(false)
        }
    })
    
 
    const [putVacation, { isSuccess, isLoading, isError }] = usePutVacationMutation()

    const putVacationHandler = async (destination: string,
        about: string,
        fromDate: string,
        toDate: string,
        price: number,
        imageSrc: string,
        vcnId: number
    ) => {
        if (
            price <= 10000 &&
            price > 1 &&
            (Number(new Date(toDate)) - Number(new Date(fromDate))) > 0 &&
            (Number(new Date(fromDate)) >= Number(new Date)) &&
            (Number(new Date(toDate)) >= Number(new Date))
        ) {
            await putVacation({
                destination,
                about,
                fromDate,
                toDate,
                price,
                imageSrc,
                vcnId
            }).unwrap();
            setDestination("");
            setAbout("");
            setfromDate("");
            setToDate("");
            setPrice("");
            setImageSrc("");
            alert(`Vacation #:${vcnId} successfully edited`)
        } else {
            alert("Enter all the relevant data in proper way, please!")
        }

    }
    const navigate = useNavigate();
    return (
        <div className="registration">
            <h2>Edit Vacation #{vcnId}</h2>
            {isError && <p className='errorP'>Something went wrong. Try again, please!</p>}
            {isLoading && <p className='loadingP'>Loading...</p> ||
                <div className="wrapper">
                    {currentVacation?.map(vacation => (
                        <div className="editing" key={vcnId}>

                            <form action="#" className="editForm">
                                <div className="destination">
                                    <span>Destination:</span>
                                    <input type="text" value={destination} onChange={(e) => { setDestination(e.target.value) }} />
                                </div>

                                <span>About:</span>
                                <textarea  value={about} onChange={(e) => { setAbout(e.target.value) }}></textarea>
                                <div className="dates">
                                    <div className="fromDate">
                                        <span>FROM:</span>
                                       
                                        <div className="newDate">
                              
                                            <input type="date" value={fromDate || new Date(vacation.fromDate).toISOString().split('T')[0]} onChange={(e) => { setfromDate(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="fromDate">
                                        <span>TO:</span>
                                        
                                        <div className="newDate">
                               
                                            <input type="date" value={toDate || new Date(vacation.toDate).toISOString().split('T')[0]} onChange={(e) => { setToDate(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>


                                <img src={vacation.imageSrc} alt={vacation.destination} />
                                <div className="imgRef">
                                    <span>Image url:</span>
                                    <input type="text"  value={imageSrc} onChange={(e) => { setImageSrc(e.target.value) }} />
                                </div>
                                <div className="priceInputDiv">
                                    <span>Price (up to 10,000):</span>
                                    <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} />
                                </div>

                            </form>
                            <div className="buttons">
                                <button onClick={() => {

                                    putVacationHandler(
                                        destination,
                                        about,
                                        fromDate || new Date(vacation.fromDate).toISOString().replace("Z", " ").slice(0, 19).replace("T", " "),
                                        toDate || new Date(vacation.toDate).toISOString().replace("Z", " ").slice(0, 19).replace("T", " "),
                                        +price,
                                        imageSrc,
                                        +vcnId
                                    )
                                }}>Publish</button>
                                <button onClick={() => {
                                    navigate("/vacations/editAll")
                                }}>Cancel</button>
                            </div>
                        </div>
                    ))}


                </div>


            }
            {isSuccess && <Navigate to="/vacations/editAll" replace />}



        </div>
    )
}