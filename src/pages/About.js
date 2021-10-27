import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron, MDBCarouselCaption } from "mdbreact";
import { Button } from "react-bootstrap"
import NavBar from "../components/NavBar";
import React from 'react';
import LoginFooter from "../components/LoginFooter";
import { Link } from "react-router-dom"
import JoinMod from "../components/JoinMod";
import { SiTypescript, SiJavascript, SiReact, SiRedux, SiCss3, SiHtml5, SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md"



const About = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => { 
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="aboutwrap">
        <div className="aboutbgdiv">
            <NavBar/>
            <MDBJumbotron fluid id="homejumbo">
            <div className="jumboshadow">
             {/*} backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2020/06/04/Dark-Purple-Gradient-Background-Graphics-4278236-1.jpg")`}}*/} 
      <MDBContainer>
        <h5 className="display-3" id="jumbotitle">Roosa Vuotso</h5>
        <h1 className="mt-4 mb-4">Frontend Developer</h1>
       
    </MDBContainer>
    </div>
    <div className="iconcontainerabout">
      <h1 className="skills">Skillset</h1>
      <SiTypescript className="abouticonts"/><SiJavascript className="abouticonjs"/><SiReact className="abouticonreact"/><SiRedux className="abouticonredux"/><SiCss3 className="abouticoncss"/><SiHtml5 className="abouticonhtml"/></div>
      <div className="contactcontainerabout">
      <p className="loginheading">Contact Me</p>
      <SiLinkedin className="abouticoncontact"/>https://www.linkedin.com/in/roosa-vuotso/<br/><SiGithub className="abouticoncontact"/>https://github.com/RoosaJuliaV<br/><MdEmail className="abouticoncontact"/>roosa@vuotso.fi</div>
    </MDBJumbotron>
    </div>
    <div className="header__search mt-5"><Link className="text-white ml-auto" to="/login"><Button variant="outline-dark" id="aboutbtn">Go Back</Button></Link></div>
    </div>
  
    )
}

export default About