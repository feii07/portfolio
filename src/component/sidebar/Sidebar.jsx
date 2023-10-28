import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBrain, faFile, faInfo } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css';

const items = [
  {
    text: "Introduction",
    icon: faHome,
    id: "#introduction"
  },
  {
    text: "About",
    icon: faUser,
    id: "#about"
  },
  {
    text: "Skills",
    icon: faBrain,
    id: "#skills"
  },
  {
    text: "Projects",
    icon: faFile,
    id: "#projects"
  },
  {
    text: "Contact",
    icon: faInfo,
    id: "#contact"
  },
];

const Sidebar = () => {
  return (
    <div className="col-0 col-xl-2 px-sm-2 px-0 bg-dark d-none d-md-none d-xl-block position-fixed">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
        <div className="navbar-header text-center my-4">
          <img src={process.env.PUBLIC_URL+"/img/profile/profile.jpg"} className="rounded-circle mx-auto d-block img-fluid center-block w-75 h-profile my-3" alt="fera" />
          <span className="fs-5 ms-1 d-block text-white ml-2 text-uppercase"> Ferani Christy </span>
          <span className="text-secondary">Web Developer / UI Designer</span>

          <hr />
        </div>
        <div className="navbar-body w-100">
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start d-block" id="menu">
            {
              items.map((item, key) => {
                return (
                  <li
                    key={`item-${key}`}
                  >
                    <button className="nav-link px-0 align-middle d-flex justify-content-start gap-3 btn btn-link" onClick={() => {
                      const anchor = document.querySelector(item.id)
                      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                      console.log(item.id)
                    }}>
                      <span className="icon d-block"><FontAwesomeIcon className="text-secondary fa-fw" icon={item.icon} /></span>
                      <span className="ms-1 d-none d-sm-inline text-secondary ml-2">{item.text}</span>
                    </button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;