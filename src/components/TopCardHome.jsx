/* import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button, Nav, Card, CardImg, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addSongToPlaylist, playSong } from "../actions";

    const mapStateToProps = (state) => ({
        currentSong: state.play.currentSong,
      playList: state.playList.tracks,
    });
    
    const mapDispatchToProps = (dispatch) => ({
        addToCurrentSong: (song) => dispatch(playSong(song)),
      addToPlaylist: (song) => dispatch(addSongToPlaylist(song)),
    });
    
    const TopCardHome = ({ addToPlaylist, addToCurrentSong }) => {
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



  return (
    <div>
        <MDBRow>

        {trackArray.map((track, i) => (

          <MDBCard className="tophomecard mb-5 ml-4" key={i}>
              <div className="text-white d-flex align-items-center py-5 px-4">
                <div id="sleepcardtitletop">
                  <h3 className="card-title px-3" id="topcardhead">
                    Listen to the clip of the day now<MDBIcon icon="angle-right" id="topfavicon" style={{ cursor: "pointer" }} onClick={() => addToCurrentSong(track)}/>
                  </h3>
                </div>
              </div>
          </MDBCard>
        ))}
        </MDBRow>
        </div>

);
};

export default connect(
mapStateToProps, mapDispatchToProps(TopCardHome));
*/
