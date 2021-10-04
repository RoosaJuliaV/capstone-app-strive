import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button, Nav } from "react-bootstrap"

const Favorites = () => {
  return (
    <div className="sleepcontainer">
    <MDBContainer className="sleepcards">
  <MDBRow>
  <div className="d-flex flex-row">
  <Nav className="navbar fixed-top navbar" id="favoritenav">
            <div className="container-fluid" id="meditatenavdiv">
            <h1 className="favoriteheading mb-4 ml-0"><strong>Favourites</strong></h1>
            <Button
          type="button"
          className="btn btn-outline-light btn-rounded"
          data-mdb-ripple-color="dark"
          id="favoritesbutton"
          >
        Sort by name<MDBIcon icon="angle-down" className="ml-2"/>
        </Button>
        </div>
        </Nav>
</div>
      </MDBRow>
       <MDBRow>
        <MDBCard className="mb-5 ml-4" id="favtopcard">
<div className="text-white d-flex align-items-center py-5 px-4">
<div id="sleepcardtitletop">
<h3 className="card-title px-3 ml-4">My favourites tracklist</h3>
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
</MDBRow>                 
</MDBContainer>           
</div>
)
}


     {/*} <div className="favcontainer">
      <MDBContainer className="ml-4 px-5">
         
          <div className="d-flex flex-row">
          <h1 className="favoritestext mb-4 mt-5"><strong>Favorites</strong></h1>
          <Button
          type="button"
          className="btn btn-outline-light btn-rounded"
          data-mdb-ripple-color="dark"
          id="favoritesbutton"
          >
        See tracks
        </Button>
        </div>
        
          <MDBRow>
              <MDBCard className="mx-0 mb-3" id="favoritecard">
                  <div className="topcard d-flex flex-row">
  <img src="https://st3.depositphotos.com/1006076/36507/v/380/depositphotos_365071724-stock-illustration-aged-romantic-autumn-downtown-wall.jpg" id="favoriteimg" alt="..."/>
  <div className="card-body" id="favoritecardbody">
    <h5 className="favtitle card-title mt-3">Card title<MDBIcon far icon="heart" id="favheart" className="mb-5"/></h5>
  </div>
  </div>
</MDBCard>
<MDBCard id="favoritecard">
                  <div className="topcard d-flex flex-row">
  <img src="https://st3.depositphotos.com/1006076/36507/v/380/depositphotos_365071724-stock-illustration-aged-romantic-autumn-downtown-wall.jpg" id="favoriteimg" alt="..."/>
  <div className="card-body" id="favoritecardbody">
    <h5 className="favtitle card-title mt-3">Card title</h5>
  </div>
  </div>
</MDBCard>
          </MDBRow>
      </MDBContainer>
  </div> */}

export default Favorites
