import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from "./navbar/navbar";
import Home from "./navbar/Home";
import About from "./navbar/about";
import Service from "./navbar/Service";
import Blog from "./navbar/blog";
import Contect from "./navbar/Contect";
import Notfound from "./navbar/Notfound";


export default function App(){


  
  return(
    <>
    
    <Router>
      <Navbar/>
      <Routes>
        <Route index Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/service" Component={Service}/>
        <Route path="/blog" Component={Blog}/>
        <Route path="/contect" Component={Contect}/>
        <Route Component={Notfound}/>
      </Routes>
    </Router>
    
    </>
  )
}