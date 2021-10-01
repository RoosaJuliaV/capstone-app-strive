import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import Favorites from "../components/Favorites"
  
import React from 'react';


const Home = () => {
    return (
        <div>
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <Favorites/>
        </Col>
       </Row>
    </div>
    )
}

export default Home;