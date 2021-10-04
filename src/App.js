import React, { Component } from "react"
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
// import { Container } from "react-bootstrap"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Home from "./pages/FavoritesPage"
import Sleep from "./pages/Sleep"
import SideBar from "./components/SideBar"
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Nav } from "react-bootstrap"
import Meditate from "./pages/Meditate"
import Breathe from "./pages/Breathe"
import FavoritesPage from "./pages/FavoritesPage"
import Album from "./pages/Album"


    function App() {
      return (
        <div className="appdiv">
        <Router>
            <div className="sidebardiv">
            <SideBar/>
            </div>
            <div className="appmaindiv">
        <Switch>
        <Route path="/login"> <NavBar/><Login/>
        </Route>
        <Route path="/favoritespage"> <FavoritesPage/>
        </Route>
        <Route path="/sleep"> <Sleep/>
        </Route>
        <Route path="/meditate"> <Meditate/>
        </Route>
        <Route path="/breathe"> <Breathe/>
        </Route>
        <Route path="/album"> <Album/>
        </Route>
        </Switch>
        </div>
        {/* <Footer/> */}
            </Router>
            </div>
      );
    }
    
    export default App;
    

