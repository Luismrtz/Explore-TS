
import React from 'react';
import Footer from '../footer/Footer';

import Banner from '../banner/Banner';
// import Card from '../card/Card';
import FilterItems from '../filter/FilterItems';



const Services: React.FC = () => {


  return (
    <div>
     <Banner isOn={true} BanH1Title="Services" BanH2Text="This is just for fun. Enter a pokemon in the searchbar "/>
     {/* <Card/> */}
     <FilterItems />


    <Footer/>

    {/* <FilterItems /> */}
    </div>
  );
};

export default Services;
