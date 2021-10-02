import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button, Nav } from "react-bootstrap"

const MeditateRow = () => {
  return (
      <div className="sleepcontainer">
              <MDBContainer className="sleepcards">
            <MDBRow>
            <div className="d-flex flex-row">
            <Nav className="navbar fixed-top navbar" id="meditatenav">
            <div className="container-fluid" id="meditatenavdiv">
            <h1 className="meditateheading mb-4 ml-0"><strong>Meditate</strong></h1>
            <Button
          type="button"
          className="btn btn-outline-light btn-rounded"
          data-mdb-ripple-color="dark"
          id="favoritesbutton"
          >
        See all<MDBIcon icon="angle-down" className="ml-2"/>
        </Button>
        </div>
        </Nav>
        </div>
        </MDBRow>
                 <MDBRow>
                  <MDBCard className="topsleepcard mb-5 ml-4">
  <div className="text-white d-flex align-items-center py-5 px-4">
    <div id="sleepcardtitletop">
      <h3 className="card-title px-3">Listen to the clip of the day now</h3>
    </div>
  </div>
</MDBCard>
</MDBRow>
<MDBRow className="mx-0">
<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>

<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>
</MDBCard>

<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>
<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>
<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>
<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>
<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>
<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>
<MDBCard className="sleepcard2 px-0">
  <div className="text-white d-flex py-4 px-1">
    <div className="rgba-black-light mt-auto pr-4 pr-1" id="sleepcardtitle">
      <h5 className="card-title">This is the card title</h5>
    </div>
  </div>

</MDBCard>
</MDBRow>                 
 </MDBContainer>           
      </div>
  )
}

export default MeditateRow