import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import SleepRow from "../components/SleepRow"
import "./Sleep.css"
import BreatheRow from "../components/BreatheRow"
import Footer from "../components/Footer"  
import React from 'react';


const Breathe = () => {
    return (
        <div>
        <div id="breatheshadow">
        <div className="sleepmaindiv">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <BreatheRow/>
           </Col>
       </Row>
       </div>
    </div>
    <div id="breathefootershadow">
       <Row>
           <Col>
           <div>
           <Footer/>
           </div>
           </Col>
       </Row>
       </div>
       </div>
    )
}

export default Breathe