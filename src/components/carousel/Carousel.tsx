import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Head2,
  Head1,
  TextInfo,
  ArrowLeftContainer,
  ArrowRightContainer,
  CarouselButton,
  CarouselButtonWrapper,
  ArrowLeft,
  ArrowRight,
  CarouselContainer,
} from "./CaroStyles";
import "./caroS.css";

export type Caro = {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
};

const SamplePrevArrow: React.FC<Caro> = ({ className, style, onClick }) => {
  return (
    <ArrowLeftContainer onClick={onClick}>
      <ArrowLeft></ArrowLeft>
    </ArrowLeftContainer>
  );
};

const SampleNextArrow: React.FC<Caro> = ({ className, style, onClick }) => {
  return (
    <ArrowRightContainer onClick={onClick}>
      <ArrowRight></ArrowRight>
    </ArrowRightContainer>
  );
};

const Carousel: React.FC<TextInfo> = ({
  inputH1,
  inputH2,
  type,
  children,
  newUrl,
  showModal,
}) => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,

    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <CarouselContainer>
      <Head1>{inputH1}</Head1>
      <Head2>{inputH2}</Head2>

      <Slider {...settings}>{children}</Slider>
      <CarouselButtonWrapper>
        {type && (
          <Link to="/about">
            <CarouselButton> View</CarouselButton>
          </Link>
        )}
      </CarouselButtonWrapper>
    </CarouselContainer>
  );
};

export default Carousel;
