import React from 'react';

// Footer Component
function Footer()
{
    function getDate(): number
    {
      let date = new Date();
      return date.getFullYear();
    }
    return(
        <nav className="navbar fixed-bottom bg-light">
          <div className="container-fluid">
          <p id="copyright">&copy; Copyright { getDate()} - SurWe All Rights Reserved.</p>
         </div>
        </nav>
    );
}

export default Footer;