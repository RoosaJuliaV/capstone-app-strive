import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCard, MDBIcon } from "mdbreact";
import { Button, Nav, Card, CardImg, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomeMain = () => {
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
    <div className="sleepcontainer">
      <div className="breathesidebg col-lg-2 d-none d-lg-block"></div>
      <MDBContainer className="sleepcards">
        <MDBRow>
          <div className="d-flex flex-row">
            <Nav className="navbar fixed-top navbar" id="homenav">
              <div className="container-fluid" id="breathenavdiv">
                <div className="col-lg-2 d-none d-lg-block"></div>
                <h1 className="breatheheading mb-5 ml-4 mr-auto">
                  <strong>Home</strong>

                  <Button
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                    data-mdb-ripple-color="dark"
                    id="favoritesbutton"
                  >
                    See all
                    <MDBIcon icon="angle-down" className="ml-2" />
                  </Button>
                </h1>
              </div>
            </Nav>
          </div>
        </MDBRow>

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
        <h3 className="heading mb-4 ml-3 mr-auto text-white">
                  <strong>Categories</strong></h3>
        <MDBRow className="mx-0">
              <MDBCard className="homecard px-0">
                <Link className="text-white" to="/favoritespage/">
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src="https://windows10spotlight.com/wp-content/uploads/2018/11/07817ccc52899d971def2ba59ec7e8e7.jpg"
                    id="sleepcardimg"
                  />
                  <div className="text-white d-flex py-4 px-1">
                    <div
                      className="rgba-black-light mt-auto pr-4 pr-1"
                      id="sleepcardtitlehome"
                    >
                      <h5 className="sleepCardTitleHome card-title">
                        Favourites<MDBIcon icon="angle-right" id="topfavicon"/>
                      </h5>
                    </div>
                  </div>
                </Link>
              </MDBCard>
              <MDBCard className="homecard px-0">
                <Link className="text-white" to="/meditate/">
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src="https://www.crystal-life.com/wp-content/uploads/Information-Center/Info2017/mindfulness-info.jpg"
                    id="sleepcardimg"
                  />
                  <div className="text-white d-flex py-4 px-1">
                    <div
                      className="rgba-black-light mt-auto pr-4 pr-1"
                      id="sleepcardtitlehome"
                    >
                      <h5 className="sleepCardTitleHome card-title">
                        Meditate<MDBIcon icon="angle-right" id="topfavicon"/>
                      </h5>
                    </div>
                  </div>
                </Link>
              </MDBCard>
              <MDBCard className="homecard px-0">
                <Link className="text-white" to="/breathe/">
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src="https://images.unsplash.com/photo-1526732928503-5c58853877ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"/*"https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"*/
                    id="sleepcardimg"
                  />
                  <div className="text-white d-flex py-4 px-1">
                    <div
                      className="rgba-black-light mt-auto pr-4 pr-1"
                      id="sleepcardtitlehome"
                    >
                      <h5 className="sleepCardTitleHome card-title">
                        Breathe<MDBIcon icon="angle-right" id="topfavicon"/>
                      </h5>
                    </div>
                  </div>
                </Link>
              </MDBCard>
              <MDBCard className="homecard px-0">
                <Link className="text-white" to="/sleep/">
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src="https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616__340.jpg"
                    id="sleepcardimg"
                  />
                  <div className="text-white d-flex py-4 px-1">
                    <div
                      className="rgba-black-light mt-auto pr-4 pr-1"
                      id="sleepcardtitlehome"
                    >
                      <h5 className="sleepCardTitleHome card-title">
                        Sleep<MDBIcon icon="angle-right" id="topfavicon"/>
                      </h5>
                    </div>
                  </div>
                </Link>
              </MDBCard>
        </MDBRow>
        <h3 className="heading mb-4 mt-4 ml-3 mr-auto text-white">
                  <strong>Recommended for you</strong> {/* <Button
                    type="button"
                    className="btn btn-outline-light btn-rounded"
                    data-mdb-ripple-color="dark"
                    id="recommendedbutton"
                  >
                    See all
                    <MDBIcon icon="angle-down" className="ml-2" />
                  </Button>*/}</h3>
        <MDBRow className="mx-0">
          {isLoading && (
            <div className="spinnerdivhome">
              <Spinner
                animation="border"
                variant="light"
                className="spinner mb-3"
              />
            </div>
          )}
          {albumsArray.length > 0 &&
            albumsArray.slice(0, 8).map((albumObj) => (
              <MDBCard key={albumObj.id} className="homecard px-0">
                <Link className="text-white" to={"/Album/" + albumObj.album.id}>
                  <Card.Img
                    variant="top"
                    className="rounded-0"
                    src={albumObj.album.cover_medium}
                    id="sleepcardimg"
                  />
                  <div className="text-white d-flex py-4 px-1">
                    <div
                      className="rgba-black-light mt-auto pr-4 pr-1"
                      id="sleepcardtitle"
                    >
                      <h5 className="sleepCardTitle card-title">
                        {albumObj.album.title.replace(/[^a-z\d\s]+/gi, "")}
                      </h5>
                    </div>
                  </div>
                </Link>
              </MDBCard>
            ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default HomeMain;
