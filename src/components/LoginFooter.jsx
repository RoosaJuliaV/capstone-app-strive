import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron, MDBCarouselCaption } from "mdbreact";
import { Button } from "react-bootstrap"
import NavBar from "../components/NavBar";
import React from 'react';
import Footer from "../components/Footer";



const LoginFooter = () => {

    return (

<footer variant="light" id="footer" className="font-small pb-5">
<MDBContainer fluid className="loginfooterdiv align-space-between d-flex flex-row">
<MDBRow className="d-flex flex-row text-center">
      <MDBCol md="3" sm="3" xs="3" className="mr-0">
  <h5 className="title mb-4 mt-1">About Us</h5>
  <h5 className="title mb-4">FAQs</h5>
      <h5 className="title mb-4">Terms</h5>
  </MDBCol>
  <MDBCol md="6" sm="4" xs="4">
<ul className="loginfooterlist">
  <li className="loginfootercentertitle mb-4 d-flex flex-row">If you are under intensive emotional distress, please reach out to:</li>
     <li className="mb-4 ml-4"> Austria Suicide Hotline: 017133374</li>
     <li className="mb-4 ml-3"> Germany Suicide Hotline: 08001810771</li>
     <li className="mb-1 ml-3"> UK Suicide Hotline: 0800 689 5652</li>
      </ul>
   </MDBCol>
    <MDBCol md="3" sm="4" xs="4" className="">
    <h5 className="list-unstyled mt-1 mb-2 ml-4">Contact Us</h5>
      <ul className="d-flex flex-row text-center mt-4 mr-3">
        <li className="list-unstyled ml-4">
          <a href="#!"><i className="fab fa-facebook mr-3" id="footericon"></i></a>
        </li>
        <li className="list-unstyled">
          <a href="#!"><i className="fab fa-twitter mr-3" id="footericon"></i></a>
        </li>
        <li className="list-unstyled">
          <a href="#!"><i className="fab fa-linkedin" id="footericon"></i></a>
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
</footer>

    )
}

export default LoginFooter