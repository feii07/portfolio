import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBrain, faFile, faInfo } from '@fortawesome/free-solid-svg-icons'

const items = [
    {
      text: "Introduction",
      icon: faHome,
    },
    {
      text: "About",
      icon: faUser,
    },
    {
      text: "Skills",
      icon: faBrain,
    },
    {
      text: "Projects",
      icon: faFile,
    },
    {
      text: "Contact",
      icon: faInfo,
    },
  ];
  
const Sidebar = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark d-none d-md-block position-fixed">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 ">
              <div className="navbar-header text-center my-4">
                <img src="https://www.stockvault.net/blog/wp-content/uploads/2013/11/Portrait-8.jpg" className="rounded-circle mx-auto d-block img-fluid center-block w-75" alt="fera" />
                <span className="fs-5 ms-1 d-block text-white ml-2 text-uppercase"> Ferani Christy </span>
                <span className="text-secondary">Web Developer / UI Designer</span>

                <hr/>
              </div>
              <div className="navbar-body w-100">
                  <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start d-block" id="menu">
                  {
                      items.map((item, key) => {
                          return (
                              <li
                                  key={`item-${key}`}
                              >
                                  <a href='#' className="nav-link px-0 align-middle d-flex justify-content-start gap-3">
                                    <span className="icon d-block"><FontAwesomeIcon className="text-secondary fa-fw" icon={item.icon} /></span>
                                    <span className="ms-1 d-none d-sm-inline text-secondary ml-2">{item.text}</span>
                                  </a>
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