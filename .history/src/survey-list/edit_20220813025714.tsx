import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ISurveyData from '../models/Survey';
import surveyService from '../services/survey-service';

export default function Edit()
{
    const { id } = useParams();
    const [ name, setName ] = useState('');
    const [ activationDate, setActivationDate ] = useState('');
    const [ expirationDate, setExpirationDate ] = useState('');
    const [ status, setStatus ] = useState('');
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
        getSurvey(id);
        document.title = "Edit";
    }, [id]);

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

    function onChangeStatus(e: ChangeEvent<HTMLInputElement>)
    {
        setStatus(e.target.value);
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
    
    function getSurvey(id: any)
    {
        surveyService.readOne(id)
        .then((response: any) =>{
            setName(response.data.surveys.name);
            setActivationDate(response.data.surveys.activationDate);
            setExpirationDate(response.data.surveys.expirationDate);
            setStatus(response.data.surveys.status);
            setResponses(response.data.surveys.responses);
            
            setQuestion1(response.data.surveys.question1);
            setOptionType1(response.data.surveys.optionType1);
            setOptiondetails1_1(response.data.surveys.optiondetails1_1);
            setOptiondetails1_2(response.data.surveys.optiondetails1_2);
            setOptiondetails1_3(response.data.surveys.optiondetails1_3);
            setOptiondetails1_4(response.data.surveys.optiondetails1_4);
            
            setQuestion2(response.data.surveys.question2);
            setOptionType2(response.data.surveys.optionType2);
            setOptiondetails2_1(response.data.surveys.optiondetails2_1);
            setOptiondetails2_2(response.data.surveys.optiondetails2_2);
            setOptiondetails2_3(response.data.surveys.optiondetails2_3);
            setOptiondetails2_4(response.data.surveys.optiondetails2_4);
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
            status: status,
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
            surveyService.update(data, id)
            .then((response: any)=>
            {
                setName(response.data.name);
                setActivationDate(response.data.activationDate);
                setExpirationDate(response.data.expirationDate);
                setStatus(response.data.status);
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
            .catch((e: Error)=>{
                console.log(e);
            });
            window.location.href="/survey";
        }

    return(
        <div className="container">
            <h1>Editing the Survey</h1>
            <hr />
            <form onSubmit={saveSurvey} className="form" method="post">
                <div className="form-group">
                    <label htmlFor="name">Survey Title</label>
                    <input type="text" className="form-control" id="Name" name="name" value = {name} onChange={ onChangeName }></input><br />
                    <label htmlFor="dateActive">Start From</label>
                    <input type="date" className="form-control" id="dateActive" name="dateActive" value = { new Date (activationDate).toLocaleDateString('sv-SE') } onChange={ onChangeActivationDate }></input><br />
                    <label htmlFor="dateExpire">To</label>
                    <input type="date" className="form-control" id="dateExpire" name="dateExpire" value = { new Date (expirationDate).toLocaleDateString('sv-SE') } onChange={ onChangeExpirationDate }></input><br />
                    <input type="date" className="form-control" placeholder="End Date" id="dateExpire" name="dateExpire" value = {expirationDate} onChange={ onChangeExpirationDate } required></input><br />
                        <label htmlFor="status" className="switch">
                            <input type="checkbox" value={ status } onChange={ onChangeStatus } /><span className="slider"></span></label>

                    <label htmlFor="question1">Question 1</label>
                    <input type="text" className="form-control" id="Question1" value ={question1} onChange={ onChangeQuestion1 }></input>
                    <label htmlFor="optionType1">Selection Type:</label>
                    <div onChange={onChangeOptionType1}>
                        <input type="radio" value="radio" name="optionType1" checked={optionType1 === 'radio'} /> Radio
                        <input type="radio" value="checkbox" name="optionType1" checked={optionType1 === 'checkbox'} /> Checkbox
                    </div>
                    <br />
                    <label htmlFor="option1_1">Option 1</label>
                    <input type="text" className="form-control" id="options1_1" name="options1_1" value = {optiondetails1_1} onChange={ onChangeOptionDetails1_1 } ></input>
                    <label htmlFor="option1_2">Option 2</label>
                    <input type="text" className="form-control" id="options1_2" name="options1_2" value = {optiondetails1_2} onChange={ onChangeOptionDetails1_2 } ></input>
                    <label htmlFor="option1_3">Option 3</label>
                    <input type="text" className="form-control" id="options1_3" name="options1_3" value = {optiondetails1_3} onChange={ onChangeOptionDetails1_3 } ></input>
                    <label htmlFor="option1_4">Option 4</label>
                    <input type="text" className="form-control" id="options1_4" name="options1_4" value = {optiondetails1_4} onChange={ onChangeOptionDetails1_4 } ></input>
                <br></br>
                <label htmlFor="question2">Question 2</label>
                    <input type="text" className="form-control" id="Question2" value = {question2} onChange={ onChangeQuestion2 } ></input>
                    <label htmlFor="optionType2">Selection Type:</label>
                    <div onChange={onChangeOptionType2}>
                        <input type="radio" value="radio" name="optionType2" checked={optionType2 === 'radio'} /> Radio
                        <input type="radio" value="checkbox" name="optionType2" checked={optionType2 === 'checkbox'} /> Checkbox
                    </div>
                    <br />
                    <label htmlFor="option2_1">Option 1</label>
                    <input type="text" className="form-control" id="options2_1" name="options2_1" value = {optiondetails2_1} onChange={ onChangeOptionDetails2_1 } ></input>
                    <label htmlFor="option2_2">Option 2</label>
                    <input type="text" className="form-control" id="options2_2" name="options2_2" value = {optiondetails2_2} onChange={ onChangeOptionDetails2_2 } ></input>
                    <label htmlFor="option2_3">Option 3</label>
                    <input type="text" className="form-control" id="options2_3" name="options2_3" value = {optiondetails2_3} onChange={ onChangeOptionDetails2_3 } ></input>
                    <label htmlFor="option2_4">Option 4</label>
                    <input type="text" className="form-control" id="options2_4" name="options2_4" value = {optiondetails2_4} onChange={ onChangeOptionDetails2_4 } ></input>
                </div>

                <div className="text-end mt-2">
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg"><i className="fa-solid fa-file-pen"></i> Edit</button>
                        <Link to= {"/survey"} className="link"><button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button></Link>
                        </div>
            </form>
        </div>
    );
}

