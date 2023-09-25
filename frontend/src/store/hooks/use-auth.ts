import { useSelector } from "react-redux";


export function useAuth(){
    const {user}= useSelector(state =>state as never);
    const { token, role} = user
    return{
        isAuth: !!token,
        token,
        role
    }
}