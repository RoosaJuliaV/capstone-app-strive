import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaDiceD20 } from "react-icons/fa";



 
const NavBar = () => {

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
<Nav.Link href="/home">
  <Navbar.Brand>
  <FaDiceD20 id="navlogo"/>
  Reboost
  </Navbar.Brand>
  </Nav.Link>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navleft">
      <Nav.Link href="/login" id="navlogin">LOGIN</Nav.Link>
      <Nav.Link href="/signup"><Button variant="outline-dark" id="navbutton">GET STARTED</Button></Nav.Link>
  </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default NavBar