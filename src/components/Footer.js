import React from "react"



function Footer() {
    return (
        <div className = "footercontainer">
            <a href = "https://drive.google.com/file/d/1ggiGBlH94nel9lnDsN3jgdhUin_1a7jF/view?usp=sharing" className = "linksItem">
                <img src = "https://img.icons8.com/ios/250/000000/resume.png" alt = "resumay-icon"/>
                <h3 className = "footerLink">Resume</h3>
            </a>
            <a href = "https://github.com/lsnchow" className = "linksItem">
                <img src = "https://img.icons8.com/ios/250/000000/github.png" alt = "Github"/>
                <h3 className = "footerLink">Github</h3>
            </a>
            <a href = "https://ca.linkedin.com/in/lucas-chow-3513a6212/" className = "linksItem">
                <img src = "https://img.icons8.com/ios/250/000000/linkedin.png" alt = "linkedin"/>
                <h3 className = "footerLink">Linkedin</h3>
            </a>
        </div>
        
    )
}


export default Footer