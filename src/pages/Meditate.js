import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import MeditateRow from "../components/MeditateRow"
import "./Sleep.css"
import Footer from "../components/Footer"
  
import React from 'react';


const Meditate = () => {
    return (
        <div>
        <div id="meditateshadow">
            <div id="sleepmaindiv">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <MeditateRow/>
           </Col>
       </Row>
       </div>
    </div>
    <div>
       <Row>
           <Col xs={12} sm={12} lg={2}>
           {/* <div id="meditatefootershadow">
     <Footer/>
              </div> */}
           </Col>
       </Row>
       </div>
       </div>
    )
}

export default Meditate