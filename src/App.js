import React from "react"
import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import {Route,Routes} from "react-router-dom"
import Contact from "./components/Contact"
import Error404 from "./components/Error404"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


//Somehow, I must import each blog?? From an intuitive standpoint, 
//ok, I don't think I can make this look cleaner. Works fine tho :D, taking advantage of React router
import Blog1 from "./blog-posts/Blog1"
import Blog2 from "./blog-posts/Blog2"






import Blogs from "./components/Blogs"

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

/*            <Route path = "/blog-posts/coding-a-new-website" element = {<Blog1/>}/>
            <Route path = "/blog-posts/1-step-forward-3-steps-back" element = {<Blog2/>}/>
            <Route path = "/blog-posts" element = {<Blogs/>}/>*/