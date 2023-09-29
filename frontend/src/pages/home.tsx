


import { Navigate} from "react-router-dom"
//import {useNavigate} from "react-router-dom"
//import { useEffect } from "react"
//import { useAuth } from "../store/hooks/use-auth"


export function Home() {
   // const navigate = useNavigate()
   // const token = localStorage.getItem("token")
  const token: string | null = localStorage.getItem("token")
    //console.log(token)

       // token == null && navigate("/login")
    
       //const {role} = useAuth()
    return (
        <>
        <h1>Home</h1>
        { !token && <Navigate to="/login" /> }
        {/* { role == "admin" && <Navigate to="/vacations/editAll" /> }
        { role == "user" && <Navigate to="/vacations" /> } */}
        </>
    )
}