import { Navigate } from "react-router-dom"
import { useAuth } from "../../store/hooks/use-auth"



export function AuthRoute(props: { children: JSX.Element }) {
    const {role} = useAuth()
    console.log( "role:", role)
    if (role) return props.children
    else return <Navigate to="/login" />
}