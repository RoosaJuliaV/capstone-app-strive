import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button, Nav } from "react-bootstrap"
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { removeSongFromPlaylist } from "../actions";

const mapStateToProps = (state) => ({
    playList: state.playList.tracks
});

const mapDispatchToProps = (dispatch) => ({
    removeFromPlaylist: (song) => dispatch(removeSongFromPlaylist(song)),
});

  const Favorites = ({ removeFromPlaylist }) => {
    const params = useParams()

    const [trackArray, setTrackArray] = useState([])

    function convertDuration(time) {
        let time2 = Math.floor(time % 60);
      
        if (time2.toString().length < 2) {
          time2 = time2 * 10;
        }
        let length = Math.floor(time / 60) + ":" + time2;
        return length;
      }
    

  return (
    <div className="container">
         <div className="breathesidebg col-lg-2 d-none d-lg-block">
      </div>
    <MDBContainer className="sleepcards">
  <MDBRow>
  <div className="d-flex flex-row">
  <Nav className="navbar fixed-top navbar" id="favoritenav">
            <div className="container-fluid" id="meditatenavdiv">
            <div className="col-lg-2 d-none d-lg-block">
                </div>
            <h1 className="favoriteheading mb-4 mr-auto">
                <strong>Favourites</strong>
            <Button
          type="button"
          className="btn btn-outline-light btn-rounded"
          data-mdb-ripple-color="dark"
          id="favoritesbutton"
          >
        Sort by name<MDBIcon icon="angle-down" className="ml-2"/>
        </Button>
        </h1>
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
<MDBRow>
       <div className="d-flex pr-5 pt-3">
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
           {/*
         */}
</MDBRow>                 
</MDBContainer>           
</div>
)
}

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
