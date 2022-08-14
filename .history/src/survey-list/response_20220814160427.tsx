import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IResponseData from '../models/Response';
import responseService from '../services/response-service';
import surveyService from '../services/survey-service';

function Response()
{   
    const [ response, setResponse ] = useState<Array<IResponseData>>([]);
    const [ name, setName ] = useState('');
    const [ surveyId, setSurveyId ] = useState('');
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
                                <th scope="col" className='text-center'>#</th>
                                <th scope="col" >Survey Name</th>
                                <th scope="col" className="text-center">Start Date</th>
                                <th scope="col" className="text-center">End Date</th>
                                <th scope="col" className="text-center">Response</th>
                                <th scope="col" className="text-center">Status</th>
                                <th scope="col" className="text-center">Edit</th>
                                <th scope="col" className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody id="surveyList">
                            {
                                response &&
                                response.map((response: IResponseData, index: number)=>{
                                    return (
                                        <tr key="{index}">
                                            <th scope="row" className='text-center'>{index + 1}</th>
                                            <td>{ surveyId }</td>
                                            <td className="text-center" id="activeDate" >{ question1_ans }</td>
                                            <td className="text-center" id="expireDate" >{ question2_ans }</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
        )
}

export default Response;

