import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ISurveyData from '../models/Survey';
import surveyService from '../services/survey-service';

function Add()
{
    const [ ID, setID ] = useState('');
    const [ name, setName ] = useState('');
    const [ dateCreated, setDateCreated ] = useState('');
    const [ activationDate, setActivationDate ] = useState('');
    const [ expirationDate, setExpirationDate ] = useState('');
    const [ responses, setResponses ] = useState('');

    const [ question1, setQuestion1 ] = useState('');
    const [ optionType1, setOptionType1 ] = useState('');
    const [ optiondetails1_1, setOptiondetails1_1 ] = useState('');
    const [ optiondetails1_2, setOptiondetails1_2 ] = useState('');
    const [ optiondetails1_3, setOptiondetails1_3 ] = useState('');
    const [ optiondetails1_4, setOptiondetails1_4 ] = useState('');

    const [ question2, setQuestion2 ] = useState('');
    const [ optionType2, setOptionType2 ] = useState('');
    const [ optiondetails2_1, setOptiondetails2_1 ] = useState('');
    const [ optiondetails2_2, setOptiondetails2_2 ] = useState('');
    const [ optiondetails2_3, setOptiondetails2_3 ] = useState('');
    const [ optiondetails2_4, setOptiondetails2_4 ] = useState('');

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
            activationDate: new Date(activationDate).toString,
            expirationDate: new Date(expirationDate).toString,
            responses: Number(responses),

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
            setID(response.data.id);
            setName(response.data.name);
            setDateCreated(response.data.dateCreated);
            setActivationDate(response.data.activationDate);
            setExpirationDate(response.data.expirationDate);
            setResponses(response.data.responses);

            setQuestion1(response.data.question1);
            setOptionType1(response.data.optionType1);
            setOptiondetails1_1(response.data.optiondetails1_1);
            setOptiondetails1_2(response.data.optiondetails1_2);
            setOptiondetails1_3(response.data.optiondetails1_3);
            setOptiondetails1_4(response.data.optiondetails1_4);

            setQuestion2(response.data.question2);
            setOptionType2(response.data.optionType2);
            setOptiondetails2_1(response.data.optiondetails2_1);
            setOptiondetails2_2(response.data.optiondetails2_2);
            setOptiondetails2_3(response.data.optiondetails2_3);
            setOptiondetails2_4(response.data.optiondetails2_4);
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
                    <label htmlFor="name">Survey Title</label>
                    <input type="text" className="form-control" placeholder="Survey Name" id="name" name="name" value = {name} onChange={ onChangeName } required></input><br /><br />
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