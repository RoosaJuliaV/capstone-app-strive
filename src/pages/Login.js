import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron } from "mdbreact";
import { Button } from "react-bootstrap"
import NavBar from "../components/NavBar";
import React from 'react';
import Footer from "../components/Footer";


const Login = () => {
    return (
        <div className="loginwrap">
        <div className="loginbgdiv">
        <div className="loginshadowdiv">
            <NavBar/>
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
    <MDBFooter variant="light" id="footer" className="font-small pb-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="3">
            <h5 className="title">About us</h5>
            <h5 className="title">FAQs</h5>
            <h5 className="title">Terms</h5>
              </MDBCol>
          <MDBCol md="6">
            <h5 className="title">If you are under intensive emotional distress, please reach out to:</h5>
            <p>
            Austria Suicide Hotline: 017133374<br/>
            Germany Suicide Hotline: 08001810771<br/>
            UK Suicide Hotline: 0800 689 5652<br/>
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title ml-2">Contact us</h5>
            <ul className="d-flex flex-row ml-5">
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-facebook ml-5 mr-2" id="footericon"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-twitter mr-2" id="footericon"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-linkedin mr-3" id="footericon"></i></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
       {/* <div className="footer-copyright text-center py-3 text-black" id="copyright">
        <MDBContainer fluid>
          © 2021 Reboost Inc.
        </MDBContainer>
</div> */}
      </MDBContainer>
      
    </MDBFooter>
    </div>
    </div>
    )
}

export default Login