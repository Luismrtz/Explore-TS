import React, { useEffect } from "react";
import Footer from "../footer/Footer";

import Banner from "../banner/Banner";

import FilterItems from "../filter/FilterItems";

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner
        isOn={true}
        BanH1Title="Services"
        BanH2Text="This is just for fun. Enter a pokemon in the searchbar "
      />

      <FilterItems />

      <Footer />
    </div>
  );
};

export default Services;
