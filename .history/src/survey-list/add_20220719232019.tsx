import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom/client';

function Add()
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

function SurveyForm(){
    const [name, setName] = useState("");

    return (
        <form>
            
        </form>
    );
}

export default Add; 