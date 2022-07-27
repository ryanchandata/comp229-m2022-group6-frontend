import React, { useEffect } from 'react';

function Services()
{
    useEffect(()=>{
        document.title = "Our Services";
    });
    
    return(
        <div className="container">
            <h1>About Us</h1>
            <hr />
            <p>Here is detail about our services...</p>
        </div>
    );
}

export default Services;