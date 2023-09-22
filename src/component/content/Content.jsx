import React from "react"
import Introduction from "./introduction/Introduction";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./project/Project";

const Content = () => {
    return (
        <div className="col px-0 offset-md-2">
            {/* Introduction */}
            <Introduction/>

            {/* About */}
            <About/>

            {/* Skill */}
            <Skills/>

            {/* Project */}
            <Projects/>
        </div>
    )
}

export default Content;