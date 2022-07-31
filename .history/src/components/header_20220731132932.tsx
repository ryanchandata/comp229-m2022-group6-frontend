import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './team_logo.jpg';
import AuthService from '../services/auth-service';

console.log(logo);

function Header()
{
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(()=>{
    setIsLoggedIn(AuthService.getCurrentUser());
  }, []);

  function toggleLogin()
  {
    if(isLoggedIn)
    {
      return(
        <><li className='nav-item'>
          <NavLink to={"/survey"} className='nav-link' aria-current="page"><i className="fa-solid fa-right-from-bracket fa-lg"></i> My Surveys</NavLink>
        </li><li className='nav-item'>
            <NavLink to={"/logout"} className='nav-link' aria-current="page"><i className="fa-solid fa-right-from-bracket fa-lg"></i> Logout</NavLink>
          </li></>
      );
    }
    else
    {
      return(
        <li className="nav-item">
            <NavLink to={"/login"} className="nav-link" aria-current="page" ><i className="fa-solid fa-right-to-bracket fa-lg"></i> Login</NavLink>
          </li>
      );
    }
  }

    function toggleSurveyList()
    {
      if (isLoggedIn)
      {
        return(
          <li id="surveyListLink" className='nav-item'>
            <NavLink to={"/survey"} className="nav-link"><i className="fas fa-users"></i></NavLink>
          </li>
        );
      }
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink to={"/"} className="navbar-brand"><img src={logo} alt="Logo" height={60} width={70} /> SurWe - Survey</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to={"/home"} className="nav-link" aria-current="page"><i className="fa-solid fa-house-chimney-user fa-lg"></i> Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} className="nav-link" aria-current="page"><i className="fa-solid fa-circle-info fa-lg"></i> About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"} className="nav-link" aria-current="page"><i className="fa-solid fa-envelope fa-lg"></i> Contact Us</NavLink>
          </li>

          { toggleLogin() }

        </ul>
      </div>
    </div>
  </nav>
    )
}

export default Header;