import { Navigate } from "react-router-dom"
import { useAuth } from "../../store/hooks/use-auth"

export function AdminRoute(props: { children: JSX.Element }) {
   // const {isAuth, token,role} = useAuth()
    const {role} = useAuth()
    //const token = localStorage.getItem("token")
    if (role =="admin") return props.children
    else return <Navigate to="/" />
}