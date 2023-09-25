import {Link} from 'react-router-dom';
import { IRoute } from '../models/models';
import { notadminroutes } from '../data/notadmin';


export function NotAdminNav (){
    return(
  <nav>
 
  {notadminroutes.filter(r => r.label).map((route: IRoute) => {
            return <Link key={route.label} to={route.path} title={route.title} > {route.label} </Link>
        })}
  </nav>
    )
}