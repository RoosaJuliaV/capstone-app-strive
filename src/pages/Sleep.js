import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import SideBar from "../components/SideBar"
import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import SleepRow from "../components/SleepRow"
  
import React from 'react';


const Sleep = () => {
    return (
        <div style={{ 
            backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2020/06/04/Dark-Purple-Gradient-Background-Graphics-4278236-1.jpg")` 
          }}>
        <Row>
        <Col xs={12} sm={12} lg={12}>
        <h1 className="sleepheading mb-4 mt-5"><strong>Sleep</strong></h1>
           <SleepRow/>
        </Col>
       </Row>
    </div>
    )
}

export default Sleep