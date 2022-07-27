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
                    <input type="text" className="form-control" placeholder="Title" id="question<%= count + 1%>" name="name" value="<% surveys.name %>" required></input><br /><br />
                    <label htmlFor="name">Question 1</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question1" name="question1" value="question1" required></input>
                    <label id="optionType">Selection Type:</label>
                    <label id="optionType">Radio
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="radio" required></input>
                    </label>
                    <label id="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="checkbox" required></input>                
                    </label>
                    <label htmlFor="name">Option 1</label>
                    <input type="text" className="form-control" placeholder="" id="options<%= count + 1%>" name="options<%= count + 1%>" value="" required></input>
                    <label htmlFor="name">Option 2</label>
                    <input type="text" className="form-control" placeholder="" id="options<%= count + 1%>" name="options<%= count + 1%>" value="" required></input>
                    <label htmlFor="name">Option 3</label>
                    <input type="text" className="form-control" placeholder="" id="options<%= count + 1%>" name="options<%= count + 1%>" value="" ></input>
                    <label htmlFor="name">Option 4</label>
                    <input type="text" className="form-control" placeholder="" id="options<%= count + 1%>" name="options<%= count + 1%>" value="" ></input>
                </div>
            </form>
        </div>
    );
}

export default Add; 