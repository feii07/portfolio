import React from "react";
import './Skills.css';

const skills = [
    {
        text: "HTML",
        img: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png",
    },
    {
        text: "CSS",
        img: "https://devsouth.us/images/css3_badge.png",
    },
    {
        text: "PHP",
        img: "https://pngimg.com/uploads/php/php_PNG5.png",
    },
    {
        text: "Javascript",
        img: "https://logosdownload.com/logo/javascript-logo-big.png",
    },
    {
        text: "Laravel",
        img: "https://logospng.org/download/laravel/logo-laravel-icon-1024.png",
    },
    {
        text: "MySQL",
        img: "https://www.elearningworld.org/wp-content/uploads/2019/04/MySQL.svg.png",
    },
    {
        text: "PostgreSQL",
        img: "https://www.ebrand.fi/static/PostgreSQL-eaf4028a17ce665edd040ff56b0d727c.png",
    },
    {
        text: "Figma",
        img: "https://logodownload.org/wp-content/uploads/2022/12/figma-logo-2.png",
    },
];

const Skills = () => {
    return (
        <div className="bg-secondary text-white" id="skills">
            <div className="d-flex p-4">
                <fieldset className="border p-3">
                    <legend className="float-none w-auto skill-text">Skills</legend>
                    <div className="row m-0">
                        {
                            skills.map((item, key) => {
                                return (
                                    <div className="col-md-3 col-6 mb-3" key={`item-${key}`}>
                                        <div className="card bg-transparent">
                                            <div className="card-body border border-white text-center">
                                                <img className="skills-logo" src={item.img} alt={item.text} />
                                                <span className="text-white">{item.text}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div className="skills-other px-5 text-center">
                            <small> Python, C++, Java, Kotlin, MongoDB, GitHub, GitLab, Wordpress, Photoshop, React (Currently Learning and make this web with React!). I also really curious to learn other language!</small>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}

export default Skills;