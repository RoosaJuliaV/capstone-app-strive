/* import React from "react";
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

</MDBRow>                 
 </MDBContainer>           
      </div>
  )
}

export default MeditateRow */

import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBCard,
  MDBIcon,
} from "mdbreact";

import { Button, Nav, Card, CardImg } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MeditateRow = () => {
  const [albumsArray, setAlbumsArray] = useState([]);

  const FetchAlbums = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=Meditative`
    );
    if (response.ok) {
      const result = await response.json();
      setAlbumsArray(result.data);
      console.log(result);
    }
  };
  useEffect(() => {
    FetchAlbums();
  }, []);
  return (
    <div className="sleepcontainer">
      <MDBContainer className="sleepcards">
        <MDBRow>
          <div className="d-flex flex-row">
            <Nav className="navbar fixed-top navbar" id="meditatenav">
              <div className="container-fluid" id="meditatenavdiv">
                <h1 className="meditateheading mb-4 ml-0">
                  <strong>Meditate</strong>
                </h1>
                <Button
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                  data-mdb-ripple-color="dark"
                  id="favoritesbutton"
                >
                  See all
                  <MDBIcon icon="angle-down" className="ml-2" />
                </Button>
              </div>
            </Nav>
          </div>
        </MDBRow>
        <MDBRow>
          <MDBCard className="topmeditatecard mb-5 ml-4">
          <div className="topcardshadow">
            <div className="text-white d-flex align-items-center py-5 px-4">
              <div id="sleepcardtitletop">
                <h3 className="card-title px-3" id="topcardhead">
                  Listen to the clip of the day now
                </h3>
              </div>
            </div>
            </div>
          </MDBCard>
          
        </MDBRow>
        <MDBRow className="mx-0">
       {albumsArray.length > 0 && albumsArray.map((albumObj) => ( <MDBCard key={albumObj.id} className="sleepcard2 px-0">
       <Link className="text-white" to={"/Album/" + albumObj.album.id}>
       <Card.Img variant="top" className="rounded-0" src={albumObj.album.cover_medium} id="sleepcardimg" />
            <div className="text-white d-flex py-4 px-1">
              <div
                className="rgba-black-light mt-auto pr-4 pr-1"
                id="sleepcardtitle"
              >
                <h5 className="card-title">{albumObj.album.title.replace(/[^a-z\d\s]+/gi, "").substring(0, 25)}</h5>
              </div>
            </div>
          </Link>
          </MDBCard> 
          
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default MeditateRow;