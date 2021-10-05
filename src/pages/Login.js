import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBJumbotron } from "mdbreact";
import { Button } from "react-bootstrap"
  
import React from 'react';


const Login = () => {
    return (
        <div>
        <MDBJumbotron fluid className="jumbotron">
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
        {/* <img className="jumbopeopleimg" src="https://v7v2n5e8.rocketcdn.me/wp-content/uploads/happy-black-woman.png"/> */}
        </div>
    </MDBJumbotron>
    </div>
    )
}

export default Login