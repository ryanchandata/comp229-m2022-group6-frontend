import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import surveyService from '../services/survey-service';
import ISurveyData from '../models/Survey';

function Survey()
{   
    const [ surveys, setSurveys ] = useState<Array<ISurveyData>>([]);

    useEffect(()=> {
        readSurveys();
    }, []);

    function refreshList()
    {
        readSurveys();
    }

    function readSurveys()
    {
        surveyService.readAll()
        .then((responses: any) =>{
            setSurveys(responses.data.surveys);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function deleteSurvey (id: string)
    {
        surveyService.delete(id)
        .then((responses: any) =>{
            refreshList();
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function confirmDelete(id: string)
    {
        if(!window.confirm("Are you sure?"))
        {
            refreshList();
            return;
        }
        deleteSurvey(id);
    }
    
    document.title = "My Surveys";
    
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
                                <th scope="col" className="text-center">Statistic</th>
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
                                            <td className="text-center">
                                                <Link to={`/response/${survey._id}`}>
                                                    <button className="btn btn-primary"><i className="fa-solid fa-chart-column"></i></button>
                                                </Link></td>
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

export default Survey;
