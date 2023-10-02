
import { useEffect, useState } from "react";
import { useGetFollowingsByUserMutation, useGetVacationsQuery } from "../store/api/vacations.api."
import { Footer } from "../ui/footer";
import { Header } from "../ui/header";
import { useAuth } from "../store/hooks/use-auth";



export function Vacations() {
  const [position, setPosition] = useState("0")
  const [page, setPage] = useState(1)
  const [vacationsList, setVacationsList] =useState<number[]>()
  const step: number = 10;
  const { isLoading, isError, data } = useGetVacationsQuery(position)
  const {email} = useAuth()
  const [getFollowingsByUser,{isSuccess}] = useGetFollowingsByUserMutation()
  const dataLength: number | undefined = data?.length
  if(dataLength == 0 && page > 0){
    setPosition(((+position) - step).toString())
    setPage(page - 1);
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
 
  const getFollowingsByUserHandler = async (email:string )=>{
    const result =  await getFollowingsByUser(email)
const resList = Object(result).data
const udav = resList.map((v: { fVacationId: number; })=>v.fVacationId)
   setVacationsList(udav)
    
  }

  useEffect(()=>{
  getFollowingsByUserHandler(email)
  },[])

  console.log("user email: ", email, "vacationsList: ",vacationsList, Array.isArray(vacationsList) )

  return (
    <>
      <Header />
      <div className="wrapper">

        <h2 className="headline">Vacations</h2>

        {isError && <p className="errorP">Something went wrong...</p>}
        {isLoading && <p className="loadingP">Loading...</p> ||
          <div className="wrapper">

            <div className="pagination">
              <button onClick={() => { prevPage(position, page, dataLength, step) }}>prev</button>
              <div className="pageNum">{page !== 0 ? page : "all"}</div>
             
              <button onClick={() => { nextPage(position, page, dataLength, step) }}>next</button>
            </div>

            <div className="cards">
              {data?.map(vacation => (
                <div key={vacation.destination + vacation.fromDate} className="card">
                  <img src={vacation.imageSrc} alt={vacation.destination} />
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
                        <div className="likeDiv">
                       {vacationsList && vacationsList.find((v)=>v == Number(vacation.vcnId))?  <span className="like" title="follow">&#10084;</span> :
                       <span className="dislike" title="unfollow">&#10084;</span>}
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

      <Footer />
    </>
  )

  function nextPage(position: string, page: number, dataLength: number | undefined, step: number) {
    if (position == "all" || dataLength && dataLength >= step) {
      if (page == 0) {
        setPosition("0");
        setPage(page + 1);
      } else {
        setPosition(((+position) + step).toString())
        setPage(page + 1);
      }
    }
  }

  function prevPage(position: string, page: number, dataLength: number | undefined, step: number) {
    if (dataLength && position == "all" || dataLength && Number(position) > 0) {
      if (page == 0) {
        setPosition("all");

      } else {
        setPosition(((+position) - step).toString())
        setPage(page - 1);
      }
    }
  }

}