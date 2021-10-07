/* import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button, Nav } from "react-bootstrap"

const SleepRow = () => {
  return (
      <div className="sleepcontainer">
              <MDBContainer className="sleepcards">
            <MDBRow>
            <div className="d-flex flex-row">
            <Nav className="navbar fixed-top navbar" id="sleepnav">
            <div className="container-fluid" id="sleepnavdiv">
            <h1 className="sleepheading mb-4 ml-0"><strong>Sleep</strong></h1>
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
      <h3 className="card-title px-3">Listen to the clip of the day now<MDBIcon icon="angle-right" className="ml-4"/></h3>
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

export default SleepRow */

import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBCard,
  MDBIcon,
} from "mdbreact";

import { Button, Nav, Card, CardImg, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SleepRow = () => {
  const [albumsArray, setAlbumsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  const FetchAlbums = async () => {
    setIsLoading(true)
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=Relaxing_Sounds`
    );
    if (response.ok) {
        setIsLoading(false)
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
         <div className="sidebarbgdiv col-lg-2 d-none d-lg-block">
      </div>
      <MDBContainer className="sleepcards">
        <MDBRow>
          <div className="d-flex flex-row">
            <Nav className="navbar fixed-top navbar" id="sleepnav">
              <div className="container-fluid" id="sleepnavdiv">
              <div className="col-lg-2 d-none d-lg-block">
                </div>
                <h1 className="sleepheading mb-4 ml-4 mr-auto">
                  <strong>Sleep</strong>
                <Button
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                  data-mdb-ripple-color="dark"
                  id="favoritesbutton"
                >
                  See all
                  <MDBIcon icon="angle-down" className="ml-2" />
                </Button>
                </h1>
              </div>
            </Nav>
          </div>
        </MDBRow>
        <MDBRow>
          <MDBCard className="topsleepcard mb-5 ml-4">
            <div className="text-white d-flex align-items-center py-5 px-4">
              <div id="sleepcardtitletop">
                <h3 className="card-title px-3" id="topcardhead">
                  Listen to the clip of the day now
                </h3>
              </div>
            </div>
          </MDBCard>
        </MDBRow>
        <MDBRow className="mx-0">
        {
                    isLoading &&
                    <div className="spinnerdiv">
                    <Spinner animation="border" variant="light" className="spinner mb-3"/>
                    </div>
       }
       {albumsArray.length > 0 && albumsArray.map((albumObj) => ( <MDBCard key={albumObj.id} className="sleepcard2 px-0">
       <Link className="text-white" to={"/Album/" + albumObj.album.id}>
       <Card.Img variant="top" className="rounded-0" src={albumObj.album.cover_medium} id="sleepcardimg" />
            <div className="text-white d-flex py-4 px-1">
              <div
                className="rgba-black-light mt-auto pr-4 pr-1"
                id="sleepcardtitle"
              >
                <h5 className="sleepcardTitle card-title">{albumObj.album.title.replace(/[^a-z\d\s]+/gi, "").substring(0, 25)}</h5>
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

export default SleepRow;
