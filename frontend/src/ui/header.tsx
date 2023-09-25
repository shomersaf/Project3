import { Link } from "react-router-dom"
import { Nav } from "./nav"
import { NotAdminNav } from "./notadminnav"
import { useAuth } from "../store/hooks/use-auth"
export function Header (){
    const {role} = useAuth()
 

    return(
     <header>
  
        <h1><Link to="/vacations">My Vacations</Link></h1>
        {(role =="admin")?<Nav />:<NotAdminNav />}
     
     </header>
    )
}