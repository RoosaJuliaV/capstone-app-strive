import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron } from "mdbreact";
import { Button } from "react-bootstrap"
  
import React from 'react';


const HomeJumbo = () => {
    return (
        <MDBJumbotron fluid id="homejumbo">
      <MDBContainer>
        <h2 className="display-4">Fluid jumbotron</h2>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </MDBContainer>
    </MDBJumbotron>
    )
}

export default HomeJumbo