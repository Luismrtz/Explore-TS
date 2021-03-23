import React, { useEffect } from "react";
import Footer from "../footer/Footer";

import Banner from "../banner/Banner";
import Card from "../card/Card";

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner
        BanH1Title="PRICE PLANS"
        BanH2Text="Deal or no deal"
        isOn={false}
      />
      <Card />

      <Footer />
    </div>
  );
};

export default Services;
