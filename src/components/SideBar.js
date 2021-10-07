import React from "react";
import {Nav, Button} from "react-bootstrap";
import { withRouter } from "react-router";
import { MDBIcon } from "mdbreact"
import { Link } from "react-router-dom"



const SideBar = () => {

    return (
        <>
            <Nav className="pl-1 d-none d-lg-block sidebar" id="sidebar"
            activeKey="/home"
            >
                <div className="sidelogodiv">
               <img
                alt="logo"
                src="https://www.calm.com/_n/images/calm-logo.png"
                width="90"
                height="auto"
                className="d-inline-block align-top mt-4 mb-3 ml-4"
            />
            </div>
                <div className="sidebar-fixed pr-3">
                <div id="sideinput" className="form-group ml-3 mt-2">
      <input type="email" className="form-control" placeholder="Search" />
    </div>
                </div>
            <Nav.Item>
                <Nav.Link id="navText" href="/home"><Button className="btn- btn-primary btn-floating mr-3 mb-2" id="naviconbutton"><MDBIcon icon="home" id="sidenavicon" /></Button>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Link to="/favoritespage" id="navText" className="favlinkside"><Button className="btn- btn-primary btn-floating mr-3 mb-2 favbtnside" id="naviconbutton"><MDBIcon icon="heart" id="sidenavicon"/></Button>Favourites</Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" href="/meditate"><Button className="btn- btn-primary btn-floating mr-3 mb-2" id="naviconbutton"><MDBIcon icon="spa" id="sidenavicon"/></Button>Meditate</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" href="/breathe"><Button className="btn- btn-primary btn-floating mr-3 mb-2" id="naviconbutton"><MDBIcon icon="cloud" id="sidenavicon"/></Button>Breathe</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link id="navText" href="/sleep"><Button className="btn- btn-primary btn-floating mr-3 mb-2" id="naviconbutton"><MDBIcon icon="moon" id="sidenavicon"/></Button>Sleep</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link id="navText" eventKey="disabled"><Button className="btn- btn-primary btn-floating mr-3 mb-2" id="naviconbutton"><MDBIcon icon="play" id="sidenavicon"/></Button>Quickstop</Nav.Link>
            </Nav.Item>
            <br/>
            <div id="sideMenu">
            </div>
            </Nav>
        </>
        )
  }

  export default SideBar