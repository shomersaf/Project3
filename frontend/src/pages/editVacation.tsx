import { useGetVacationsQuery, usePutVacationMutation } from "../store/api/vacations.api.";
import { useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';

export function EditVacation() {
    const [destination, setDestination] = useState("");
    const [about, setAbout] = useState("");
    const [fromDate, setfromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [price, setPrice] = useState("");
    const [imageSrc, setImageSrc] = useState("");
    const vcnId = window.location.pathname.replace('/vacations/byid/', "");
    const { data } = useGetVacationsQuery("")
    const currentVacation = data?.filter(vacation => (vacation.vcnId == vcnId))
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
                                    <input type="text" placeholder={vacation.destination} value={destination} onChange={(e) => {setDestination(e.target.value)}} />
                                </div>

                                <span>About:</span>
                                <textarea placeholder={vacation.about} value={about} onChange={(e) => {setAbout(e.target.value)}}></textarea>
                                <div className="dates">
                                    <div className="fromDate">
                                        <span>FROM:</span>
                                        <span>Current: <span className="currentDate">{new Date(vacation.fromDate).toISOString().split('T')[0]}</span></span>
                                        <div className="newDate">
                                            <span>New:</span>
                                            <input type="date" placeholder={new Date(vacation.fromDate).toISOString().split('T')[0]} value={fromDate} onChange={(e) => {setfromDate(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="fromDate">
                                        <span>TO:</span>
                                        <span>Current: <span className="currentDate">{new Date(vacation.toDate).toISOString().split('T')[0]}</span></span>
                                        <div className="newDate">
                                            <span>New:</span>
                                            <input type="date" placeholder={new Date(vacation.toDate).toISOString().split('T')[0]} value={toDate} onChange={(e) => {setToDate(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>


                                <img src={vacation.imageSrc} alt={vacation.destination} />
                                <div className="imgRef">
                                    <span>Image url:</span>
                                    <input type="text" placeholder={vacation.imageSrc} value={imageSrc} onChange={(e) => { setImageSrc(e.target.value) }} />
                                </div>
                                <div className="priceInputDiv">
                                    <span>Price (up to 10,000):</span>
                                    <input type="number" placeholder={vacation.price.toString()} value={price} onChange={(e) => { setPrice(e.target.value) }} />
                                </div>

                            </form>
                            <div className="buttons">
                                <button onClick={() => {
                                
                                    putVacationHandler(
                                        destination || vacation.destination,
                                        about || vacation.about,
                                        fromDate || new Date(vacation.fromDate).toISOString().replace("Z", " ").slice(0, 19).replace("T", " "),
                                        toDate || new Date(vacation.toDate).toISOString().replace("Z", " ").slice(0, 19).replace("T", " "),
                                        +price || vacation.price,
                                        imageSrc || vacation.imageSrc,
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