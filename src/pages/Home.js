import { Row, Col } from "react-bootstrap"
import HomeJumbo from '../components/HomeJumbo';
import SleepRow from "../components/SleepRow"
import "./Sleep.css"
import BreatheRow from "../components/BreatheRow"
import HomeMain from "../components/HomeMain"
import Footer from "../components/Footer"
import React from 'react';


const Home = () => {
    return (
        <div>
        <div id="homeshadow">
        <div className="homemain">
        <Row>
        <Col xs={12} sm={12} lg={12}>
           <HomeMain/>
           </Col>
       </Row>
       </div>
    </div>
    <div>
       <Row>
           <Col xs={12} sm={12} lg={2}>
          {/* <div id="homefootershadow">
     <Footer/>
              </div> */}
           </Col>
       </Row>
       </div>
       </div>
    )
}

export default Home