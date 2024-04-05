import React from "react"
/* first blog, can use as a template */
function Blog1() {
    return (
        <div className = "blog-standardized">
            <h1>Learning to make this website</h1>
            <h3>This website was made w/ JS, HTML, and CSS using React components. </h3>
            <h3>If you're curious of the code behind this website, check out my <a href="https://github.com/lsnchow">Github</a></h3>
            <h3>&#40;My code isn't the cleanest, quite a lot of redundancy in the CSS selections - Lack of consistency with <a href ="https://www.w3schools.com/css/css_selectors.asp">CSS Selectors</a> destroyed the hierachy, making this a headache and a half to make cool transitions :D&#41;</h3>
        </div>
    )
}

export default Blog1;