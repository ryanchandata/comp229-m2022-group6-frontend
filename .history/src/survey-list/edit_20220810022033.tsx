import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ISurveyData from '../models/Survey';
import surveyService from '../services/survey-service';

function Edit()
{
    const { id } = useParams();
    const [ name, setName ] = useState('');
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
        getSurvey(id);
        document.title = "Edit";
    })

    function onChangeName(event: ChangeEvent<HTMLInputElement>)
    {
        setName(event.target.value);
    }

    function onChangeActivationDate(event: ChangeEvent<HTMLInputElement>)
    {
        setActivationDate(event.target.value);
    }

    function onChangeExpirationDate(event: ChangeEvent<HTMLInputElement>)
    {
        setExpirationDate(event.target.value);
    }

    function onChangeQuestion1(event: ChangeEvent<HTMLInputElement>)
    {
        setQuestion1(event.target.value);
    }
    function onChangeOptionType1(event: ChangeEvent<HTMLInputElement>)
    {
        setOptionType1(event.target.value);
    }
    function onChangeOptionDetails1_1(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_1(event.target.value);
    }
    function onChangeOptionDetails1_2(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_2(event.target.value);
    }
    function onChangeOptionDetails1_3(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_3(event.target.value);
    }
    function onChangeOptionDetails1_4(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails1_4(event.target.value);
    }

    function onChangeQuestion2(event: ChangeEvent<HTMLInputElement>)
    {
        setQuestion2(event.target.value);
    }
    function onChangeOptionType2(event: ChangeEvent<HTMLInputElement>)
    {
        setOptionType2(event.target.value);
    }
    function onChangeOptionDetails2_1(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_1(event.target.value);
    }
    function onChangeOptionDetails2_2(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_2(event.target.value);
    }
    function onChangeOptionDetails2_3(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_3(event.target.value);
    }
    function onChangeOptionDetails2_4(event: ChangeEvent<HTMLInputElement>)
    {
        setOptiondetails2_4(event.target.value);
    }
    
    function getSurvey(id: any)
    {
        surveyService.readOne(id)
        .then((response: any) =>{
            setName(response.data.survey.name);
            setActivationDate(response.data.survey.activationDate);
            setExpirationDate(response.data.survey.expirationDate);
            setResponses(response.data.survey.responses);
            
            setQuestion1(response.data.survey.question1);
            setOptionType1(response.data.survey.optionType1);
            setOptiondetails1_1(response.data.survey.optiondetails1_1);
            setOptiondetails1_2(response.data.survey.optiondetails1_2);
            setOptiondetails1_3(response.data.survey.optiondetails1_3);
            setOptiondetails1_4(response.data.survey.optiondetails1_4);
            
            setQuestion2(response.data.survey.question2);
            setOptionType2(response.data.survey.optionType2);
            setOptiondetails2_1(response.data.survey.optiondetails2_1);
            setOptiondetails2_2(response.data.survey.optiondetails2_2);
            setOptiondetails2_3(response.data.survey.optiondetails2_3);
            setOptiondetails2_4(response.data.survey.optiondetails2_4);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function saveSurvey(e: any)
    {
        e.preventDefault();
        const data: ISurveyData = {
            _id: id,
            name: name,
            dateCreated: '',
            activationDate: new Date(activationDate),
            expirationDate: new Date(expirationDate),
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
            Date: function (activationDate: any): ReactNode {
                throw new Error('Function not implemented.');
            },
            Number: function (responses: any): ReactNode {
                throw new Error('Function not implemented.');
            },
        }
            surveyService.update(data, id)
            .then((response: any)=>
            {
                setName(response.data.survey.name);
                setActivationDate(response.data.survey.activationDate);
                setExpirationDate(response.data.survey.expirationDate);
                setResponses(response.data.survey.responses);
                
                setQuestion1(response.data.survey.question1);
                setOptionType1(response.data.survey.optionType1);
                setOptiondetails1_1(response.data.survey.optiondetails1_1);
                setOptiondetails1_2(response.data.survey.optiondetails1_2);
                setOptiondetails1_3(response.data.survey.optiondetails1_3);
                setOptiondetails1_4(response.data.survey.optiondetails1_4);
                
                setQuestion2(response.data.survey.question2);
                setOptionType2(response.data.survey.optionType2);
                setOptiondetails2_1(response.data.survey.optiondetails2_1);
                setOptiondetails2_2(response.data.survey.optiondetails2_2);
                setOptiondetails2_3(response.data.survey.optiondetails2_3);
                setOptiondetails2_4(response.data.survey.optiondetails2_4);
            })
            .catch((e: Error)=>{
                console.log(e);
            });
            window.location.href="/survey";
        }

    return(
        <div className="container">
            <h1>Editing a Surveys</h1>
            <hr />
            <form onSubmit={saveSurvey} className="form" method="post">
                <div className="form-group">
                    <label htmlFor="name">Survey Title</label>
                    <input type="text" className="form-control" placeholder="Survey Name" id="name" name="name" value = {name} onChange={ onChangeName } required></input><br />
                    <label htmlFor="dateActive">Start From</label>
                    <input type="date" className="form-control" placeholder="Start Date" id="dateActive" name="dateActive" value = {activationDate} onChange={ onChangeActivationDate } required></input><br />
                    <label htmlFor="dateExpire">To</label>
                    <input type="date" className="form-control" placeholder="End Date" id="dateExpire" name="dateExpire" value = {expirationDate} onChange={ onChangeExpirationDate } required></input><br />
                    
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
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg"><i className="fa-solid fa-plus"></i> Edit</button>
                        <Link to= {"/home"} className="link"><button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button></Link>
                        </div>
            </form>
        </div>
    );
}

export default Edit;