import { useState, useEffect } from "react";
import { useParams, Link, withRouter } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import { MDBIcon, MDBBtn } from "mdbreact";
import { connect } from "react-redux";
import { addSongToPlaylist } from "../actions";
import { useHistory } from "react-router-dom";

const mapStateToProps = (state) => ({
  playList: state.playList.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  addToPlaylist: (song) => dispatch(addSongToPlaylist(song)),
});

const Album = ({ addToPlaylist }) => {
  const params = useParams();
  const history = useHistory();
  const albumId = params.id;
  console.log(albumId);

  /* function handleClick() {
    history.push("/home");
  } */

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

  return (
    <div className="albumbg d-flex pr-5 pt-3">
      <div className="albumContainer pr-1">
        {console.log(albumName)}
        {console.log(trackArray)}
        <div className="main-container main-container-album album-songs-container d-flex flex-row">
          <div className="top-of-artist-songs mb-3 pt-3"></div>
          <div className="col-md-12 d-flex flex-row mt-0">
            <table id="albumtable" className="table table-borderless ml-5">
              <thead>
                <tr className="border_bottom">
                  <td>
                    <Link className="text-white" href="/">
                      <MDBIcon
                        icon="chevron-left"
                        className="albumArrow mt-2"
                      />
                    </Link>
                  </td>
                  <td className="albumName">
                    <span>{albumName.replace(/[^a-z\d\s]+/gi, "")}</span>
                  </td>
                  <td>
                    <MDBIcon far icon="clock" className="albumClock" />
                  </td>
                  <td>
                    <MDBIcon far icon="heart" className="albumFavorite" />
                  </td>
                </tr>
              </thead>
              <tbody>
                {trackArray.map((track, i) => (
                  <tr key={i}>
                    <td className="trackNumber align-middle">{i + 1}</td>
                    <td>
                      <div className="albumSong">
                        <strong>{track.title}</strong>
                      </div>
                    </td>

                    <td className="align-middle keep-on-page">
                      <strong>{convertDuration(track.duration)}</strong>
                    </td>
                    <td>
                      <button
                        className="favbtn button-round"
                        onClick={() => addToPlaylist(track)}
                      >
                        <MDBIcon far icon="heart" className="trackFavorite" />
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
    /*
            <tbody>
              {trackArray.map((track, i) => (
                <tr>
                  <td className="trackNumber align-middle mb-1">{i + 1}</td>
                  <td>
                    <div className="albumSong">
                      <span>{track.title}</span>
                    </div>
               
                  </td>

                  <td className="trackDuration align-middle keep-on-page"><strong>
                  {convertDuration(track.duration)}</strong>
                  </td>
                  <td>
                 </td> <td><Button style={{borderRadius: "50%", background: "transparent", border: 'none'}}
                   onClick={()=>addToPlaylist(track)}>
                    <MDBIcon far icon="heart" className="albumFavorite ml-2"/>
              </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
            </div>
            </div>
          
            </div>
          </div> */
  );
};

/* export default withRouter(Album) */ export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
