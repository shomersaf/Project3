import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { IRoute } from './models/models';
import { routes } from './data/routes';
//import { useAuth } from './store/hooks/use-auth';
//import { notadminroutes } from './data/notadmin';

function App() {
  //const {role} = useAuth()
  return (
      // <Router>
      //   <main>
      //   {(role =="admin")?
      //     <Routes key={"adminroutes"}>
      //     {routes.map((route: IRoute) => {
      //       return <>
      //       <Route path={route.path} key={route.key} element={route.component} />
      //       </>
      //     })}
      //   </Routes>:
      //     <Routes key={"notadminroutes"}>
      //     {notadminroutes.map((route: IRoute) => {
      //       return <>
      //       <Route path={route.path} key={route.key} element={route.component} />
      //       </>
      //     })}
      //   </Routes>}
      //   </main>
      // </Router>
       
      <Router>
        <main>
    
          <Routes key={"notadminroutes"}>
          {routes.map((route: IRoute) => {
            return <>
            <Route path={route.path} key={route.key} element={route.component} />
            </>
          })}
        </Routes>
        </main>
      </Router>
  )
}


export default App
