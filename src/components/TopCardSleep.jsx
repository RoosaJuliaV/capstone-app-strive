import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBCard,
  MDBIcon,
} from "mdbreact";
import { Button, Nav, Card, CardImg, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useParams, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addSongToPlaylist, playSong } from "../actions";
import PlayMod from "./PlayMod";

const mapStateToProps = (state) => ({
  currentSong: state.play.currentSong,
  playList: state.playList.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  addToCurrentSong: (song) => dispatch(playSong(song)),
  addToPlaylist: (song) => dispatch(addSongToPlaylist(song)),
});

const TopCardSleep = ({ addToPlaylist, addToCurrentSong }) => {
  const [trackArray, setTrackArray] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const [albumImage, setAlbumImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const albumId = params.id;
  console.log(albumName);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const playlistAddNewAlbumFunction = (currentSong) => {
    let editedSong = { ...currentSong };
    editedSong.albumcover = albumImage;
    editedSong.albumName = albumName;
    editedSong.albumId = albumId;
    addToCurrentSong(editedSong);
    console.log(editedSong);
  };

  const fetchAlbumHome = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/264645602`
      );

      let trackList = await response.json();
      console.log(trackList.tracks);
      setTrackArray(trackList.tracks.data);
      setAlbumName(trackList.title);
      setAlbumImage(trackList.cover_medium);
      console.log(trackArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbumHome();
  }, []);

  const _ = require("lodash");

  // Original array
  var array = trackArray;

  // Use of .shuffle() method
  let shuffled_array = _.shuffle(array);

  console.log(shuffled_array);

  return (
    <div>
      <MDBRow>
        {shuffled_array.slice(0, 1).map((track, i) => (
          <MDBCard className="topsleepcard mb-5 ml-4" key={i}>
            <div className="text-white d-flex align-items-center py-5 px-4">
              <div id="sleepcardtitletop">
                <h3
                  className="card-title px-3"
                  id="topcardhead"
                  style={{ cursor: "pointer" }}
                  onClick={() => playlistAddNewAlbumFunction(track)}
                >
                  Listen to the track of the day now
                  <MDBIcon icon="angle-right" id="topfavicon" />
                </h3>
                <div className="header__search mt-2">
                  {/*<Button onClick={handleOpen} variant="outline-dark"> <PlayMod open={open} handleOpen={handleOpen} handleClose={handleClose} />{/*</Button>*/}
                </div>
              </div>
            </div>
          </MDBCard>
        ))}
      </MDBRow>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopCardSleep);
