import React from "react";
import {Nav, Button} from "react-bootstrap";
import { withRouter } from "react-router";
import { MDBIcon } from "mdbreact"



const SideBar = () => {
   

    return (
        <>
            <Nav className="pl-1 d-block sidebar"
            activeKey="/home"
            >
               <img
                alt=""
                src=""
                width="50"
                height="auto"
                className="d-inline-block align-top"
            />
                <div className="sidebar-sticky pr-3">
                <div className="form-group ml-2 mt-2">
      <input type="email" className="form-control" placeholder="Search" />
    </div>
                </div>
            <Nav.Item>
                <Nav.Link id="navText" href="/"><Button className="btn- btn-primary btn-floating mr-2 mb-2" id="naviconbutton"><MDBIcon icon="home" id="sidenavicon" /></Button>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="link-2"><Button className="btn- btn-primary btn-floating mr-2 mb-2" id="naviconbutton"><MDBIcon icon="moon" id="sidenavicon"/></Button>Sleep</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><Button className="btn- btn-primary btn-floating mr-2 mb-2" id="naviconbutton"><MDBIcon icon="spa" id="sidenavicon"/></Button>Meditate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><Button className="btn- btn-primary btn-floating mr-2 mb-2" id="naviconbutton"><MDBIcon icon="cloud" id="sidenavicon"/></Button>Breathe</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><Button className="btn- btn-primary btn-floating mr-2 mb-2" id="naviconbutton"><MDBIcon icon="heartbeat" id="sidenavicon"/></Button>Energize</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><Button className="btn- btn-primary btn-floating mr-2 mb-2" id="naviconbutton"><MDBIcon icon="play" id="sidenavicon"/></Button>3 min relax</Nav.Link>
            </Nav.Item>
            <br/>
            <div id="sideMenu">
            
            </div>
            </Nav>
        </>
        )
  }

  export default SideBar