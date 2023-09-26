


import { Navigate } from "react-router-dom";


export function Home() {
    
    const token: string | null = localStorage.getItem("token")
 

    return (
        <>
      
            {(!token) && <Navigate to="/login" />}
       

            
        </>
    )
}