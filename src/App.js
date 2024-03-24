import React from "react"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import {Route,Routes} from "react-router-dom"
import Contact from "./components/Contact"
import Error404 from "./components/Error404"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


function App() {
  return (
    <div className = "appDiv">
          <Navbar />
          <Routes>
            <Route path ="/" element ={<AboutMe />} />
            <Route path ="/projects" element ={<Projects />} />
            <Route path ="/contact" element ={<Contact />} />
            <Route path ="*" element ={<Error404 />} />
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
