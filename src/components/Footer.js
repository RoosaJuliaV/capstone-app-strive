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
import { Button } from "react-bootstrap"

const mapStateToProps = (state) => ({
  currentSong: state.play.currentSong,
});
const Footer = ({ currentSong }) => {

    function convertDuration(time) {
        let time2 = Math.floor(time % 60);
    
        if (time2.toString().length < 2) {
          time2 = time2 * 10;
        }
        let length = Math.floor(time / 60) + ":" + time2;
        return length;
      }

  return (
    <div className="container-fluid playbar">
      <div className="footerdiv px-0">
       <div>
          <div className="footerCover">
            {/* <img
              src="https://www.sleek-mag.com/wp-content/uploads/2016/08/AlbumCovers_Blonde.jpg"
              alt=""
              className="img-fluid"
              id="footercover"
            /> */}
          </div>
          <div id="footerArtist" className="text-white">
          {currentSong ? (
              <div className="footerSong ml-2">
                <p>{currentSong.title}
            <button id="footerButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="lightgrey"
                className="bi bi-suit-heart ml-2"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </button>
          </p>
                <p className="card-text mr-2" id="footerArtist">
                  {currentSong.artist.name}
                </p>
              
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
          </div>
          <div className="d-flex flex-row px-0 ml-2">
            <div id="shuffle">
              <button id="footerButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="lightgrey"
                  className="bi bi-shuffle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
                  />
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                </svg>
              </button>
            </div>

            <div id="backward">
              <button id="footerButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="lightgrey"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>
            </div>

            <div id="play">
              <button id="footerButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
              </button>
            </div>

            <div id="forward">
              <button id="footerButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="lightgrey"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>
            </div>

            <div id="repeat">
              <button id="footerButton">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="lightgrey"
                  className="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                  />
                </svg>
              </button>
            </div>
          </div>
       <div className="d-flex">
            <p id="minute1" className="" color="white">
              <small>1:32</small>
            </p>
            <progress
              className="progress mx-3 my-2"
              id="file"
              max="190"
              value="120"
              fill="white"
            ></progress>
            <p id="minute2" className="" color="white">
              <small>{convertDuration(currentSong.duration)}</small>
            </p>
          </div>
        </div>
        </div>
      
    
  );
};

export default connect(mapStateToProps)(Footer);

