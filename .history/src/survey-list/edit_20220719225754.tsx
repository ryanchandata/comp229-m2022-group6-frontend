import React, { useEffect } from 'react';

function Edit()
{
    useEffect(()=>{
        document.title = "Editing Surveys";
    });
    
    return(
        <div className="container">
            <h1>My Surveys</h1>
            <hr />
            
        </div>
    );
}

export default Edit; 