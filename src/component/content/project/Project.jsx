import React from "react";
import "../project/Project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/chewon.PNG",
        title: "Gistex Chewon",
        description: "is a company website of Gistex Chewon to introduce the company to customer.",
        code: "Heroku, Wordpress",
        link: "https://gistexchewon.com/"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/trackingyogya.PNG",
        title: "Yogya Tracking Feature",
        description: "is a feature for track customer order of Yogya Group FnB.",
        code: "Laravel, PostgreSql",
        link: "https://food.yogyagroup.com/tracking"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/yukbisayukweb.PNG",
        title: "YukBisaYuk",
        description: "is a website that aims to help people by donating and participation in petitions",
        code: "Laravel , MySQL",
        link: "https://github.com/AlbertusKevin/YukBisaYuk"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/restaurant.jpeg",
        title: "RestoranOKE",
        description: "This website has a great tools for customer, cashier, waiter, chef and HR for dine-in restaurant management.",
        code: "Laravel , MySQL",
        link: "https://github.com/AlbertusKevin/YukBisaYuk"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/perpusMantap.jpeg",
        title: "Perpustakaan Mantap",
        description: "is a program that help at library management.",
        code: "Laravel , MongoDB",
        link: "https://github.com/mikhaelAPG/PerpustakaanMantap"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/myinspiration.PNG",
        title: "My Inspiration",
        description: "is a website that inspires you with quotes and the backstory about famous people in the world.",
        code: "Laravel , PostgreSQL , Heroku Cloud",
        link: "https://myinspiration.herokuapp.com"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/latravel.PNG",
        title: "LaTravel",
        description: "is a website that provide an information to help visitors decide where they want to go.",
        code: "Laravel , MySQL",
        link: "https://gitlab.com/VinAlbert/la-travel"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/dengerinaja.PNG",
        title: "DengerinAja",
        description: "is a simple music website to list a music, add new music and so on.",
        code: "Laravel , VueJS , MySQL",
        link: "https://github.com/feii07/dengerinaja"
    },
    {
        type: 1,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/web/baboonlibrary.PNG",
        title: "Babon Library",
        description: "is a library website for read a book and share a book.",
        code: "HTML , PHP , mySQL",
        link: "https://drive.google.com/file/d/1hneU75KF16k1pxyjhLl-lzSgfVo23Rf7/view?usp=sharing"
    },
    {
        type: 2,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/android/kickshaw app.PNG",
        title: "Kickshaw",
        description: "is a Android app that contains a lot of delicious recipe.",
        code: "Kotlin , Spoonacular API , Android Studio",
        link: "https://github.com/beatfraps/Recipe"
    },
    {
        type: 3,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/ui/bioporang.PNG",
        title: "BIOPORANG",
        description: "is a mobile app that gives information about Porang.",
        code: "Figma",
        link: "https://www.figma.com/proto/ptr4buEM2RcQo22jTM8UaA/Bio-Porang?scaling=scale-down"
    },
    {
        type: 3,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/ui/funo.PNG",
        title: "Funo",
        description: "is a mobile app that allow you to book transportation online.",
        code: "Figma",
        link: "https://www.figma.com/proto/toroRSvUtuebVYGl6Nfy1x/Funo-Mobile-Prototype?node-id=0%3A1"
    },
    {
        type: 3,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/ui/youthspace.PNG",
        title: "Youthspace",
        description: "is a cool mobile app for youth.",
        code: "Figma",
        link: "https://www.figma.com/proto/KY2P5ym06HOzzwjtntObgs/Youthspace-Copy?type=design&node-id=0-1&t=yng5MxeAAW06SGOM-0&scaling=scale-down&page-id=0%3A1&prev-org-id=external-teams"
    },
    {
        type: 3,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/ui/tunggalkreatifindo.PNG",
        title: "CV Tunggal Kreatifindo",
        description: "is a app for easily connect customer and CV Tunggal Kreatifindo company.",
        code: "Figma",
        link: "https://www.figma.com/proto/uSdHLDtDQjxk8yD4x3JrbQ/Cv-Tunggal-Kreatifindo?node-id=0%3A1"
    },
    {
        type: 3,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/ui/yukbisayuk.PNG",
        title: "YukBisaYuk",
        description: "is a web design that aims to help people by donating and participation in petitions.",
        code: "Figma",
        link: "https://www.figma.com/proto/Z20WAbZ14SXoRwQ9ulB7GP/Alur?node-id=0%3A1&scaling=min-zoom/"
    },
    {
        type: 3,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/ui/restoran.PNG",
        title: "RestoranOKE",
        description: "is a web design for dine-in restaurant management.",
        code: "Figma",
        link: "https://www.figma.com/proto/cygBKSImYhWrtA3WuE7Ud8/Restoran-View?scaling=min-zoom"
    },
    {
        type: 3,
        image: "https://raw.githubusercontent.com/feii07/portfolio/master/public/img/project/ui/lorem.PNG",
        title: "Lorem",
        description: "is a web design that sells electronic stuff.",
        code: "Figma",
        link: "https://www.figma.com/proto/zkBmgCkEARRTpMa7fTJxaF/Lorem?scaling=min-zoom"
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
                    <a href={item.link}><h6>{item.title}</h6></a>
                    <div className="hover_content">
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;