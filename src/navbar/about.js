import React from "react";
import { useEffect } from "react";
import ".//Navbar.css";
//import aos ======
import Aos from "aos";
import "aos/dist/aos.css";

export default function About(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return(
        <>
       <div  className="about-page">

       <div data-aos="fade-up" data-aos-duration="25000" className="text">
        <h1>ABOUT US</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="25000" className="t-box">
       <h3> OUR STORY</h3>           
        <h1>Who We Are ?</h1>
       <p>
       We, REFLEX Tech, a dedicated professional software development company is specialized in developing and supporting a wide range of online business platforms for players exceeding expectations. We began our commitment since 2006 and termed as private partners in 2015, applying cutting-edge technology to build powerful web applications, making many startups and SME’s achieve their dreams effectively in the digital market, surpassing competitors.

With more than 15 years of experience, headquartered in Chennai, India, we have studied to evolve, deliver and support the online world, keeping up with the latest technology trends. Combined with friendly partners and a strong technical team, we successfully offer top-notch software services for clients globally.
       </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="25000" className="t-box">
       <h1>PROVEN INDUSTRY LEADERSHIP</h1>
       <p>
       Over the last years, dozens of clients have come to us seeking difficult projects. As Tridots tech loves taking challenges and turn impossible to possible, we flourish n' value in designing and developing innovative software solutions reflecting you and your company.

Our team listens to your project carefully and creates customer-centric, recognized results of website or application that enhance audience and sales volume. As we take our clients and their satisfaction, our top priority, many choose our digital agency as their smart option. If you're looking for the best software development companies nearby, then check us out!
       </p>
        </div>

       </div>
        </>
    )
}