import React from "react"
import Blogs from "../components/Blogs"
import TypewriterEffect from "./TypewriterEffect";
function AboutMe() {



    return (
        <div className = "aboutMeContainer">
            <div className = "introduction-text">
                <h1 className="title-intro" > </h1>
                <TypewriterEffect text="&#x200B;Hello there!" speed ={200} delay = {1000}/>
                <div className = "line-bar-about"><div className = "line-bar-about2"></div></div>
                <div className = "sliding-text">
                    <h2 className="title-name" >I'm</h2>
                    <h2 className="bio-p">I'm a <b className = "ce-text">Computer Engineer</b> student at <b className = "queens-text">Queens University</b></h2>
                </div>
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



/*
let textObj1 = document.querySelector(".title-intro")

let textObj2 = document.querySelector(".title-name")

textObj1.innerHTML = ""
textObj2.innerHTML = ""
let counter = -1
let counter2 = -1
function typeOutChars(obj) {
    if (counter < obj.dataset.typetext.length) {
        
      
      counter++
      obj.innerHTML += obj.dataset.typetext.charAt(counter);
    }
}
  
function typeOutChars2(obj) {
    if (counter2 < obj.dataset.typetext.length) {

        
        counter2++
        obj.innerHTML += obj.dataset.typetext.charAt(counter);
    }
}
  
setInterval(() => {
    typeOutChars(textObj1)
    typeOutChars2(textObj2)
}, 100);

*/