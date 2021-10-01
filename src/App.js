import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
// import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Sleep from "./pages/Sleep"
import SideBar from "./components/SideBar"
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <Router>
      <div className="appdiv">
        <div className="sidebardiv">
        <SideBar/>
        </div>
        <div className="appmaindiv">
    <Switch>
    <Route path="/login"> <NavBar/><Login/>
    </Route>
    <Route path="/home"> <Home/>
    </Route>
    <Route path="/sleep"> <Sleep/>
    </Route>
    </Switch>
    </div>
    </div>
    {/* <Footer/> */}
        </Router>
  );
}

export default App;