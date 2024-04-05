import React from "react"
import {Link} from "react-router-dom"


function Blogs () {
    return (
        <div className = "blogscontainer">
            <h2 className = "post-title">&#91;Posts&#93;</h2>
            <nav className = "blogs">
                <ul>
                    <li>
                        <CustomLink className = "nv1" to = "/blog-posts/coding-a-new-website">Creating this website</CustomLink>
                    </li>

                    <li>
                        <CustomLink className = "nv1" to = "/blog-posts/1-step-forward-3-steps-back">1 Step Foward, 3 Backwards</CustomLink>
                    </li>
                </ul>
                
            </nav>
        </div>
        
    )
}

export default Blogs

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
