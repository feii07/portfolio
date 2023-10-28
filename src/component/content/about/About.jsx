import React, { useRef } from "react";
import './About.css';

const About = () => {
    return (
        <div className="row m-0 h-full about-bg" id="about">
            <div className='col-12 mb-5 text-center'>
                Greetings! My name is Ferani Christy and i'm a Web Developer. I'm currently live in Bandung and ready to move to new city to get another experience! I successfully achieved my Bachelor Degree of Information Technology at Institut Teknologi Harapan Bangsa.
            </div>
            <div className='col-md col-sm-12 quote-bg'>
                <span className='quote'>Every Error Has A Solution</span>
            </div>
            <div className='col-md col-sm-12 about-border'>
                As a Web Developer, I believe that any error in code can be solved if we keep looking for the root of the problem. I won't give up before a problem solved, i will always looking for the best way to code efficiently. Moreover, I am always willing to learn new skills in order to enhance my abilities and to contribute to the organization. Currently, I am seeing a web developer or fullstack developer position in the industry in which i can get new skill and contribute more in company.
            </div>
        </div>
    )
}

export default About;