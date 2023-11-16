import React from "react";
import { useEffect } from "react";
import './/Navbar.css';

//import aos ======
import Aos from "aos";
import "aos/dist/aos.css";

import first from './assets/first.png';
import secound from './assets/secound.jpg';
import third from './assets/third.jpg'

export default function Blog(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return(
        <>
       <div data-aos="fade-up" data-aos-duration="25000" className="blog-page">
        <div data-aos="fade-up" data-aos-duration="25000" className="b">
            <h1 className="h1">BLOG</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="25000" className="cart">
        <img src={first} alt="" />
        <p>Choos to order : how ERPnext<br></br>tomos INventory Mangement</p>

        </div>

        <div data-aos="fade-up" data-aos-duration="25000" className="cart">

        <img src={secound} alt="" />
            <p>why steel industry leaders are switching  to <br></br>ERPNext for Streaming to Operation ?</p>

        </div>

        <div data-aos="fade-up" data-aos-duration="25000" className="cart">
            <img src={third} alt=""/>

        <p>ERPnext Revolitionizing todays<br></br>Bussiness world</p>

        </div>

       </div>
        </>
    )
}