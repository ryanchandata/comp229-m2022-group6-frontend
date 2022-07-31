import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ISurveyData from '../models/Survey';
import surveyService from '../services/survey-service';

function Edit()
{
    const [ name, setName ] = useState('');
    const [ name, setName ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ radio, setOptionType1 ] = useState('');
    const [ checkbox, setOptionType2 ] = useState('');
    const [ options, setOptions ] = useState('');
    // const [ response, setResponse ] = useState('');

    const { id } = useParams();

    useEffect(()=>{
        getSurvey(id);
        document.title = "Edit";
    }, [id]);

    function onChangeName(event: ChangeEvent<HTMLInputElement>)
    {
        setName(event.target.value);
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>)
    {
        setTitle(event.target.value);
    }

    function onChangeOptionType1(event: ChangeEvent<HTMLInputElement>)
    {
        setOptionType1(event.target.value);
    }
    function onChangeOptionType2(event: ChangeEvent<HTMLInputElement>)
    {
        setOptionType2(event.target.value);
    }

    function onChangeOptions(event: ChangeEvent<HTMLInputElement>)
    {
        setOptions(event.target.value);
    }
    
    /*function onResponse(event: ChangeEvent<HTMLInputElement>)
    {
        setResponse(event.target.value);
    }*/

    function getSurvey(id: any)
    {
        surveyService.readOne(id)
        .then((response: any) =>{
            setName(response.data.survery.name);
            setTitle(response.data.survey.title);
            setOptionType1(response.data.survery.optionType1);
            setOptionType1(response.data.survery.optionType2);
            setOptions(response.data.survery.options);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }
    
    function saveSurvey(e: any)
    {
        e.preventDefault();
        const data: ISurveyData = {
            name: name,
            dateCreated: '',
            dateActive: '',
            dateExpire: '',
            responses: {
                type: 0,
                default: 0
            },
            questions: [{
                title: '',
                optionType: '',
                options: [{
                    details: '',
                    count:{
                    type: 0,
                    default: 0
                }
            }]
        }]}

        surveyService.update(data, id)
        .then((response: any)=>
        {
            setName(response.data.name)
            setTitle(response.data.title)
            setOptionType1(response.data.optiontype1)
            setOptionType2(response.data.optiontype2)
            setOptions(response.data.options)
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
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="radio" onChange={ onChangeOptionType1 } required></input>
                    </label>
                    <label htmlFor="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="checkbox" onChange={ onChangeOptionType2 } required></input>                
                    </label><br />
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1" name="options1" value = "" onChange={ onChangeOptions } required></input>
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2" name="options2" value = "" onChange={ onChangeOptions } required></input>
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options3" name="options3" value = "" onChange={ onChangeOptions } ></input>
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options4" name="options4" value = "" onChange={ onChangeOptions } ></input>
                <br></br>
                <label htmlFor="name">Question 2</label>
                    <input type="text" className="form-control" placeholder="What is your survey question?" id="question2" value = "" onChange={ onChangeTitle } required></input>
                    <label htmlFor="optionType">Selection Type:</label>
                    <label htmlFor="optionType">Radio
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="radio" onChange={ onChangeOptionType1 } required></input>
                    </label>
                    <label htmlFor="optionType">Checkbox
                    <input type="radio" className="form-check-input" id="optionType1" name="optionType1" value="checkbox" onChange={ onChangeOptionType2 } required></input>                
                    </label><br />
                    <label htmlFor="option1">Option 1</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options1" name="options5" value = "" onChange={ onChangeOptions } required></input>
                    <label htmlFor="option2">Option 2</label>
                    <input type="text" className="form-control" placeholder="Add option" id="options2" name="options6" value = "" onChange={ onChangeOptions } required></input>
                    <label htmlFor="option3">Option 3</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options3" name="options7" value = "" onChange={ onChangeOptions } ></input>
                    <label htmlFor="option4">Option 4</label>
                    <input type="text" className="form-control" placeholder="Add option, if any" id="options4" name="options8" value = "" onChange={ onChangeOptions } ></input>
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

export default Edit;