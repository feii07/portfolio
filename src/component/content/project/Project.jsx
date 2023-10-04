import React from "react";
import "../project/Project.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faUikit } from "@fortawesome/free-brands-svg-icons";

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
                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
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