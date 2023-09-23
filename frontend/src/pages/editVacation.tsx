import { useGetVacationsQuery } from "../store/api/vacations.api.";

export function EditVacation (){

const vcnId =window.location.pathname.replace('/vacations/byid/',"");
const {isLoading,isError,data} = useGetVacationsQuery("")
const currentVacation = data?.filter(vacation =>(vacation.vcnId == vcnId))


    return (
        <div className="registration">
        <h2>Add Vacation</h2>
                   {isError && <p className='errorP'>Something went wrong. Try again, please!</p>}
                   {isLoading && <p className='loadingP'>Loading...</p> ||  
                   <div className="wrapper">
                     {currentVacation?.map(vacation => (
                      <div className="editing">
                        
                        <form action="#" className="editForm">
                            <div className="destination">
                            <span>Destination:</span>
                       <input type="text" placeholder={vacation.destination}  onChange={() => { }} />
                            </div>
                        
                       <span>About:</span>
                       <textarea placeholder={vacation.about} onChange={() => {  }}></textarea>
                       <div className="dates">
                       <div className="fromDate">
                       <span>FROM:</span>
                       <span>Current: <span className="currentDate">{new Date(vacation.fromDate).toISOString().split('T')[0]}</span></span>
                       <div className="newDate">
                       <span>New:</span>
                       <input type="date" placeholder={new Date(vacation.fromDate).toISOString().split('T')[0]}  onChange={() => {}}/>
                       </div>
                       </div>
                       <div className="fromDate">
                       <span>TO:</span>
                       <span>Current: <span className="currentDate">{new Date(vacation.toDate).toISOString().split('T')[0]}</span></span>
                       <div className="newDate">
                       <span>New:</span>
                       <input type="date" placeholder={new Date(vacation.toDate).toISOString().split('T')[0]}  onChange={() => {}}/>
                       </div>
                       </div>
                       </div>
                       <div className="priceInputDiv">
                       <span>Price:</span>
                       <input type="number" placeholder={vacation.price.toString()}  onChange={() => { }} />
                       </div>
                       
                       <img src={vacation.imageSrc} alt ={vacation.destination} />
                       <div className="imgRef">
                       <span>Image url:</span>
                       <input type="text" placeholder={vacation.imageSrc} onChange={() => { }} />
                       </div>
                
                       
                   </form>
                   <div className="buttons">
                   <button onClick={() => {
                       
                   }}>Publish</button>
                   <button onClick={() => {
                       
                   }}>Cancel</button>
                   </div>
                      </div>
                   ))}


                   </div>

                   
                   }
                   {/* {isSuccess && <Navigate to="/vacations" replace />} */}
       
                  
                 
               </div>
    )
}