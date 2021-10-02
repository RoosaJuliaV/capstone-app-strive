import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import SleepRow from "../components/SleepRow"
import "./Sleep.css"
import BreatheRow from "../components/BreatheRow"
  
import React from 'react';


const Breathe = () => {
    return (
        <div id="breatheshadow">
        <div>
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <BreatheRow/>
        </Col>
       </Row>
    </div>
    </div>
    )
}

export default Breathe