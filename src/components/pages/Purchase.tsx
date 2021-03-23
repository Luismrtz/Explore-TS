import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import { RouteComponentProps } from "react-router-dom";
import Banner from "../banner/Banner";
import Payment from "../payment/Payment";

const Purchase: React.FC<RouteComponentProps<any>> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    let number = props.match.params.id;
    if (!number) {
      props.history.push("/pricing");
    } else {
      return;
    }

    return () => {};
  }, [props]);

  return (
    <div>
      <Banner
        BanH1Title="Membership Plan"
        BanH2Text="Payment info"
        isOn={false}
      />

      <Payment />
      <Footer />
    </div>
  );
};

export default Purchase;
