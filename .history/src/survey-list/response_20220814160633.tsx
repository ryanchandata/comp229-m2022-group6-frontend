import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import responseService from '../services/response-service';
import surveyService from '../services/survey-service';

function Response()
{   
    const [ name, setName ] = useState('');
    const [ question1_ans, setQuestion1_ans ] = useState('');
    const [ question2_ans, setQuestion2_ans ] = useState('');
    const { id } = useParams();

    useEffect(()=> {
        getSurvey(id);
        readResponse();
        getResponse(id);
        document.title = "Statistic";
    }, [id]);


    function readResponse()
    {
        responseService.readAllResponse()
        .then((responses: any) =>{
            setResponse(responses.data.response);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function getSurvey(id: any)
    {
        surveyService.readOne(id)
        .then((response: any) =>{
            setName(response.data.surveys.name);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function getResponse(id: any)
    {
        responseService.readOneResponse(id)
        .then((responses: any) =>{
            setSurveyId(responses.data.surveyId);
            setQuestion1_ans(responses.data.question1_ans);
            setQuestion2_ans(responses.data.question2_ans);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }
        return (
            <div className="container">
                <h1>Survey name - { name } </h1>
                <hr />
                <div className="row">
                    
                <div className="col">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'></th>
                                <th scope="col" className="text-center">Question 1</th>
                                <th scope="col" className="text-center">Question 2</th>
                            </tr>
                        </thead>
                        <tbody id="surveyList">
                            return (
                                <tr key="{index}">
                                    <th scope="row" className='text-center'></th>
                                    <td className="text-center" id="activeDate" >{ question1_ans }</td>
                                    <td className="text-center" id="expireDate" >{ question2_ans }</td>
                                    </tr>
                                )
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
        )
}

export default Response;

