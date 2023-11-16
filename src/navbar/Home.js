import React from "react";
import { useEffect } from "react";
import ".//Navbar.css";

//import aos ======
import Aos from "aos";
import "aos/dist/aos.css";

//image import 

import Web from './assets/Web.png';
import digital from './assets/digital.png';
import hosting from './assets/hosting.png';
import enterprise from './assets/enterprise.png'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="25000" className="home">
      <h2 data-aos="fade-up" data-aos-duration="25000">
          Delivering Reliable<br></br>
          <span className="later2">Enterprise</span>
          <span class="yellow">
            <br></br>Software Solutions
          </span>
          <span class="last">
            {" "}
            <br></br>Globally
          </span>
        </h2>
        <div data-aos="fade-up" data-aos-duration="25000" className="background">
        </div>
      </div>
      
      <div data-aos="fade-up" data-aos-duration="25000" className="sliderMain">
      <div className="slider">
          <div className="slides">
            {/* radio button */}
            <input
              type="radio"
              name="radio-btn"
              className="btn-radio1"
              id="radio1"
            />
            <input
              type="radio"
              name="radio-btn"
              className="btn-radio2"
              id="radio2"
            />
            <input
              type="radio"
              name="radio-btn"
              className="btn-radio3"
              id="radio3"
            />
            <input
              type="radio"
              name="radio-btn"
              className="btn-radio4"
              id="radio4"
            />

            {/* slide image */}

            <div className="slide first">
                <img className="img" src={Web} alt=""/>
            </div>

            <div className="slide">
            <img className="img" src={digital} alt=""/>
            </div>

            <div className="slide">
            <img className="img" src={enterprise} alt=""/>
            </div>

            <div className="slide">
            <img className="img" src={hosting} alt=""/>
            </div>
            {/* auto navicate */}
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
            {/* manual navigat */}

            <div className="navigate-manual">
                <label for='radio1' className="manual-btn"></label>
                <label for='radio2' className="manual-btn"></label>
                <label for='radio3' className="manual-btn"></label>
                <label for='radio4' className="manual-btn"></label>

            </div>
          </div>
        </div>
      </div>
     
      <div data-aos="fade-up" data-aos-duration="25000" className="content">
       <a className='a'> we are your</a>
       <h1>Trusted Software Development</h1>
       <a className='a'>Company</a>
       <div className="text">
       <p>
       A leading, fast-growing custom Software development company based in Chennai, India, designed to transform digital experiences to reflex tech
       enterprises.

       Since 2006, we have developed numerous effective solutions to handle any industry challenges making startups to high-profile corporate houses
       achieve their dreams and stand out in the competitive market.

       With a highly-talented team of designers, developers, and testers, we construct top-notch software across platforms globally that generate leads,
        enhance customer experience, and resolve business challenges ensuring quality with innovation.
       </p>    
       </div>


      </div>
    </>
  );
}
