import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import FavoriteTracks from "../components/FavoriteTracks"
import "./Home.css"
  
import React from 'react';


const FavoriteTrackList = () => {
    return (
        <div id="favtracksshadow">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <FavoriteTracks/>
        </Col>
       </Row>
    </div>
    )
}

export default FavoriteTrackList;