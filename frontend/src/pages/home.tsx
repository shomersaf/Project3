


import { Navigate, useNavigate} from "react-router-dom"

import { useEffect } from "react"
import { useAuth } from "../store/hooks/use-auth"


export function Home() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    //const token: string | null = localStorage.getItem("token")
    console.log(token)
    useEffect(()=>{
        !token && navigate("/login")
       }
      
       ,[navigate, token])
       const {role} = useAuth()
    return (
        <>
        { !token && <Navigate to="/login" /> }
        { role == "admin" && <Navigate to="/vacations/editAll" /> }
        { role == "user" && <Navigate to="/vacations" /> }
        </>
    )
}