import {Routes, Route} from 'react-router-dom';

import { BrowserRouter as Router } from "react-router-dom";


// import { Header } from './ui/header';
import { IRoute } from './models/models';
import { routes } from './data/routes';
// import { Footer } from './ui/footer';




function App() {

  return (
    <>

      <Router>
      {/* <Header /> */}
  <main>
        <Routes>

            {routes.map((route: IRoute) => {
                return <Route path={route.path} key={route.key} element={route.component} />
            })}
        </Routes>
        </main>
{/* <Footer /> */}
    </Router>
    </>
  )
}


export default App
