import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter variant="light" id="footer" className="font-small pt-1 pb-3">
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
            <h5 className="title ml-4">Contact us</h5>
            <ul className="d-flex flex-row ml-5">
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-facebook ml-5 mr-3" id="footericon"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-twitter mr-3" id="footericon"></i></a>
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
  );
}

export default Footer;