impact React, { useEffect } from 'react';

function Add()
{
    useEffect(()=>{
        document.title = "My Surveys";
    });
    
    return(
        <div className="container">
            <h1>My Surveys</h1>
            <hr />
        </div>
    );
}

export default Add; 