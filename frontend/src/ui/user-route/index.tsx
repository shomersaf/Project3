import { Navigate } from "react-router-dom"
import { useAuth } from "../../store/hooks/use-auth"

export function UserRoute(props: { children: JSX.Element }) {
    const {isAuth} = useAuth()
    if (isAuth) return props.children
    else return <Navigate to="/" />
}