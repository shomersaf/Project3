import { IRoute } from "../models/models";
import { AddVacation } from "../pages/addVacation";
import { EditVacation } from "../pages/editVacation";
import { EditVacations } from "../pages/editVacations";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { Registration } from "../pages/registration";
import { Statistics } from "../pages/statistics";
import { Vacations } from "../pages/vacations";


export const routes: Array<IRoute> = [
    {
      path: "/users/new",
      component: <Registration />,
      key: "Registration",
     // label: "Registration"
  },
 
  {
    path: "/vacations",
    component: <Vacations />,
    key: "Vacations",
    label: "Vacations"
  },
  
  {
    path: "/vacations/new",
    component: <AddVacation />,
    key: "AddVacation",
    label: "Add Vacation"
  },
  
 
  {
    path: "/vacations/byid/:vcnId",
    component: <EditVacation />,
    key: "EditVacationById",
   // label: "Edit Vacation By Id"
  },
  
  {
    path: "/vacations/editAll",
    component: <EditVacations />,
    key: "EditVacations",
    label: "Edit Vacations"
  },
  
  {
    path: "*",
    component: <NotFound />,
    key: "NotFound",
   // label: "Not Found"
  },
  
  {
    path: "/vacations/statistics",
    component: <Statistics />,
    key: "Statistics",
    label: "Statistics"
  },
  {
    path: "/",
    component: <Login />,
    key: "Login",
    label: "Login"
  }
  ]