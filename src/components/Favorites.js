import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard } from "mdbreact";

const Favorites = () => {
  return (
      <MDBContainer>
          <MDBRow>
              <MDBCol>
              <MDBCard className="mb-3">
                  <div className="topcard d-flex flex-row" id="topcard">
  <img src="https://st3.depositphotos.com/1006076/36507/v/380/depositphotos_365071724-stock-illustration-aged-romantic-autumn-downtown-wall.jpg" className="card-img-top" id="topcardimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</MDBCard>
<MDBCard>
                  <div className="topcard d-flex flex-row" id="topcard">
  <img src="https://st3.depositphotos.com/1006076/36507/v/380/depositphotos_365071724-stock-illustration-aged-romantic-autumn-downtown-wall.jpg" className="card-img-top" id="topcardimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</MDBCard>
              </MDBCol>
          </MDBRow>
      </MDBContainer>
  )
}

export default Favorites
