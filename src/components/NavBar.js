import React from "react"
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaDiceD20 } from "react-icons/fa";
import { useState } from "react"
import LoginMod from "./LoginMod";
import JoinMod from "./JoinMod";
 
const NavBar = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpenLogin = () => { 
      setOpen(true);
    };
  
    const handleCloseLogin = () => {
      setOpen(false);
    };

    const handleOpenJoin = () => { 
        setOpen(true);
      };
    
      const handleCloseJoin = () => {
        setOpen(false);
      };
  

return (
   /* } <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
            <Navbar.Brand>Lifeline</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/">
                    
                </Link>
               
            </Nav>
        </Navbar.Collapse>
</Navbar> */
<Navbar collapseOnSelect expand="lg" variant="light" id="navbar">
<Container>
  <Navbar.Brand>
  <Nav.Link href="/home">
               <img
                alt="logo"
                src="https://www.calm.com/_n/images/calm-logo.png"
                width="90"
                height="auto"
                className="navbarlogo d-inline-block align-top"
            />
            </Nav.Link>
  </Navbar.Brand>

 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="light" className="navbartoggler"/>
  
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navleft d-flex flex-row">
        <Nav.Link href="/login"><Button variant="outline-dark" id="navbutton">JOIN NOW</Button></Nav.Link>
      <div className="header__search mt-2"><Button onClick={handleOpenLogin} variant="outline-dark" id="navbuttonlogin">  <LoginMod open={open} handleOpen={handleOpenLogin} handleClose={handleCloseLogin}  />Login</Button></div>
  </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default NavBar