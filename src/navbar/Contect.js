import React from "react";
import { useEffect } from "react";
import './/Navbar.css';

//import aos ======
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact(){

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return(
        <>
        <div data-aos="fade-up" data-aos-duration="25000" className="contect-page">
        <div data-aos="fade-up" data-aos-duration="25000" className="div-box">
           <div className="details">
            <h1 className="h1" style={{color:"yellow"}}>ReflexTech</h1>

           </div>
           <div className="details">
           <a>arunpandik2002@gmail.com</a>
           
           </div>
           <div className="details">
           <a>7826867328</a>
           </div>
           <div className="details">
            <p>Time to contect <br></br>
            9.00 AM to 6.30pm</p>
            <label>Message</label>
            <textarea placeholder="write a message"  className="text-area"></textarea>
           </div>
        </div>
        </div>
        </>
    )
}