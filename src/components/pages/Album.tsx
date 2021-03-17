import React from "react";
import styled from "styled-components";
import Carousel from "../carousel/Carousel";
import { Img, ImgOverlay } from "../carousel/CaroStyles";
import Footer from "../footer/Footer";
// import DispBox from "../displayBox/DispBox";
import  Banner from "../banner/Banner";
import DispBox from "../displayBox/DispBox";


// const Test = styled.div`
//     height: 200px;
//     width: 200px;
//     background-color: lightblue;
// `;

const photos = [
  {
    name: 'img 1',
    url: '/images/morning.jpg'
  },
  {
    name: 'img 2',
    url: '/images/morning.jpg'
  },
  {
    name: 'img 3',
    url: '/images/morning.jpg'
  },
  {
    name: 'img 4',
    url: '/images/morning.jpg'
  },
  {
    name: 'img 5',
    url: '/images/morning.jpg'
  },
  {
    name: 'img 6',
    url: '/images/morning.jpg'
  },
]

const Album: React.FC = () => {
  return (
    <div>

      <Banner isOn={false} BanH1Title="The Album" BanH2Text="This a a paragraph and I know how to type, but I wont lead you on too long with this mindless babbling.   teehee. "/>


      <DispBox  box1Img="/images/morning.jpg" box2H1="THE TITLE EXPERIENCE" box2H2="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you"
        box2Btn="Learn More" box3H1="THE TITLE EXPERIENCE" box3H2="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you"
        box3Btn="Learn More" box4Img="/images/morning.jpg"
      />
 
    <Carousel inputH1='hellooo' inputH2='This is a paragraph'>
       
       {photos.map((photo) => {
         return ( 
          <ImgOverlay key={photo.name}>
           <Img src={photo.url} alt={photo.name} />
         </ImgOverlay>
        )
       })}
    </Carousel>
      {/* <Test>

            </Test> */}
      <Footer/>
    </div>
  );
};

export default Album;
