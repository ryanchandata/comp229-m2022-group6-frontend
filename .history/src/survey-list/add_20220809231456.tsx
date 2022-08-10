import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ISurveyData from '../models/Survey';
import surveyService from '../services/survey-service';

function Add()
{
    const [ ID, setID ] = useState('');
    const [ name, setName ] = useState('');
    const [ dateCreated, setDateActive ] = useState('');
    const [ activationDate, setDateActive ] = useState('');
    const [ expirationDate, setDateExpire ] = useState('');
    const [ responses, setOptionType2 ] = useState('');

    const [ question1, setOptions ] = useState('');
    const [ optionType1, setOptions ] = useState('');
    const [ optiondetails1_1, setOptions ] = useState('');
    const [ optiondetails1_2, setOptions ] = useState('');
    const [ optiondetails1_3, setOptions ] = useState('');
    const [ optiondetails1_4, setOptions ] = useState('');

    const [ question2, setOptions ] = useState('');
    const [ optionType2, setOptions ] = useState('');
    const [ optiondetails2_1, setOptions ] = useState('');
    const [ optiondetails2_2, setOptions ] = useState('');
    const [ optiondetails2_3, setOptions ] = useState('');
    const [ optiondetails2_4, setOptions ] = useState('');

    // const [ response, setResponse ] = useState('');

    useEffect(()=>{
        document.title = "Add";
    })

    function onChangeName(event: ChangeEvent<HTMLInputElement>)
    {
        setName(event.target.value);
    }

    
    
    /*function onResponse(event: ChangeEvent<HTMLInputElement>)
    {
        setResponse(event.target.value);
    }*/
    
    function saveSurvey(e: any)
    {
        e.preventDefault();
        const data: ISurveyData = {
            name: name,
            dateCreated: dateCreated,
            activationDate: activationDate,
            expirationDate: expirationDate,
            responses: responses,
            question1: question1,
            optionType1: optionType1,
            optiondetails1_1: optiondetails1_1,
            optiondetails1_2: optiondetails1_2,
            optiondetails1_3: optiondetails1_3,
            optiondetails1_4: optiondetails1_4,
            question2: question2,
            optionType2: optionType2,
            optiondetails2_1: optiondetails2_1,
            optiondetails2_2: optiondetails2_2,
            optiondetails2_3: optiondetails2_3,
            optiondetails2_4: optiondetails2_4
        }

        surveyService.create(data)
        .then((response: any)=>
        {
            
        })
        .catch((e: Error) =>{
        console.log(e);
    });
    window.location.href = "/survey";
}

    return(
        <div className="container">
            <h1>Creating a Surveys</h1>
            <hr />
            <form onSubmit={saveSurvey} className="form" method="post">
                <div className="form-group">
                    <label htmlFor="title">Survey Title</label>
                    <input type="text" className="form-control" placeholder="Title" id="name" name="name" value = {name} onChange={ onChangeName } required></input><br /><br />
                    <label htmlFor="name">Question 1</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question1" value ={title} onChange={ onChangeTitle } required></input>
                    <label htmlFor="optionType">Selection Type:</label>
                    <label htmlFor="optionType">Radio
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value={radio} onChange={ onChangeOptionType1 } required></input>
                    </label>
                    <label htmlFor="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value={checkbox} onChange={ onChangeOptionType2 } required></input>                
                    </label><br />
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1" name="options1" value = {options} onChange={ onChangeOptions } required></input>
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2" name="options2" value = {options} onChange={ onChangeOptions } required></input>
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options3" name="options3" value = {options} onChange={ onChangeOptions } ></input>
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options4" name="options4" value = {options} onChange={ onChangeOptions } ></input>
                <br></br>
                <label htmlFor="name">Question 2</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question2" value = {title} onChange={ onChangeTitle } required></input>
                    <label htmlFor="optionType">Selection Type:</label>
                    <label htmlFor="optionType">Radio
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="radio" onChange={ onChangeOptionType1 } required></input>
                    </label>
                    <label htmlFor="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="checkbox" onChange={ onChangeOptionType2 } required></input>                
                    </label><br />
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1" name="options5" value = {options} onChange={ onChangeOptions } required></input>
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2" name="options6" value = {options} onChange={ onChangeOptions } required></input>
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options3" name="options7" value = {options} onChange={ onChangeOptions } ></input>
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options4" name="options8" value = {options} onChange={ onChangeOptions } ></input>
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