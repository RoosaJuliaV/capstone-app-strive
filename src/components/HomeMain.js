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
                    src="https://img2.goodfon.com/wallpaper/nbig/3/8b/frozen-sunset-mountain-view.jpg"
                   // src="https://mythsandmountains.com/wp-content/uploads/2018/10/myths-and-mountains-and-beyond.jpg"
                    // src="https://img4.goodfon.com/wallpaper/nbig/e/68/norvegiia-lofotenskie-ostrova-utro-rozovoe-nebo-svet-poselok.jpg"
                   // src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e04a50004d8952b84c4f9757c4fc58e7f793723/big-37c8b297f5559dfc51ddc668db5c3faf.jpg"
                    // src="https://images7.alphacoders.com/507/507506.jpg"
                    // src="https://img5.goodfon.com/wallpaper/nbig/a/c8/zakat-solntse-vecher-les-sinii-sklony-sumerki-svet-luchi.jpg"
                   // src="https://motaen.com/upload/wallpapers/source/2009/07/16/09/05/11795/mountains_189.jpg"
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
                   // src="https://image.freepik.com/free-photo/yoga-silhouette-with-sunset-background_1048-1482.jpg"
                    // src="https://dunescholar.com/wp-content/uploads/2020/08/yoga-sunset.jpg"
                   // src="https://cdn.powerofpositivity.com/wp-content/uploads/2014/12/meditate-meditation-sunset-1200x900.jpg"
                    src="https://mmipeace.org/wp-content/uploads/2019/05/woman-practices-yoga-1080x675.jpg"
                   // src="https://c0.wallpaperflare.com/preview/56/956/1001/yoga-zen-meditating-pose-thumbnail.jpg"
                    // src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/woman-meditating-in-sunset-aleaimage.jpg"
                   // src="https://p0.pikist.com/photos/677/36/sunset-yoga-zen-meditation-woman-silhouette-installation-relaxation-the-year.jpg"
                    // src="https://images.fineartamerica.com/images-medium-large-5/keeping-sun--young-man-meditating-on-the-beach-anna-kaminska.jpg"
                 // src="https://chopra.brightspotcdn.com/ba/5b/a4e607054e908c357b72c88d4102/7fbroqcg.jpeg"
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
                    src="https://i.imgur.com/DWlDeEX.jpg"
                    // src="https://cdn141.picsart.com/331672482005201.jpg"
                   // src="https://images.unsplash.com/photo-1597242051386-c0a24ceae025?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVycGxlJTIwY2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/*"https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"*/
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
                    src="https://wallpapercave.com/wp/wp2532986.jpg"
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
