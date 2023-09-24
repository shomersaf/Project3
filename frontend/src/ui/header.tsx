import { Link } from "react-router-dom"
import { Nav } from "./nav"

export function Header (){
    return(
     <header>
        <h1><Link to="/vacations">My Vacations</Link></h1>
        <Nav />
     </header>
    )
}