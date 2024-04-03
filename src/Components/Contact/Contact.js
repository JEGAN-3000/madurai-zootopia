import React from "react";
import Footer from "../Footer/Footer";
import { TypeAnimation } from "react-type-animation";
const Contact = () => {
  return (
    <div className="contactPage ">
      <div className="contactDetails w-full text-white ">
        <div className="text-1xl text-center md:text-3xl md:w-full">
          <p className="md:mt-[-50px] delius">
            Feel free to contact us for any questions or comments you may have
            about our products and services.
          </p>
          <div>

          <TypeAnimation
                sequence={[
                  "Thanks For Visiting..",2000,
                  "Come Again For This Crazy Adventure..",2000
                ]}  
                wrapper='h2'              
                speed={10}
                repeat={Infinity}
                className="lobster tracking-widest md:py-5 text-2xl py-3 md:text-9xl"
                />
                </div>
          
        </div>
        <div className="md:mt-[200px] md:mx-auto md:justify-center md:text-2xl md:w-full md:flex md:items-end gap-4 md:h-[100px] address ">
          <h5>Email</h5>
          <h5>support@aazp.in</h5>
          <h5>Phone </h5>
          <h5>044 - 29542301</h5>
          <h5>Fax </h5>
          <h5>044 - 29542301</h5>
          <h5>Zootopia Park,Thirumangalam,Madurai,Tamil Nadu - 625706</h5>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
