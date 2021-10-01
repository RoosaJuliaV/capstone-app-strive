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
        <div style={{ 
            backgroundImage: `url("https://wallpaperaccess.com/full/340434.png")` 
          }}>
        <Row>
        <Col xs={12} sm={12} lg={4}>
            <SideBar/>
        </Col>
        <Col xs={12} sm={12} lg={8}>
        <h1 className="favoritestext">Favorites</h1>
           <Favorites/>
        </Col>
       </Row>
    </div>
    )
}

export default Home;