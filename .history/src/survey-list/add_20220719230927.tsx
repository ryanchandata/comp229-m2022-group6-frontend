import React, { useEffect } from 'react';

function Add()
{
    useEffect(()=>{
        document.title = "Creating Surveys";
    });
    
    return(
        <div className="container">
            <h1>My Surveys</h1>
            <hr />
            <form className="form" method="post">
                <div className="form-group">
                    <label htmlFor="name">Survey Title</label>
                </div>
            </form>
        </div>
    );
}

export default Add; 