import React from "react";
import { useEffect } from "react";
import ".//Navbar.css";

//import aos ======
import Aos from "aos";
import "aos/dist/aos.css";

export default function Service() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <>
     <div className="service-page">

     <div data-aos="fade-up" data-aos-duration="25000" className="list1">
        <h3>Design</h3>
        <ul>
          <li> Website Design</li>
          <li> Android App</li>
          <li> IOS Application</li>
          <li>Ipad App Design</li>
          <li> Desktop App Design</li>
          <li> Landing Page Design</li>
          <li> Adaptive Website Design</li>
          <li> Responsive Website Design</li>
          <li> Static Website Design</li>
          <li> UI/UX</li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-duration="25000" className="list1">
        <h3>Development</h3>
        <ul>
          <li>Single Page Application</li>
          <li>E-commerce Website</li>
          <li> Progressive Web Apps</li>
          <li> Web Portals</li>
          <li> Custom Application</li>
          <li>Hybrid App Development</li>
          <li>CMS</li>
          <li> ERP Software</li>
          <li> Cross platform apps</li>
        </ul>
      </div>
      <div data-aos="fade-up" data-aos-duration="25000" className="list1">
        <h3>Market</h3>
        <ul>
          <li>Social Media</li>
          <li>Content Development</li>
          <li>SMO</li>
          <li>SEO</li>
        </ul>
      </div>

     </div>
    </>
  );
}
