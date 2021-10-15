/* import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter variant="light" id="footer" className="font-small pt-1 pb-3">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="3">
            <h5 className="title">About us</h5>
            <h5 className="title">FAQs</h5>
            <h5 className="title">Terms</h5>
              </MDBCol>
          <MDBCol md="6">
            <h5 className="title">If you are under intensive emotional distress, please reach out to:</h5>
            <p>
            Austria Suicide Hotline: 017133374<br/>
            Germany Suicide Hotline: 08001810771<br/>
            UK Suicide Hotline: 0800 689 5652<br/>
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title ml-4">Contact us</h5>
            <ul className="d-flex flex-row ml-5">
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-facebook ml-5 mr-3" id="footericon"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-twitter mr-3" id="footericon"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i className="fab fa-linkedin mr-3" id="footericon"></i></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
       {/* <div className="footer-copyright text-center py-3 text-black" id="copyright">
        <MDBContainer fluid>
          © 2021 Reboost Inc.
        </MDBContainer>
  </div>
      </MDBContainer>
      
    </MDBFooter>
  );
}

export default Footer; */

import React from "react";
import { connect } from "react-redux";
import { addSongToPlaylist, playSong } from "../actions";
import { Button } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
import { useState, useEffect } from "react";
import { useParams, Link, withRouter } from "react-router-dom";
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const mapStateToProps = (state) => ({
  currentSong: state.play.currentSong,
  playList: state.playList.tracks,
  /* isPlaying: false, */
});

const mapDispatchToProps = (dispatch) => ({
  addToCurrentSong: (song) => dispatch(playSong(song)),
addToPlaylist: (song) => dispatch(addSongToPlaylist(song)),
});

const Footer = ({ currentSong, addToPlaylist }) => {
  const params = useParams();
  const albumId = params.id;
  console.log(albumId);

  const [trackArray, setTrackArray] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const searchTrackList = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
      );

      let trackList = await response.json();
      setAlbumName(trackList.title);
      setTrackArray(trackList.tracks.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchTrackList();
  }, []);

  function convertDuration(time) {
    let time2 = Math.floor(time % 60);

    if (time2.toString().length < 2) {
      time2 = time2 * 10;
    }
    let length = Math.floor(time / 60) + ":" + time2;
    return length;
  }
  console.log(currentSong);

  /* const playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
*/
  return (
    /* <div 
   style={{ backgroundColor: "black" }} 
    onClick={this.onChange} 
   > */
    <div className="container playbar">
      <div className="footerdiv">
          <div id="footerArtist" className="text-white">
            {currentSong ? (
              <div className="footerSong d-flex flex-row">                
         {/* <p> {this.state.isPlaying ? 
            "Song is Playing" : 
            "Song is Paused"}
         </p> */}

                  <p className="footerTitle">
                    <strong>{currentSong.title}</strong>
                  </p>
                  <button id="footerButton">
                    <MDBIcon icon="record-vinyl" className="footerAlbum" />
                  </button>
                  <button id="footerButton"  onClick={() => addToPlaylist(currentSong)}>
                    <MDBIcon far icon="heart" className="footerHeart" />
                  </button>
                
                {/* <p className="card-text mr-2" id="footerArtist">
                  {currentSong.artist.name}
          </p> */}
              </div>
            ) : (
              <>
                <div className="footerSong ml-2">
                  <p>Blond</p>
                  <p className="card-text my-1 ml-2" id="footerArtist">
                    <small>Frank Ocean</small>
                  </p>
                </div>
              </>
            )}
          </div>
        <div className="footermaindiv px-0">
          {currentSong && (
            /*<audio controls>
              <source src={currentSong.preview} type="audio/mpeg" />
            </audio> */
            <AudioPlayer className="audio"
  src={currentSong.preview}
  controls
/>
          )}
          <div className="footerCover">
               <img
                 src="https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde.jpg"
                 alt=""
                 className="img-fluid"
                 id="footercover"
                 height="67rem"
                 width="67rem"
               />
             </div>
     </div>
     </div>
     </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
