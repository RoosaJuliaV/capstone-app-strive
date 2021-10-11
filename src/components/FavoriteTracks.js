import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBCard,
  MDBIcon,
} from "mdbreact";
import { Button, Nav, Spinner, Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { removeSongFromPlaylist } from "../actions";

const mapStateToProps = (state) => ({
  playList: state.playList.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromPlaylist: (i) => dispatch(removeSongFromPlaylist(i)),
});

const FavoriteTracks = ({ playList }) => {
  const params = useParams();

  const [trackArray, setTrackArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function convertDuration(time) {
    let time2 = Math.floor(time % 60);

    if (time2.toString().length < 2) {
      time2 = time2 * 10;
    }
    let length = Math.floor(time / 60) + ":" + time2;
    return length;
  }

  return (
    <div>
      <div className="breathesidebg col-lg-2 d-none d-lg-block"></div>
      <MDBContainer className="sleepcards">
        <MDBRow>
          <div className="d-flex flex-row">
            <Nav
              className="navbar fixed-top navbar"
              id="favtracksnav"
            >
              <div className="container-fluid" id="meditatenavdiv">
              <div className="col-lg-2 d-none d-lg-block"></div>
                <h1 className="favoriteheading mb-4 ml-4 mr-auto">
                <Link to="/favoritespage" className="favtrackslink">
                    <MDBIcon icon="angle-left" className="favarrow ml-2" />
                  </Link>
                  {/* <strong>Favourites</strong> */}
                  <Button
                    type="button"
                    className="btn btn-outline-light btn-rounded mt-3"
                    data-mdb-ripple-color="dark"
                    id="favoritesbutton"
                  >
                    Sort by name
                    <MDBIcon icon="angle-down" className="ml-2" />
                  </Button>
                </h1>
              </div>
            </Nav>
          </div>
        </MDBRow>
        <MDBRow>
          {/* <MDBCard className="mb-5 ml-4" id="favtopcard">
            <div className="text-white d-flex align-items-center py-5 px-4">
              <div id="sleepcardtitletop">
                <h3 className="card-title px-3 ml-4" id="topcardhead">
                  My favourites tracklist
                </h3>
              </div>
            </div>
  </MDBCard> */}
        </MDBRow>
        <MDBRow className="favtracks">
          {/*  {isLoading && (
            <div className="spinnerdiv">
              <Spinner
                animation="border"
                variant="light"
                className="spinner mb-3"
        />
            </div>
        )} */}
          {/* {playList.map((track, i) => (
            <MDBCard key={i} className="sleepcard2 px-0">
              <Link className="text-white" to={"/Album/" + track.artist.id}>
               {/*} <Card.Img
                  variant="top"
                  className="rounded-0"
                  src={track.cover_medium}
                  id="sleepcardimg"
          /> */}
          {/*  <div className="text-white d-flex py-4 px-1">
                  <div
                    className="rgba-black-light mt-auto pr-4 pr-1"
                    id="sleepcardtitle"
                  >
                    <h5 className="sleepCardTitle card-title">
                      {track.title
                        .replace(/[^a-z\d\s]+/gi, "")
                        .substring(0, 25)}
                    </h5>
                    <button
                      className="favbtn button-round"
                      onClick={() => removeSongFromPlaylist(i)}
                    >
                      <MDBIcon far icon="heart" className="trackFavorite" />
                    </button>
                  </div>
                </div>
              </Link>
            </MDBCard>
          </div> */}
          <MDBContainer className="favtrackscard">
            <ListGroup className="favtrackscards">
              {playList.map((track, i) => (
                <ListGroup.Item className="favtrackscard my-2" key={i}>
                  <div className="favtracksgrid d-flex align-items-center mx-auto">
                    {" "}
                    {i + 1}
                    <div className="albumSong ml-4">{track.title}</div>
                    <div className="favduration">
                      {convertDuration(track.duration)}
                    </div>
                    <button
                      className="removefavtrackbtn button-light ml-3"
                      onClick={() => removeSongFromPlaylist(i)}
                    >
                      <MDBIcon far icon="heart" className="trackFavorite" />
                    </button>
                  </div>
                </ListGroup.Item>
                /* <Button
              onClick={() => props.removeFromFavourites(i)}
              variant="danger"
              size="sm"
              className="removebutton"
            >
              Remove
           </Button> */
              ))}
            </ListGroup>
          </MDBContainer>
          {/*  <div className="d-flex pr-5 pt-3">
    <div className ="albumContainer pr-1">
      <div className="main-container main-container-album album-songs-container d-flex flex-row">
        <div className="top-of-artist-songs mb-3 pt-3">
        </div>
        <div className="col-md-12 d-flex flex-row mt-0">
          <table id="albumtable" className="table table-borderless ml-5">
            <thead>
              <tr className="border_bottom">
              <td> 
             
                  <Link className="text-white" href="/">
                      <MDBIcon icon="chevron-left" className="albumArrow mt-2"/>
                      </Link>
                      
                      </td>
              <td>
              <MDBIcon far icon="clock" className="albumClock"/>
                  </td>
               <td>
              
               <MDBIcon far icon="heart" className="albumFavorite"/>
                </td>
              </tr>
            </thead>
            <tbody>
              {trackArray.map((track, i) => (
                <tr>
                  <td className="trackNumber align-middle">{i + 1}</td>
                  <td>
                    <div className="albumSong">
                      <strong>{track.title}</strong>
                    </div>
               
                  </td>

                  <td className="align-middle keep-on-page"><strong>
                  {convertDuration(track.duration)}</strong>
                  </td>
                  <td>
                  <button className="favbtn button-round" onClick={() => removeFromPlaylist(track)}>
                  <MDBIcon far icon="heart" className="trackFavorite"/>
                  </button>
                  </td>
                 
                </tr>
              ))}
            </tbody>
            </table>
            </div>
            </div>
          
            </div>
          </div>
        
         */}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteTracks);
