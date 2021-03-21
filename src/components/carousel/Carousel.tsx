import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Head2, Head1, TextInfo,  CarouselButton, CarouselButtonWrapper, ArrowLeft, ArrowRight, CarouselContainer, ImgModal} from './CaroStyles'
import './caroS.css'





export type Caro = {
    onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void);
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
}

const SamplePrevArrow: React.FC<Caro> = ({className, style, onClick,}) => {
    return (
        <ArrowLeft 
        onClick={onClick}></ArrowLeft>
    )
}

const SampleNextArrow: React.FC<Caro> = ({className, style, onClick,}) => {
    return (
        <ArrowRight 
        onClick={onClick}></ArrowRight>
    )
}


const Carousel: React.FC<TextInfo> = ({inputH1, inputH2, type, children, newUrl, showModal}) => {
    const settings = {
        // className: 'center',
        arrows: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '80px',
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        // centerPadding: "100px",
        // rows: 1
    }
    return (
        // <div className='CarMaxWidth'>
          <CarouselContainer>
          <Head1>{inputH1}</Head1>
          <Head2>{inputH2}</Head2>
      {/* { showModal === true ?
       <ImgModalWrapper>
          <ImgModal src={newUrl} alt="test"/>
       </ImgModalWrapper>

       : 
       <div></div>

      } */}
   

              <Slider  {...settings} >         
                 {children}
             </Slider>
             <CarouselButtonWrapper>
             {type && 
             <Link to="/about"><CarouselButton> View</CarouselButton></Link>
            }
             </CarouselButtonWrapper>
          </CarouselContainer>
      
           
        // </div>
    
    )
}

export default Carousel
