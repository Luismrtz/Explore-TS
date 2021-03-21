

import React from 'react';
import Footer from '../footer/Footer';

import Banner from '../banner/Banner';
import Card from '../card/Card';




// export type demTypes = {
//     showModal: boolean
// }

const Services: React.FC = () => {



  return (
    <div>
     <Banner BanH1Title="PRICE PLANS" BanH2Text="Choose a plan or no plans." isOn={false}/>
      <Card/>

   
    <Footer/>

  
    </div>
  );
};

export default Services;
