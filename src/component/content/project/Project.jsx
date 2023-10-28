import React from "react";
import "../project/Project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        type: 1,
        image: "./portfolio/img/project/web/chewon.png",
        title: "Gistex Chewon",
        description: "is a company website of Gistex Chewon to introduce the company to customer.",
        code: "Heroku, Wordpress"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/trackingyogya.png",
        title: "Yogya Tracking Feature",
        description: "is a feature for track customer order of Yogya Group FnB.",
        code: "Laravel, PostgreSql"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/yukbisayukweb.png",
        title: "YukBisaYuk",
        description: "is a website that aims to help people by donating and participation in petitions",
        code: "Laravel , MySQL"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/restaurant.jpeg",
        title: "RestoranOKE",
        description: "This website has a great tools for customer, cashier, waiter, chef and HR for dine-in restaurant management.",
        code: "Laravel , MySQL"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/perpusMantap.jpeg",
        title: "Perpustakaan Mantap",
        description: "is a program that help at library management.",
        code: "Laravel , MongoDB"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/myinspiration.png",
        title: "My Inspiration",
        description: "is a website that inspires you with quotes and the backstory about famous people in the world.",
        code: "Laravel , PostgreSQL , Heroku Cloud"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/latravel.png",
        title: "LaTravel",
        description: "is a website that provide an information to help visitors decide where they want to go.",
        code: "Laravel , MySQL"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/dengerinaja.png",
        title: "DengerinAja",
        description: "is a simple music website to list a music, add new music and so on.",
        code: "Laravel , VueJS , MySQL"
    },
    {
        type: 1,
        image: "./portfolio/img/project/web/baboonlibrary.png",
        title: "Babon Library",
        description: "is a library website for read a book and share a book.",
        code: "HTML , PHP , mySQL"
    },
    {
        type: 2,
        image: "./portfolio/img/project/android/kickshaw app.png",
        title: "Kickshaw",
        description: "is a Android app that contains a lot of delicious recipe.",
        code: "Kotlin , Spoonacular API , Android Studio"
    },
    {
        type: 3,
        image: "./portfolio/img/project/ui/bioporang.png",
        title: "BIOPORANG",
        description: "is a mobile app that gives information about Porang.",
        code: "Figma"
    },
    {
        type: 3,
        image: "./portfolio/img/project/ui/funo.png",
        title: "Funo",
        description: "is a mobile app that allow you to book transportation online.",
        code: "Figma"
    },
    {
        type: 3,
        image: "./portfolio/img/project/ui/youthspace.png",
        title: "Youthspace",
        description: "is a cool mobile app for youth.",
        code: "Figma"
    },
    {
        type: 3,
        image: "./portfolio/img/project/ui/tunggalkreatifindo.png",
        title: "CV Tunggal Kreatifindo",
        description: "is a app for easily connect customer and CV Tunggal Kreatifindo company.",
        code: "Figma"
    },
    {
        type: 3,
        image: "./portfolio/img/project/ui/yukbisayuk.png",
        title: "YukBisaYuk",
        description: "is a web design that aims to help people by donating and participation in petitions.",
        code: "Figma"
    },
    {
        type: 3,
        image: "./portfolio/img/project/ui/restoran.png",
        title: "RestoranOKE",
        description: "is a web design for dine-in restaurant management.",
        code: "Figma"
    },
    {
        type: 3,
        image: "./portfolio/img/project/ui/lorem.png",
        title: "Lorem",
        description: "is a web design that sells electronic stuff.",
        code: "Figma"
    },
];

const Projects = () => {
    return (
        <div className="col mt-5" id="projects">
            <ul className="nav nav-tabs justify-content-center" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#webDev" role="tab">
                        <i><FontAwesomeIcon icon={faDesktop} /></i> Web Development
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#mobileDev" role="tab">
                        <i><FontAwesomeIcon icon={faMobile} /></i> Mobile Development
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#uiUx" role="tab">
                        <i><FontAwesomeIcon icon={faUikit} /></i> UI / UX
                    </a>
                </li>
            </ul>
            <div className="tab-content text-center">
                <div className="tab-pane active" id="webDev" role="tabpanel">
                    <div className="row p-4">
                        {
                            projects.map((item, key) => {
                                if (item.type == 1) {
                                    return cardProject(item, key)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="tab-pane" id="mobileDev" role="tabpanel">
                    <div className="row p-4">
                        {
                            projects.map((item, key) => {
                                if (item.type == 2) {
                                    return cardProject(item, key)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="tab-pane" id="uiUx" role="tabpanel">
                    <div className="row p-4">
                        {
                            projects.map((item, key) => {
                                if (item.type == 3) {
                                    return cardProject(item, key)
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function cardProject(item, key) {
    return (
        <div className="col-md-4 col-sm-12 mb-3" key={`item-${key}`}>
            <div className="card-project">
                <div className="content">
                    <img className="card-img" src={item.image} />
                    <h6>{item.title}</h6>
                    <div className="hover_content">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;