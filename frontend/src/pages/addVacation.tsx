import { useState } from 'react';
import { useAddVacationMutation } from '../store/api/vacations.api.';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Header } from '../ui/header';
import { Footer } from '../ui/footer';


export function AddVacation() {
    const [destination, setDestination] = useState("");
    const [about, setAbout] = useState("");
    const [fromDate, setfromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [price, setPrice] = useState("");
    const [imageSrc, setImageSrc] = useState("");

    // const navigate = useNavigate();
    const [addVacation, { isSuccess, isLoading, isError }] = useAddVacationMutation()

    const addVacationHandler = async (
        destination: string,
        about: string,
        fromDate: string,
        toDate: string,
        price: number,
        imageSrc: string,
    ) => {
        if (
            destination &&
            about &&
            fromDate &&
            toDate &&
            price <= 10000 &&
            price > 1 &&
            imageSrc &&
            (Number(new Date(toDate)) - Number(new Date(fromDate))) > 0 &&
            (Number(new Date(fromDate)) >= Number(new Date)) &&
            (Number(new Date(toDate)) >= Number(new Date))
        ) {
            await addVacation({
                destination,
                about,
                fromDate,
                toDate,
                price,
                imageSrc
            }).unwrap();
            setDestination("");
            setAbout("");
            setfromDate("");
            setToDate("");
            setPrice("");
            setImageSrc("");
            alert("New vacation added")
        } else {

            alert("Enter whole the data in a proper way, please!")
        }

    }
    return (
        <>
       <Header />
       <div className="registration">
 <h2>Add Vacation</h2>
            {isError && <p className='errorP'>Something went wrong. Try again, please!</p>}
            {isLoading && <p className='loadingP'>Loading...</p> ||
            <div className="wrapper">
                  <form action="#">
                <input type="text" placeholder="destination..." value={destination} onChange={(e) => { setDestination(e.target.value) }} />
                {/* <input type="text" placeholder="about..." value={about} onChange = {(e)=>{setAbout(e.target.value)}} /> */}
                <textarea placeholder="about..." value={about} onChange={(e) => { setAbout(e.target.value) }}></textarea>
                <input type="date" placeholder="fromDate..." value={fromDate} onChange={(e) => { setfromDate(e.target.value) }} />
                <input type="date" placeholder="toDate... " value={toDate} onChange={(e) => { setToDate(e.target.value) }} />
                <input type="number" placeholder="price (up to 10,000)... " value={price} onChange={(e) => { setPrice(e.target.value) }} />
                <input type="text" placeholder="imageSrc... " value={imageSrc} onChange={(e) => { setImageSrc(e.target.value) }} />
            </form>
            <div className="buttons">
            <button onClick={() => {
                addVacationHandler(
                    destination,
                    about,
                    fromDate,
                    toDate,
                    +price,
                    imageSrc)
            }}>Publish</button>
            <button onClick={() => {
                  setDestination("");
                  setAbout("");
                  setfromDate("");
                  setToDate("");
                  setPrice("");
                  setImageSrc("");
                //   navigate("/");
            }}>Cancel</button>
            </div>
            </div>
            }
            {isSuccess && <Navigate to="/vacations/editAll" />}

           
          
        </div>
        <Footer />
       </>
    )
}

