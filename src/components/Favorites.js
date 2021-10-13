import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBCard,
  MDBIcon,
} from "mdbreact";
import { Button, Nav, Spinner, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { removeSongFromPlaylist, playSong } from "../actions";

const mapStateToProps = (state) => ({
    currentSong: state.play.currentSong,
  playList: state.playList.tracks,

});

const mapDispatchToProps = (dispatch) => ({
    addToCurrentSong: (song) => dispatch(playSong(song)),
  removeFromPlaylist: (i) => dispatch(removeSongFromPlaylist(i)),
});

const Favorites = ({ playList, removeFromPlaylist, addToCurrentSong }) => {
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
    <div className="sleepcontainer">
      <div className="breathesidebg col-lg-2 d-none d-lg-block"></div>
      <MDBContainer className="sleepcards">
        <MDBRow>
          <div className="d-flex flex-row">
            <Nav className="navbar fixed-top navbar" id="favoritenav">
              <div className="container-fluid" id="meditatenavdiv">
                <div className="col-lg-2 d-none d-lg-block"></div>
                <h1 className="favoriteheading mb-4 ml-4 mr-auto">
                  <strong>Favourites</strong>
                  <Button
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                    data-mdb-ripple-color="dark"
                    id="bynamebutton"
                  >
                    By name
                    <MDBIcon icon="angle-down" className="ml-2" />
                  </Button>
                </h1>
              </div>
            </Nav>
          </div>
        </MDBRow>
        <MDBRow>
        
          <MDBCard className="mb-5 ml-4"  id="favtopcard">
          <Link to="/favoritetrackslist" id="navText" className="topfavlink">
            <div className="text-white d-flex align-items-center py-5 px-4">
              <div id="sleepcardtitletop">
                <h3 className="card-title px-3 ml-4" id="topcardhead">
               All your favourites on one playlist<MDBIcon icon="angle-right" id="topfavicon"/>
                </h3>
              </div>
            </div>
            </Link>
          </MDBCard>
          
        </MDBRow>
        <MDBRow className="mx-0">
        {/*  {isLoading && (
            <div className="spinnerdiv">
              <Spinner
                animation="border"
                variant="light"
                className="spinner mb-3"
        />
            </div>
        )} */}
          {playList.map((track, i) => (
            <MDBCard key={i} className="sleepcard2 px-0">
              <Card.Img
                  variant="top"
                  className="rounded-0"
                  src="https://c4.wallpaperflare.com/wallpaper/837/935/755/foggy-huawei-mate-10-morning-mountains-wallpaper-preview.jpg"
                  id="sleepcardimg"
          />
                <div className="text-white d-flex py-4 px-1">
                  <div
                    className="rgba-black-light mt-auto pr-4 pr-1"
                    id="sleepcardtitle"
                  >
                      <Link className="text-white" className="favcardlink" to={"/home"}>
                    <h5 className="sleepCardTitle card-title">
                      {track.title
                        .replace(/[^a-z\d\s]+/gi, "")
                        .substring(0, 25)}
                    </h5>
                    </Link>
                    <button
                      className="favbtncard button-round"
                      onClick={() => removeFromPlaylist(i)}
                    >
                      <MDBIcon far icon="heart" className="trackFavorite" />
                    </button>
                  </div>
                </div>
            </MDBCard>
          ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

/*} <div className="favcontainer">
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
</div> */
