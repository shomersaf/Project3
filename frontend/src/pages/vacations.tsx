
import { useState } from "react";
import { useGetVacationsQuery } from "../store/api/vacations.api."
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";



export function Vacations (){
  const [count,setCount] = useState("")
 const {isLoading,isError,data} = useGetVacationsQuery(count)

 const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

    return(
      <>
      <Header />
        <div className="wrapper">

<h2 className="headline">Vacations</h2>

{isError && <p className="errorP">Something went wrong...</p>}
{isLoading && <p className="loadingP">Loading...</p> ||
<div className="wrapper">
<div className="pagination">
    <select value ={count} onChange={(e)=>{setCount(e.target.value)}}>
<option value="all">all</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
    </select>
   </div>

<div className = "cards">
  
    {data?.map(vacation => (
        <div key={vacation.destination+vacation.fromDate} className="card">
            <img src={vacation.imageSrc} alt ={vacation.destination} />
            <div className="description">
              <div className="top">
              <h3>{vacation.destination}</h3>
            <p className="about">{vacation.about}</p>
           
              </div>
           
            <div className="downtown">
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
           
        </div>
    ))}

</div>
</div>}

 
</div>
{/* <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
  </ul>
</nav> */}
<Footer />
      </>
    )
}