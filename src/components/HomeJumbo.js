import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron } from "mdbreact";
import { Button } from "react-bootstrap"
  
import React from 'react';


const HomeJumbo = () => {
    return (
        <MDBJumbotron fluid id="homejumbo">
             {/*} backgroundImage: `url("https://www.creativefabrica.com/wp-content/uploads/2020/06/04/Dark-Purple-Gradient-Background-Graphics-4278236-1.jpg")`}}*/} 
      <MDBContainer>
        <h2 className="display-4">Fluid jumbotron</h2>
        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </MDBContainer>
    </MDBJumbotron>
    )
}

export default HomeJumbo