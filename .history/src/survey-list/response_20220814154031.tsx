import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IResponseData from '../models/Response';
import responseService from '../services/response-service';

function Response()
{   
    const [ response, setResponse ] = useState<Array<IResponseData>>([]);

    useEffect(()=> {
        readResponse();
    }, []);

    function readResponse()
    {
        responseService.readOneResponse()
        .then((responses: any) =>{
            setResponse(responses.data.response);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }
    
    document.title = "Response Statistic";
    
        return (
            <div className="container">
                <h1>My Surveys</h1>
                
                <hr />
                <Link to="/add" >
                    <button id="addButton" className="btn btn-primary">Create Survey</button>
                </Link>
                <br /><br />
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
                                surveys &&
                                surveys.map((survey: ISurveyData, index: number)=>{
                                    return (
                                        <tr key="{index}">
                                            <th scope="row" className='text-center'>{index + 1}</th>
                                            <td>{survey.name}</td>
                                            <td className="text-center" id="activeDate" >{new Date (survey.activationDate).toDateString()}</td>
                                            <td className="text-center" id="expireDate" >{new Date (survey.expirationDate).toDateString()}</td>
                                            <td className="text-center">{Number(survey.responses)}</td>
                                            <td className="text-center">{ survey.status }</td>
                                            <td className="text-center">
                                                <Link to={`/edit/${survey._id}`}>
                                                    <button className="btn btn-primary"><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                                                </Link></td>
                                            <td className="text-center">
                                                <button onClick={()=>{confirmDelete(survey._id)}} className="btn btn-primary"><i className="fa-solid fa-circle-minus fa-lg"></i></button>
                                            </td>
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

