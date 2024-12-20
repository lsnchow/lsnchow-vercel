import React from "react"
import TypewriterEffect from "./TypewriterEffect";
function AboutMe() {



    return (
        <div className = "aboutMeContainer">
            <div className = "introduction-text">
                <h1 className="title-intro" > </h1>
                <TypewriterEffect text="&#x200B;Hi there!" speed ={400} delay = {1000}/>
                <div className = "line-bar-about"><div className = "line-bar-about2"></div></div>
                <div className = "sliding-text">
                    <h2 className="title-name" >I'm Lucas!</h2>
                    <h2 className="bio-p">I'm currently studying <b className = "ce-text">Computer Engineering</b> studying at Queen's University!</h2>






                    
                </div>
            </div>

           
        </div>
    )
}


export default AboutMe;
/* <div className = "blog-posts">
                
            </div>*/
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