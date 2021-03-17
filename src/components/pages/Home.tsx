
import React, {useState, useEffect} from 'react';
import Header from '../header/Header';
import Carousel from "../carousel/Carousel";
import {Img, ImgOverlay } from "../carousel/CaroStyles";
import Footer from '../footer/Footer';
import DispBox from '../displayBox/DispBox';
import { Modal } from '../modal/Modal';


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


const Home: React.FC = () => {


  const [showModal, setShowModal] = useState(false);
  // const modalRef = useRef<HTMLInputElement>(null)

  const [newUrl, setNewUrl] = useState('');

useEffect(() => {
  setShowModal(false);
}, [])

  const openModal =  ({urlphoto} : {urlphoto:string}) =>{
    setShowModal(true);
    setNewUrl(urlphoto)
  }





  return (
   <div>
     <Header/>
     <DispBox  box1Img="/images/morning.jpg" box2H1="THE TITLE EXPERIENCE" box2H2="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you"
        box2Btn="Learn More" box3H1="THE TITLE EXPERIENCE" box3H2="I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you"
        box3Btn="Learn More" box4Img="/images/morning.jpg"
      />


<Modal  showModal={showModal} setShowModal={setShowModal} newUrl={newUrl} />
     
     <Carousel type inputH1='hellooo' inputH2='This is a paragraph'>
       
       {photos.map((photo) => {
             let urlphoto = photo.url;
             return ( 
              <ImgOverlay  key={photo.name}>
               <Img onClick={() =>  openModal({urlphoto})} src={photo.url} alt={photo.name} />
             </ImgOverlay>
            )
           })}
    </Carousel>
    <Footer/>
   </div>
  );
};

export default Home;