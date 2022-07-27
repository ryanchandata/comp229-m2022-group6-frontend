import React, { useEffect } from 'react';

function Survey()
{
    useEffect(()=>{
        document.title = "My Surveys";
    });
    
    return(
        <div className="container">
            <h1>My Surveys</h1>
            <hr />
            <p>Here is detail about us...</p>
        </div>
    );
}

export default Survey;