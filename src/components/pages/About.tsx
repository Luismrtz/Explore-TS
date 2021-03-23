import React, { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import DispBox from "../displayBox/DispBox";
import Banner from "../banner/Banner";
import Carousel from "../carousel/Carousel";
import { Modal } from "../modal/Modal";
import { Img, ImgOverlay } from "../carousel/CaroStyles";

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

const Services: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;

  const [newUrl, setNewUrl] = useState("");

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
      <Banner
        isOn={false}
        BanH1Title="About Page"
        BanH2Text="This is what we are about"
      />

      <DispBox
        swap={1}
        box1Img={
          width > breakpoint
            ? "/images/adventure-1807524_1920.jpg"
            : "/images/adventure-1807524_640.jpg"
        }
        box2H1="EXPERIENCE THE WORLD"
        box2H2="The world is bigger than it appears. Explore and experience the wonders of our home planet Earth."
        box2Btn="Learn More"
        box3H1="EXPERIENCE THE WORLD"
        box3H2="The world is bigger than it appears. Explore and experience the wonders of our home planet Earth."
        box3Btn="Learn More"
        box4Img={
          width > breakpoint
            ? "/images/adventure-1807524_1920.jpg"
            : "/images/adventure-1807524_640.jpg"
        }
      />

      <Modal
        h1="HELLO THERE"
        paragraph="hello again"
        showModal={showModal}
        setShowModal={setShowModal}
        newUrl={newUrl}
      />

      <Carousel inputH1="Explore" inputH2="Images for motivation">
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

export default Services;
