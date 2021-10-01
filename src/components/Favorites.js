import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button } from "react-bootstrap"

const Favorites = () => {
  return (
      <div className="favcontainer">
      <MDBContainer className="ml-4 pr-5">
         
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
    <h5 className="favtitle card-title mt-4">Card title<MDBIcon far icon="heart" id="favheart" className="mb-5"/></h5>
  </div>
  </div>
</MDBCard>
<MDBCard id="favoritecard">
                  <div className="topcard d-flex flex-row">
  <img src="https://st3.depositphotos.com/1006076/36507/v/380/depositphotos_365071724-stock-illustration-aged-romantic-autumn-downtown-wall.jpg" id="favoriteimg" alt="..."/>
  <div className="card-body" id="favoritecardbody">
    <h5 className="favtitle card-title mt-4">Card title</h5>
  </div>
  </div>
</MDBCard>
          </MDBRow>
      </MDBContainer>
      </div>
  )
}

export default Favorites
