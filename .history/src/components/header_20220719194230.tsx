import React from 'react';
import { NavLink } from 'react-router-dom';

function Header()
{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink to={"/"} className="navbar-brand"><i className="fa-solid fa-link fa-lg"></i> COMP229 M2022 Sec. 2</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={"/home"} className="nav-link <%= (page == 'home') ? 'active' : ''; %>" aria-current="page"><i className="fa-solid fa-house-chimney-user fa-lg"></i> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} className="nav-link <%= (page == 'about') ? 'active' : ''; %>" aria-current="page"><i className="fa-solid fa-circle-info fa-lg"></i> About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/projects"} className="nav-link <%= (page == 'projects') ? 'active' : ''; %>" aria-current="page"><i className="fa-solid fa-diagram-project fa-lg"></i> Our Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/services"} className="nav-link <%= (page == 'services') ? 'active' : ''; %>" aria-current="page"><i className="fa-solid fa-signs-post fa-lg"></i> Our Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"} className="nav-link <%= (page == 'contact') ? 'active' : ''; %>" aria-current="page"><i className="fa-solid fa-envelope fa-lg"></i> Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )
}

export default Header;