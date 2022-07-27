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
                    <label htmlFor="title">Survey Title</label>
                    <input type="text" className="form-control" placeholder="Title" id="question<%= count + 1%>" name="name" value="" required></input><br /><br />
                    <label htmlFor="name">Question 1</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question1" name="question1" value="" required></input>
                    <label htmlFor="optionType">Selection Type:</label>
                    <label htmlFor="optionType">Radio
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="radio" required></input>
                    </label>
                    <label htmlFor="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="checkbox" required></input>                
                    </label><br />
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1" name="options1" value="" required></input>
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2" name="options2" value="" required></input>
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options3" name="options3" value="" ></input>
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options4" name="options4" value="" ></input>
                </div>
            </form>
        </div>
    );
}

export default Add; 