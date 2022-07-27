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
            <form className="form" method="post">
                <div className="form-group">
                    <label htmlFor="name">Survey Title</label>
                    <input type="text" className="form-control" placeholder="" id="question<%= count + 1%>" name="question<%= count + 1%>" value="" required></input><br /><br />
                    <label htmlFor="name">Question 1</label>
                    <input type="text" className="form-control" placeholder="" id="question<%= count + 1%>" name="question<%= count + 1%>" value="" required></input>
                    <label htmlFor="name">Selection Type:</label>
                    <input type="radio" className="form-check-input" placeholder="" id="optionType<%= count + 1%>" name="optionType<%= count + 1%>" value="radio" required></input>
                    <input type="radio" className="form-check-input" placeholder="" id="optionType<%= count + 1%>" name="optionType<%= count + 1%>" value="checkbox" required></input>
                </div>
            </form>
        </div>
    );
}

export default Add; 