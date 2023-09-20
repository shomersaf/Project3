
import { useGetVacationsQuery } from "../store/api/vacations.api."

export function Vacations (){
 const {isLoading,isError,data} = useGetVacationsQuery("")
 console.log(data)
 const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

    return(
        <div className="vacations">

            <h2 className="headline">Vacations</h2>
           
            {isError && <h4>Something went wrong...</h4>}
            <div className = "cards">
            {isLoading && <h4>Loading...</h4>}
                {data?.map(vacation => (
                    <div key={vacation.destination+vacation.fromDate} className="card">
                        <img src={vacation.imageSrc} alt ={vacation.destination} />
                        <div className="description">
                        <h3>{vacation.destination}</h3>
                        <p>{vacation.about}</p>
                        <div className="date">
                        <span>{new Date(vacation.fromDate).toLocaleDateString()}  - </span>
                        <span>{new Date(vacation.toDate).toLocaleDateString()}</span>
                        </div>
                        <div className="cardFooter">
                            
                        <div className="price">{formatter.format(vacation.price)}</div>
                        <div className ="likeDiv">
                            <span className ="like" title ="follow">&#10084;</span>
                            <span className="likes">{vacation.followers}</span> 
                        </div>
                        </div>
                        </div>
                       
                    </div>
                ))}
    
            </div>
    
             
        </div>
    )
}