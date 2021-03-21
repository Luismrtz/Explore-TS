

import React, { useEffect } from 'react';
import Footer from '../footer/Footer';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Banner from '../banner/Banner';
import Payment from '../payment/Payment';
// import Card from '../card/Card';






// export type demTypes = {
//     showModal: boolean
// }

const Purchase: React.FC<RouteComponentProps<any>> = (props) => {


    useEffect(() => {
        let number = props.match.params.id;
        console.log(number)
        if(!number) {
            props.history.push("/pricing");
        }
        else {
            return;
        }
        
        return () => {
           
        }
    }, [props])


  return (
    <div>
     <Banner BanH1Title="Membership Plan" BanH2Text="Payment info"  isOn={false}/>
      {/* <Card/> */}
        
    <Payment/>
    <Footer/>

  
    </div>
  );
};

export default Purchase;
