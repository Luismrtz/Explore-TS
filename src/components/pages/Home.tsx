import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Carousel from "../carousel/Carousel";
import { Img, ImgOverlay } from "../carousel/CaroStyles";
import Footer from "../footer/Footer";
import DispBox from "../displayBox/DispBox";
import { Modal } from "../modal/Modal";

const photos = [
  {
    name: "img 1",
    url: "/images/caucasus_1920.jpg",
    urlSmall: "/images/caucasus_640.jpg",
  },
  {
    name: "img 2",
    url: "/images/ski_1920.jpg",
    urlSmall: "/images/ski_640.jpg",
  },
  {
    name: "img 3",
    url: "/images/river_1920.jpg",
    urlSmall: "/images/river_640.jpg",
  },
  {
    name: "img 4",
    url: "/images/snowhill_1920.jpg",
    urlSmall: "/images/snowhill_640.jpg",
  },
  {
    name: "img 5",
    url: "/images/hiker_1920.jpg",
    urlSmall: "/images/hiker_640.jpg",
  },
  {
    name: "img 6",
    url: "/images/angler_1920.jpg",
    urlSmall: "/images/angler_640.jpg",
  },
];

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;

  useEffect(() => {
    setShowModal(false);
    window.scrollTo(0, 0);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const openModal = (
    { urlphoto }: { urlphoto: string },
    { urlSmall }: { urlSmall: string }
  ) => {
    setShowModal(true);
    width > breakpoint ? setNewUrl(urlphoto) : setNewUrl(urlSmall);
  };

  return (
    <div>
      <Header />
      <DispBox
        box1Img={
          width > breakpoint
            ? "/images/adult-1850181_1920.jpg"
            : "/images/adult-1850181_640.jpg"
        }
        box2H1="EXPERIENCE THE WORLD"
        box2H2="Enjoy the little detours in life.  You'll find the journey to be more important than the destination"
        box2Btn="Learn More"
        box3H1="UNSEAL YOUR IMAGINATION"
        box3H2="Fun is what you make of it. So go make it fun"
        box3Btn="Learn More"
        box4Img={
          width > breakpoint
            ? "/images/girl-918706_1920.jpg"
            : "/images/girl-918706_640.jpg"
        }
      />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        newUrl={newUrl}
      />

      <Carousel type inputH1="Explore" inputH2="Take a breather">
        {photos.map((photo) => {
          let urlphoto = photo.url;
          let urlSmall = photo.urlSmall;
          return (
            <ImgOverlay key={photo.name}>
              <Img
                onClick={() => openModal({ urlphoto }, { urlSmall })}
                src={width > breakpoint ? urlphoto : urlSmall}
                alt={photo.name}
              />
            </ImgOverlay>
          );
        })}
      </Carousel>
      <Footer />
    </div>
  );
};

export default Home;
