import React from "react"
import Blogs from "../components/Blogs"
function AboutMe() {
    return (
        <div className = "aboutMeContainer">
            <div className = "introduction-text">
                <h1 className="title-intro">Hi there👋</h1>
                <h2 className="title-name">My name is Lucas Chow!</h2>
                <h3 className="bio-p">I'm a Grade 12 student hoping to study <b className = "ce-text">Computer Engineering 🛠️</b> in the fall!</h3>
                <Blogs />
            </div>

            <div className = "blog-posts">
                
            </div>
        </div>
    )
}


export default AboutMe;

/*<div className = "waterphoto">
                <img id="waterphoto" src = {water} alt = "water of BC"></img>
                <h3 className="waterphototext"><i>Overlooking the Pacific Ocean on a ferry</i></h3>
            </div>*/