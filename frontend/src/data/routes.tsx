import { IRoute } from "../models/models";
import { AddVacation } from "../pages/addVacation";
import { EditVacation } from "../pages/editVacation";
import { EditVacations } from "../pages/editVacations";
import { Login } from "../pages/login";
import { Logout } from "../pages/logout";
import { NotFound } from "../pages/notFound";
import { Registration } from "../pages/registration";
import { Statistics } from "../pages/statistics";
import { Vacations } from "../pages/vacations";
import { ProtectedRoute } from "../ui/protected-route";

export const routes: Array<IRoute> = [
    {
      path: "/users/new",
      component: <Registration />,
      key: "Registration",
     // label: "Registration"
  },
 
  {
    path: "/vacations",
    component: <ProtectedRoute><Vacations /></ProtectedRoute>,
    key: "Vacations",
    label: "Vacations"
  },
  
  {
    path: "/vacations/new",
    component:<ProtectedRoute><AddVacation /></ProtectedRoute> ,
    key: "AddVacation",
    label: "Add Vacation"
  },
  
 
  {
    path: "/vacations/byid/:vcnId",
    component: <ProtectedRoute><EditVacation /></ProtectedRoute>,
    key: "EditVacationById",
   // label: "Edit Vacation By Id"
  },
  
  {
    path: "/vacations/editAll",
    component:<ProtectedRoute><EditVacations /></ProtectedRoute>,
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
    component: <ProtectedRoute><Statistics /></ProtectedRoute>,
    key: "Statistics",
    label: "Statistics"
  },
  {
    path: "/",
    component: <Login />,
    key: "Login",
    //label: "Login"
  },
  {
    path: "/",
    component: <Logout />,
    key: "Logout",
    label: "Logout"
  }
  ]