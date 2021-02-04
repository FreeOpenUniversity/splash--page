
import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home";
import Products from "./components/Products";
import Technologies from "./components/Technologies";
import Teams from "./components/Teams";
import Contact from "./components/Contact";



function App() {



  const routes = [  
  { title: "Home", path: "/", as: Home },
  { title: "Products", path: "/products", as: Products },
  { title: "Technologies", path: "/technologies", as: Technologies },
  { title: "Teams", path: "/teams", as: Teams },
  { title: "Contact", path: "/contact", as: Contact },
]


  return (
    <Router>    

      <Navbar/>
        <Switch>
          {routes.map(({ path, as }, index) => {
            return (
              <Route key={index} path={path} exact>
                {as}
              </Route>
            );
          })}
        </Switch>  
    </Router>
  );
}

export default App;
