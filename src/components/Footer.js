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
import { MDBIcon } from "mdbreact";
import { useState } from "react"

const mapStateToProps = (state) => ({
  currentSong: state.play.currentSong,
})

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
   /* <div 
   style={{ backgroundColor: "black" }} 
    onClick={this.onChange} 
   > */
    <div className="container-fluid playbar">
      <div className="footerdiv pb-1">
       <div className="footerrightdiv">
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
              <div className="footerSong d-flex">
                <div className="d-flex flex-row"><p className="footerTitle"><strong>{currentSong.title}</strong></p>
                <button id="footerButton">
                <MDBIcon icon="record-vinyl" className="footerAlbum" />
                </button>
            <button id="footerButton">
            <MDBIcon far icon="heart" className="footerHeart"/>
            </button>
          </div>
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
          </div>
          <div className="footermaindiv d-flex flex-row px-0 ml-3">
           {/* <div id="shuffle">
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
             </div> */}
  <button id="footerButtonRandom">
  <MDBIcon icon="random" />
  </button>
  <button id="footerButtonLeft">
  <MDBIcon icon="caret-left" id="footerIconLeft"/>
  </button>
           {/* <div id="backward">
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
            </div> */}

           
             {/* <button id="footerButton">
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
             </button> */}
             <button className="btn- btn-primary btn-floating" id="footerplaybutton"><MDBIcon icon="play" id="sidenavicon"/></button>
          
             <button id="footerButtonRight">
  <MDBIcon icon="caret-right" id="footerIconRight"/>
  </button>
          {/*  <div id="forward">
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
            </div> */}
 <button id="footerButtonRedo">           
<MDBIcon icon="redo" />
</button>
           {/* <div id="repeat">
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
        </div> */}
          </div>
       <div className="progressdiv flex-row ml-4">
            <p id="minute1" className="mt-1" color="white">
              <small>1:32</small>
            </p>
            <progress
              className="progress mx-3 mt-3"
              id="file"
              max="190"
              value="120"
              fill="white"
            ></progress>
            <p id="minute2" className="mt-1" color="white">
              <small>{convertDuration(currentSong.duration)}</small>
            </p>
          </div>
        </div>
        </div>
    //  </div>
    
  );
};

export default connect(mapStateToProps)(Footer);

