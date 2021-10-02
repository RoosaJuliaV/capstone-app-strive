import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import MeditateRow from "../components/MeditateRow"
import "./Sleep.css"
  
import React from 'react';


const Meditate = () => {
    return (
        <div id="meditateshadow">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <MeditateRow/>
        </Col>
       </Row>
    </div>
    )
}

export default Meditate