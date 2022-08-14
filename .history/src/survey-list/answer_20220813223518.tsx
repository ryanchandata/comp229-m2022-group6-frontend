import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IResponseData from '../models/Response';
import ISurveyData from '../models/Survey';
import responseService from '../services/response-service';
import surveyService from '../services/survey-service';

export default function Answer()
{
    // items for post response
    const { id } = useParams();
    const [ surveyId, setSurveyId ] = useState('');
    const [ question1_ans, setQuestion1_ans ] = useState('');
    const [ question2_ans, setQuestion2_ans ] = useState('');

    // items for get survey
    const [ name, setName ] = useState('');

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
        document.title = "Answering Survey";
    }, [id]);

    function onChangeQuestion1_ans(e: ChangeEvent<HTMLInputElement>)
    {
        setQuestion1_ans(e.target.value);
    }

    function onChangeQuestion2_ans(e: ChangeEvent<HTMLInputElement>)
    {
        setQuestion2_ans(e.target.value);
    }
    
    function getSurvey(id: any)
    {
        surveyService.readOne(id)
        .then((response: any) =>{
            setName(response.data.surveys.name);    
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

    function saveResponse(e: any)
    {
        e.preventDefault();
        const data: IResponseData = {
            _id: id,
            surveyId: surveyId,
            question1_ans: question1_ans,
            question2_ans: question2_ans,
           
        }
            responseService.update(data, id)
            .then((response: any)=>
            {
                setQuestion1_ans(response.data.question1_ans);
                setQuestion2_ans(response.data.question2_ans);
            })
            .catch((e: Error)=>{
                console.log(e);
            });
            window.location.href="/home";
        }

    return(
        <div className="container">
            <h1>Answering the Survey</h1>
            <hr />
            <form onSubmit={saveResponse} className="form" method="post">
                <div className="form-group">
                    <label htmlFor="name"> {name} </label>
                    <label htmlFor="question1"> {question1} </label>

                    
                    <label htmlFor="question1"> {question2} </label>
                   
                   
                </div>

                <div className="text-end mt-2">
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg"><i className="fa-solid fa-file-pen"></i> Submit</button>
                        <Link to= {"/home"} className="link"><button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button></Link>
                        </div>
            </form>
        </div>
    );
}

