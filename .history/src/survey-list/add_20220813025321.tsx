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

    useEffect(()=>{
        document.title = "Add";
    })

    function onChangeName(e: ChangeEvent<HTMLInputElement>)
    {
        setName(e.target.value);
    }

    function onChangeActivationDate(e: ChangeEvent<HTMLInputElement>)
    {
        setActivationDate(e.target.value);
    }

    function onChangeExpirationDate(e: ChangeEvent<HTMLInputElement>)
    {
        setExpirationDate(e.target.value);
    }

    function onChangeQuestion1(e: ChangeEvent<HTMLInputElement>)
    {
        setQuestion1(e.target.value);
    }
    function onChangeOptionType1(e: ChangeEvent<HTMLInputElement>)
    {
        setOptionType1(e.target.value);
    }
    function onChangeOptionDetails1_1(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_1(e.target.value);
    }
    function onChangeOptionDetails1_2(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_2(e.target.value);
    }
    function onChangeOptionDetails1_3(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_3(e.target.value);
    }
    function onChangeOptionDetails1_4(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_4(e.target.value);
    }

    function onChangeQuestion2(e: ChangeEvent<HTMLInputElement>)
    {
        setQuestion2(e.target.value);
    }
    function onChangeOptionType2(e: ChangeEvent<HTMLInputElement>)
    {
        setOptionType2(e.target.value);
    }
    function onChangeOptionDetails2_1(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_1(e.target.value);
    }
    function onChangeOptionDetails2_2(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_2(e.target.value);
    }
    function onChangeOptionDetails2_3(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_3(e.target.value);
    }
    function onChangeOptionDetails2_4(e: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_4(e.target.value);
    }
    
    function saveSurvey(e: any)
    {
        e.preventDefault();
        const data: ISurveyData = {
            _id: ID,
            name: name,
            dateCreated: dateCreated,
            activationDate: new Date(activationDate),
            expirationDate: new Date(expirationDate),
            //status: status,
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
            optiondetails2_4: optiondetails2_4,
   
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
            <h1>Creating a Survey</h1>
            <hr />
            <form onSubmit={saveSurvey} className="form" method="post">
                <div className="form-group">
                    <label htmlFor="name">Survey Title</label>
                    <input type="text" className="form-control" placeholder="Survey Name" id="name" name="name" value = {name} onChange={ onChangeName } required></input><br />
                    <label htmlFor="dateActive">Start From</label>
                    <input type="date" className="form-control" placeholder="Start Date" id="dateActive" name="dateActive" value = {activationDate} onChange={ onChangeActivationDate } required></input><br />
                    <label htmlFor="dateExpire">To</label>
                    <input type="date" className="form-control" placeholder="End Date" id="dateExpire" name="dateExpire" value = {expirationDate} onChange={ onChangeExpirationDate } required></input><br />
                        <label htmlFor="status" className="switch"></label>
                            <input type="checkbox"><span className="slider"></span></input>
                        
                    <label htmlFor="question1">Question 1</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question1" value ={question1} onChange={ onChangeQuestion1 } required></input>
                    <label htmlFor="optionType1">Selection Type:</label>
                    <div onChange={onChangeOptionType1}>
                        <input type="radio" value="radio" name="optionType1" /> Radio
                        <input type="radio" value="checkbox" name="optionType1" /> Checkbox
                    </div>
                    <br />
                    <label htmlFor="option1_1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1_1" name="options1_1" value = {optiondetails1_1} onChange={ onChangeOptionDetails1_1 } required></input>
                    <label htmlFor="option1_2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1_2" name="options1_2" value = {optiondetails1_2} onChange={ onChangeOptionDetails1_2 } required></input>
                    <label htmlFor="option1_3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options1_3" name="options1_3" value = {optiondetails1_3} onChange={ onChangeOptionDetails1_3 } ></input>
                    <label htmlFor="option1_4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options1_4" name="options1_4" value = {optiondetails1_4} onChange={ onChangeOptionDetails1_4 } ></input>
                <br></br>
                <label htmlFor="question2">Question 2</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question2" value = {question2} onChange={ onChangeQuestion2 } required></input>
                    <label htmlFor="optionType2">Selection Type:</label>
                    <div onChange={onChangeOptionType2}>
                        <input type="radio" value="radio" name="optionType2" /> Radio
                        <input type="radio" value="checkbox" name="optionType2" /> Checkbox
                    </div>
                    <br />
                    <label htmlFor="option2_1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2_1" name="options2_1" value = {optiondetails2_1} onChange={ onChangeOptionDetails2_1 } required></input>
                    <label htmlFor="option2_2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2_2" name="options2_2" value = {optiondetails2_2} onChange={ onChangeOptionDetails2_2 } required></input>
                    <label htmlFor="option2_3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options2_3" name="options2_3" value = {optiondetails2_3} onChange={ onChangeOptionDetails2_3 } ></input>
                    <label htmlFor="option2_4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options2_4" name="options2_4" value = {optiondetails2_4} onChange={ onChangeOptionDetails2_4 } ></input>
                </div>

                <div className="text-end mt-2">
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg"><i className="fa-solid fa-plus"></i> Create</button>
                        <Link to= {"/survey"} className="link"><button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button></Link>
                        </div>
            </form>
        </div>
    );
}

export default Add;