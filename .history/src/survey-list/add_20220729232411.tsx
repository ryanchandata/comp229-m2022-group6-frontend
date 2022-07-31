import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import SurveyService from '../services/survey-service';
// import SurveyModel from '../models/Survey';

function Add()
{
    /*
    const [ name, setName ] = useState('');
    const [ responses, setResponse ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ optionType, setOptionType ] = useState('');
    const [ details, setDetails ] = useState('');
    const navigate = useNavigate(); // alias

    useEffect(()=>{
        document.title = "Creating Surveys";
    });

    function handleCreate(event: any)
    {
        event.preventDefault();

        /* const SurveyData: SurveyModel =
        {
            name: name,
            responses: responses<Number>.type,
            questions: questionsArray,
        }
        
        SurveyService.add(SurveyData.name, SurveyData.responses.type, SurveyData.questions.title, SurveyData.questions.optionType, SurveyData.questions.options.details)
        .then(() =>{
            navigate('/add');
        }, error =>{
            // TODO: Needs Flash Messaging
            window.location.reload();
        }); 
    }

    function onChangeName(event: ChangeEvent<HTMLInputElement>)
    {
        setName(event.target.value);
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>)
    {
        setTitle(event.target.value);
    }

    function onChangeOptionType(event: ChangeEvent<HTMLInputElement>)
    {
        setOptionType(event.target.value);
    }

    function onChangeDetails(event: ChangeEvent<HTMLInputElement>)
    {
        setDetails(event.target.value);
    }
    
    function onResponse(event: ChangeEvent<HTMLInputElement>)
    {
        setResponse(event.target.value);
    }
    */
    return(
        <div className="container">
            <h1>Creating a Surveys</h1>
            <hr />
            <form className="form" method="post">
                <div className="form-group">
                    <label htmlFor="title">Survey Title</label>
                    <input type="text" className="form-control" placeholder="Title" id="name" name="name" value = ""  required></input><br /><br />
                    <label htmlFor="name">Question 1</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question1" value ="" required></input>
                    <label htmlFor="optionType">Selection Type:</label>
                    <label htmlFor="optionType">Radio
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="radio" required></input>
                    </label>
                    <label htmlFor="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="checkbox" required></input>                
                    </label><br />
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1" name="options1" value = "" required></input>
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2" name="options2" value = "" required></input>
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options3" name="options3" value = "" ></input>
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options4" name="options4" value = "" ></input>
                <br></br>
                <label htmlFor="name">Question 2</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question2" value = "" required></input>
                    <label htmlFor="optionType">Selection Type:</label>
                    <label htmlFor="optionType">Radio
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="radio" required></input>
                    </label>
                    <label htmlFor="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="checkbox" required></input>                
                    </label><br />
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1" name="options5" value = "" required></input>
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2" name="options6" value = "" required></input>
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options3" name="options7" value = "" ></input>
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options4" name="options8" value = "" ></input>
                </div>

                <div className="text-end mt-2">
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg"><i className="fa-solid fa-plus"></i> Create</button>
                        <Link to= {"/home"} className="link"><button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button></Link>
                        </div>
            </form>
        </div>
    );
}

export default Add;