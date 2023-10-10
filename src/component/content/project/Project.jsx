import React from "react";
import "../project/Project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "Gistex Chewon",
        description: "is a company website of Gistex Chewon to introduce the company to customer.",
        code: "Heroku, Wordpress"
    },
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "YukBisaYuk",
        description: "is a website that aims to help people by donating and participation in petitions",
        code: "Laravel , MySQL"
    },
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "RestoranOKE",
        description: "This website has a great tools for customer, cashier, waiter, chef and HR for dine-in restaurant management.",
        code: "Laravel , MySQL"
    },
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "Perpustakaan Mantap",
        description: "is a program that help at library management.",
        code: "Laravel , MongoDB"
    },
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "My Inspiration",
        description: "is a website that inspires you with quotes and the backstory about famous people in the world.",
        code: "Laravel , PostgreSQL , Heroku Cloud"
    },
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "LaTravel",
        description: "is a website that provide an information to help visitors decide where they want to go.",
        code: "Laravel , MySQL"
    },
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "DengerinAja",
        description: "is a simple music website to list a music, add new music and so on.",
        code: "Laravel , VueJS , MySQL"
    },
    {
        type: 1,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "Babon Library",
        description: "is a library website for read a book and share a book.",
        code: "HTML , PHP , mySQL"
    },
    {
        type: 2,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "Kickshaw",
        description: "is a Android app that contains a lot of delicious recipe.",
        code: "Kotlin , Spoonacular API , Android Studio"
    },
    {
        type: 3,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "BIOPORANG",
        description: "is a mobile app that gives information about Porang.",
        code: "Figma"
    },
    {
        type: 3,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "Funo",
        description: "is a mobile app that allow you to book transportation online.",
        code: "Figma"
    },
    {
        type: 3,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "Youthspace",
        description: "is a cool mobile app for youth.",
        code: "Figma"
    },
    {
        type: 3,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "CV Tunggal Kreatifindo",
        description: "is a app for easily connect customer and CV Tunggal Kreatifindo company.",
        code: "Figma"
    },
    {
        type: 3,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "YukBisaYuk",
        description: "is a web design that aims to help people by donating and participation in petitions.",
        code: "Figma"
    },
    {
        type: 3,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "RestoranOKE",
        description: "is a web design for dine-in restaurant management.",
        code: "Figma"
    },
    {
        type: 3,
        image: "https://st2.depositphotos.com/1063437/50630/i/450/depositphotos_506301134-stock-photo-poznan-pol-feb-2021-laptop.jpg",
        title: "Lorem",
        description: "is a web design that sells electronic stuff.",
        code: "Figma"
    },
];

const Projects = () => {
    return (
        <div className="d-flex h-full">
            <div className="m-auto">
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
                        {
                            projects.map((item, key) => {
                                if (item.type == 1)
                                {
                                    return (
                                        <div className="card-project">
                                            <div className="content">
                                                <img className="logo" src={item.image}/>
                                                <h6>{item.title}</h6>
                                                <div className="hover_content">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                    <div className="tab-pane" id="mobileDev" role="tabpanel">
                        <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                    </div>
                    <div className="tab-pane" id="uiUx" role="tabpanel">
                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;