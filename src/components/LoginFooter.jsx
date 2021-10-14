import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron, MDBCarouselCaption } from "mdbreact";
import { Button } from "react-bootstrap"
import NavBar from "../components/NavBar";
import React from 'react';
import Footer from "../components/Footer";



const LoginFooter = () => {

    return (

<footer variant="light" id="footer" className="font-small pb-5">
<MDBContainer fluid className="loginfooterdiv align-space-between">
<MDBRow className="d-flex flex-row text-center">
      <MDBCol lg="2" sm="2" xs="2" className="ml-0">
  <h5 className="title mb-4 mt-1">About Us</h5>
  <h5 className="title mb-4">FAQs</h5>
      <h5 className="title">Terms</h5>
  </MDBCol>
  <MDBCol md="7" sm="7" xs="7">
  <h5 className="title mb-4 mr-5">If you are under intensive emotional distress, please reach out to:</h5>
  <ul className="loginfooterlist d-flex">
     <li className="mb-3"> Austria Suicide Hotline: 017133374</li>
     <li className="mb-3"> Germany Suicide Hotline: 08001810771</li>
     <li className="mb-3"> UK Suicide Hotline: 0800 689 5652</li>
      </ul>
   </MDBCol>
    <MDBCol md="3" sm="3" xs="3" className="text-center">
    <h5 className="loginfootertitle">Contact Us</h5>
      <ul className="d-flex flex-row text-center mt-3 mr-3">
        <li className="list-unstyled">
          <a href="#!"><i className="fab fa-facebook mr-2" id="footericon"></i></a>
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
</footer>

    )
}

export default LoginFooter