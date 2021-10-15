import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import Favorites from "../components/Favorites"
import "./Home.css"
import Footer from "../components/Footer"
import React from 'react';


const FavoritesPage = () => {
    return (
        <div>
        <div id="favoriteshadow">
        <div className="sleepmaindiv">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <Favorites/>
           </Col>
       </Row>
       </div>
    </div>
    <div>
       <Row>
           <Col xs={12} sm={12} lg={2}>
         <div id="favfootershadow">
              </div>
           </Col>
       </Row>
       </div>
       </div>
    )
}

export default FavoritesPage;