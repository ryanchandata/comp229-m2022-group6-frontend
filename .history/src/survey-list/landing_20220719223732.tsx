import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Survey()
{
    useEffect(()=>{
        document.title = "My Surveys";
    });
    
    return(
        <div className="container">
            <h1>My Surveys</h1>
            <hr />
            <Link to="/add">
                <button className="btn btn-primary">Create Survey</button>
            </Link>
        </div>
    );
}

export default Survey;