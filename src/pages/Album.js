import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap"
import { MDBIcon } from "mdbreact";
import { withRouter } from 'react-router-dom';



const Album = () => {
  const params = useParams()
  const albumId = params.id
  console.log(albumId)

  const [trackArray, setTrackArray] = useState([])
  const [albumName, setAlbumName] = useState("")

  const searchTrackList = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`,
      )

      let trackList = await response.json()
      setAlbumName(trackList.title)
      setTrackArray(trackList.tracks.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    searchTrackList()
  }, [])

  function convertDuration(time) {
    let time2 = Math.floor(time % 60);
  
    if (time2.toString().length < 2) {
      time2 = time2 * 10;
    }
    let length = Math.floor(time / 60) + ":" + time2;
    return length;
  }

  return (
      <div className="albumbg">
    <div className ="albumContainer mr-5 mt-5">
       
      {console.log(albumName)}
      {console.log(trackArray)}
      <div className="main-container main-container-album album-songs-container">
        <div className="top-of-artist-songs mb-3 pt-3">
        </div>
        <div className="col-md-12 justify-content-center d-flex flex-row">
          <table id="albumtable" className="table table-borderless ml-3">
            <thead>
              <tr className="border_bottom">
              <td><Link className="text-white" to={"/"}><MDBIcon icon="angle-left" className="albumArrow mt-2"/></Link></td>
                <td className="align-center albumName"><strong>{albumName}</strong></td>
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
                  <td className="align-middle">{i + 1}</td>
                  <td>
                    <div className="albumSong">
                      <strong>{track.title}</strong>
                    </div>
               
                  </td>

                  <td className="align-middle keep-on-page"><strong>
                  {convertDuration(track.duration)}</strong>
                  </td>
                  <td>
                  <MDBIcon far icon="heart" className="trackFavorite ml-2" />
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
            </div>
            </div>
          
            </div>
          </div>
  )
}

export default withRouter(Album);