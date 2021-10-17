import { useState, useEffect } from "react";
import { useParams, Link, withRouter } from "react-router-dom";
import { Col, Row, Button, ListGroup, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { addSongToPlaylist, playSong } from "../actions";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBCard,
  MDBIcon,
} from "mdbreact";

const mapStateToProps = (state) => ({
  currentSong: state.play.currentSong,
  playList: state.playList.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  addToCurrentSong: (song) => dispatch(playSong(song)),
  addToPlaylist: (song) => dispatch(addSongToPlaylist(song)),
});

const Album = ({ addToPlaylist, addToCurrentSong }) => {
  const params = useParams();
  const history = useHistory();
  const albumId = params.id;
  console.log(albumId);

  const playlistAddFunction = (track) => {
    let editedTrack = { ...track };
    editedTrack.albumcover = albumImage;
    addToPlaylist(editedTrack);
  };

  const playlistAddNewFunction = (currentSong) => {
    let editedSong = { ...currentSong };
    editedSong.albumcover = albumImage;
    addToCurrentSong(editedSong);
  };

  /* function handleClick() {
    history.push("/home");
  } */

  const [trackArray, setTrackArray] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const [albumImage, setAlbumImage] = useState("");

  const searchTrackList = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`
      );

      let trackList = await response.json();
      setAlbumName(trackList.title);
      console.log(trackList);
      setTrackArray(trackList.tracks.data);
      setAlbumImage(trackList.cover_medium);
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

  return (
    <div className="albumbg d-flex">
      <div className="albumshadowdiv">
        <div className="albumContainer d-flex pr-1 justify-content-center">
          {console.log(albumName)}
          {console.log(trackArray)}
          <MDBRow>
          <div className="d-flex flex-row">
            <Nav
              className="navbar fixed-top navbar"
              id="favtracksnav"
            >
              <div className="container-fluid" id="meditatenavdiv">
              <div className="col-lg-2 d-none d-lg-block"></div>
                <h1 className="favoriteheading mb-4 ml-4 mr-auto">
                <Link to="/home" className="favtrackslink">
                    <MDBIcon icon="angle-left" className="favarrow ml-1" />
                  </Link>
                  {/* <strong>Favourites</strong> */}
                 {/* <Button
                    type="button"
                    className="btn btn-outline-light btn-rounded mt-3"
                    data-mdb-ripple-color="dark"
                    id="favoritesbutton"
                  >
                    Sort by name
                    <MDBIcon icon="angle-down" className="ml-2" />
                 </Button> */}
                </h1>
              </div>
            </Nav>
          </div>
        </MDBRow>
          <MDBRow className="albumrow d-flex flex-row">
            <MDBCol xs={12} sm={12} lg={12} className="albummain mt-5">
              <div className="albumnamediv">
                <div className="albumName mb-3">
                  {albumName.replace(/[^a-z\d\s]+/gi, "")}
                  {/* <MDBIcon far icon="clock" className="albumClock" />
             <MDBIcon far icon="heart" className="albumFavorite" /> */}
                </div>
              </div>
              <MDBContainer className="favtrackscard">
                <ListGroup className="favtrackscards">
                  {trackArray.map((track, i, currentSong) => (
                    <ListGroup.Item className="favtrackscard my-2" key={i}>
                      <div className="favtracksgrid d-flex align-items-center mx-auto">
                        {" "}
                        {i + 1}
                        <div
                          className="albumSong ml-4"
                          style={{ cursor: "pointer" }}
                          onClick={() => playlistAddNewFunction(track)}
                        >
                          {track.title}
                        </div>
                        <div className="favduration">
                          {convertDuration(track.duration)}
                        </div>
                        <button
                          className="removefavtrackbtn button-light ml-3"
                          onClick={() => playlistAddFunction(track)}
                        >
                          <MDBIcon far icon="heart" className="trackFavorite" 
                          />
                        </button>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </MDBContainer>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
      <Row>
        <Col xs={12} sm={12} lg={2}>
          <div id="albumfootershadow"></div>
        </Col>
      </Row>
    </div>
  );
};

/* export default withRouter(Album) */ export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);