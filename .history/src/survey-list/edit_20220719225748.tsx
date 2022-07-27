import React, { useEffect } from 'react';

function Edit()
{
    useEffect(()=>{
        document.title = "Creating Surveys";
    });
    
    return(
        <div className="container">
            <h1>My Surveys</h1>
            <hr />
            
        </div>
    );
}

export default Add; 