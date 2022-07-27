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
                    <input type="text" className="form-control" placeholder="" id="question<%= count + 1%>" name="question<%= count + 1%>" value="" required></input>
                </div>
            </form>
        </div>
    );
}

export default Add; 