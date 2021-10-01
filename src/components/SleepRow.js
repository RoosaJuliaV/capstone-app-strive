import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard } from "mdbreact";

const SleepRow = () => {
  return (
      <MDBContainer>
              <MDBRow className="mb-4">
              <MDBCard>
                  <div className="topcard d-flex flex-row" id="topcard">
  <img src="https://st3.depositphotos.com/1006076/36507/v/380/depositphotos_365071724-stock-illustration-aged-romantic-autumn-downtown-wall.jpg" className="card-img-top" id="topcardimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
</MDBCard>
                      </MDBRow>
              <MDBCol>
                  <MDBRow>
                  <MDBCard className="sleepcard2">
  <div className="text-white d-flex align-items-center py-5 px-4">
    <div className="rgba-black-light" id="sleepcardtitle">
      <h5 className="card-title px-3">This is the card title</h5>
    </div>
  </div>
</MDBCard>
<MDBCard className="sleepcard2">
  <div className="text-white d-flex align-items-center py-5 px-4">
    <div className="rgba-black-light" id="sleepcardtitle">
      <h5 className="card-title px-3">This is the card title</h5>
    </div>
  </div>

</MDBCard>
                  <MDBCard className="sleepcard">
                      Left Card 1
                  </MDBCard>
                  <MDBCard className="sleepcard">
                      Left Card 1
                  </MDBCard>
                  <MDBCard className="sleepcard">
                      Left Card 1
                  </MDBCard>
                  <MDBCard className="sleepcard">
                      Left Card 1
                  </MDBCard>
                  <MDBCard className="sleepcard">
                      Left Card 1
                  </MDBCard>
                  <MDBCard className="sleepcard">
                      Left Card 1
                  </MDBCard>
                  </MDBRow>
              </MDBCol>
      </MDBContainer>
  )
}

export default SleepRow