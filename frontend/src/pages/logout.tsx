
import {useEffect } from 'react';
import {  Navigate } from 'react-router-dom';

export function Logout() {

    useEffect(() => {
        localStorage.removeItem("token")
        return () => {
            console.log("Unmount Login Component Now!!!!")
        }
    }, [])
    
    return (
   
            <Navigate to="/" replace />

    )
}