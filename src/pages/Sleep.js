import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import SleepRow from "../components/SleepRow"
import "./Sleep.css"
import Footer from "../components/Footer"
  
import React from 'react';


const Sleep = () => {
    return (
        <div>
        <div id="sleepshadow">
        <div className="sleepmaindiv">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <SleepRow/>
           </Col>
       </Row>
       </div>
    </div>
    <div>
       <Row>
           <Col xs={12} sm={12} lg={2}>
           <div id="sleepfootershadow">
           <Footer/>
           </div>
           </Col>
       </Row>
       </div>
       </div>
    )
}

export default Sleep