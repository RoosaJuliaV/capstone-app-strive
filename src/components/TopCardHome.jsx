import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button, Nav, Card, CardImg, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TopCardHome = () => {
  const [albumsArray, setAlbumsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchAlbums = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=Mindfulness`
    );
    if (response.ok) {
      setIsLoading(false);
      const result = await response.json();
      setAlbumsArray(result.data);
      console.log(result);
    }
  };
  useEffect(() => {
    FetchAlbums();
  }, []);
  return (
    <div>
        <MDBRow>
          <MDBCard className="tophomecard mb-5 ml-4">
              <div className="text-white d-flex align-items-center py-5 px-4">
                <div id="sleepcardtitletop">
                  <h3 className="card-title px-3" id="topcardhead">
                    Listen to the clip of the day now<MDBIcon icon="angle-right" id="topfavicon"/>
                  </h3>
                </div>
              </div>
          </MDBCard>
        </MDBRow>
        </div>

);
};

export default TopCardHome;

