import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './team_logo.jpg';
import ScrollButton from './scrollbutton';

// Footer Component
function Footer()
{
    function getDate(): number
    {
      let date = new Date();
      return date.getFullYear();
    }
    return(
      <nav className="navbar flex-bottom bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="about">
                <p>We strive provide analysis tools to help every dreamer at the beginning of their projects.</p>

                  <div className="social-media">
                      <a ><i className="fa-brands fa-facebook"></i></a>
                      <a ><i className="fa-brands fa-twitter"></i></a>
                      <a ><i className="fa-brands fa-google-plus"></i></a>
                      <a ><i className="fa-brands fa-instagram"></i></a>
                  </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <NavLink to={"/home"} className="nav-link" aria-current="page"><h3 className="title">Home</h3></NavLink>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <NavLink to={"/about"} className="nav-link" aria-current="page"><h3 className="title">About Us</h3></NavLink>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <NavLink to={"/contact"} className="nav-link" aria-current="page"><h3 className="title">Contact Us</h3></NavLink>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-info-single">
                <NavLink to={"/login"} className="nav-link" aria-current="page"><h3 className="title">Login</h3></NavLink>
               </div>
            </div>
              <p id="copyright" className="copyright">&copy; Copyright { getDate()} - SurWe All Rights Reserved.</p>
          </div>
          <ScrollButton />
        </div>          
      </nav>

    );
}

export default Footer;