import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import SleepRow from "../components/SleepRow"
import "./Sleep.css"
import BreatheRow from "../components/BreatheRow"
import HomeMain from "../components/HomeMain"
  
import React from 'react';


const Home = () => {
    return (
     
        <div id="homeshadow">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <HomeMain/>
        </Col>
       </Row>
    </div>
    
    )
}

export default Home