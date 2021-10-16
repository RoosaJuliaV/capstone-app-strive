import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron, MDBCarouselCaption } from "mdbreact";
import { Button } from "react-bootstrap"
import NavBar from "../components/NavBar";
import React from 'react';
import LoginFooter from "../components/LoginFooter";
import { Link } from "react-router-dom"
import JoinMod from "../components/JoinMod";


const Login = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { 
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="loginwrap">
        <div className="loginbgdiv">
        <div className="loginshadowdiv">
            <NavBar/>
            <MDBJumbotron fluid id="homejumbo">
            <div className="jumboshadow">
             {/*} backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2020/06/04/Dark-Purple-Gradient-Background-Graphics-4278236-1.jpg")`}}*/} 
      <MDBContainer>
        <h2 className="display-3" id="jumbotitle">Music for mindfulness</h2>
        <p className="lead mt-3 mb-4">Listen and set timed alerts for moments of relaxation.</p>
        {/* <Link to="/login"><Button variant="outline-dark" id="navbutton" className="mt-3">Get Started</Button></Link> */}
        <div className="header__search mt-2"><Button onClick={handleOpen} variant="outline-dark" id="joinbtn">  <JoinMod open={open} handleOpen={handleOpen} handleClose={handleClose}  />Get started</Button></div>
      </MDBContainer>
      </div>
    </MDBJumbotron>
       {/* <MDBJumbotron fluid className="jumbotron">
      <div className="jumbotron-cover-image">
          <MDBContainer id="jumbodiv">
        <h1 className="mt-5 ml-5">Mindfulness from home</h1>
        <p className="ml-5">
           Easy-to-use stress-managing tool<br/>
           Track your habits and progress<br/>
           Change the course of your life with our self-help regimes
        </p>
        <div className="d-flex flex-row ml-5">
        <Button variant="outline-dark" className="btn btn-lg" id="jumbobtn">
         Join Reboost now
        </Button>
        </div>
        </MDBContainer>
        {/* <img className="jumbopeopleimg" src="https://v7v2n5e8.rocketcdn.me/wp-content/uploads/happy-black-woman.png"/>
        </div>
    </MDBJumbotron> */}
    </div>
    </div>
    <LoginFooter/>
    </div>
    )
}

export default Login