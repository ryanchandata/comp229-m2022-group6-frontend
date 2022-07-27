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
                    <input type="text" className="form-control" placeholder="" id="question<%= count + 1%>" name="question<%= count + 1%>" value="" required></input><br /><br />
                    <label htmlFor="name">Question 1</label>
                    <input type="text" className="form-control" placeholder="" id="question<%= count + 1%>" name="question<%= count + 1%>" value="" required></input>
                    <label id="optionType">Selection Type:</label>
                    <label id="optionType">Radio
                    <input type="radio" className="form-check-input" placeholder="" id="optionType<%= count + 1%>" name="optionType<%= count + 1%>" value="radio" checked={true} required></input>
                    </label>
                    <label id="optionType">Checkbox
                    <input type="radio" className="form-check-input" placeholder="" id="optionType<%= count + 1%>" name="optionType<%= count + 1%>" value="checkbox" checked={true} required></input>                
                    </label>
                    
                </div>
            </form>
        </div>
    );
}

export default Add; 