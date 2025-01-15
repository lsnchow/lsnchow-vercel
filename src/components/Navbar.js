import React from "react"
import {Link} from "react-router-dom"


function Navbar () {
    return (
        <div className = "navbarcontainer">
            <nav className = "Navbar">
                
                <CustomLink className = "nv1" to = "https://drive.google.com/file/d/1DPecBdUWlHk-vArM-LGjSlO2JKoNtnjU/view?usp=sharing">Resume</CustomLink>
                <CustomLink className = "nv1" to = "">About</CustomLink>
                <CustomLink className = "nv1" to = "/projects">Projects</CustomLink>
                
            </nav>
        </div>
        
    )
}

export default Navbar

function CustomLink ({to,children, ...props})
{
    const path = window.location.pathname

    return (
        <h3 className = {path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </h3> 
    )
}

//<CustomLink className = "nv1" to = "/blog-posts">Blog</CustomLink>