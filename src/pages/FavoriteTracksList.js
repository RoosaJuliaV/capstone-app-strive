import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import FavoriteTracks from "../components/FavoriteTracks"
import "./Home.css"
import Footer from "../components/Footer"
import React from 'react';


const FavoriteTrackList = () => {
    return (
        <div>
        <div id="favtracksshadow">
        <div className="favmaindiv">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <FavoriteTracks/>
           </Col>
       </Row>
       </div>
    </div>
    <div>
       <Row>
           <Col xs={12} sm={12} lg={2}>
           <div id="favtracksfootershadow">
           <Footer/>
           </div>
           </Col>
       </Row>
       </div>
       </div>
    )
}

export default FavoriteTrackList;