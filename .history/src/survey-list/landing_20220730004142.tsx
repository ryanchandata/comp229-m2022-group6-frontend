import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SurveyService from '../services/survey-service';
import ISurveyData from '../models/Survey';

function Survey()
{   
    
    function renderSurvey(survey: ISurveyData)
    {
        return <tr>
            <td>{survey.name}</td>
            <td></td>
            <td>{survey.dateExpire}</td>
            <td></td>
            <td>{survey.dateActive}</td>
            <td className="text-center"><Link to="/edit/<%= surveys[count]._id %>"><button className="btn btn-primary"><i className="fa-solid fa-pen-to-square fa-lg"></i></button></Link></td>
            <td className="text-center"><Link to="/delete/<% surveys[count]._id %>"><button className="btn btn-primary"><i className="fa-solid fa-circle-minus fa-lg"></i></button></Link></td>
        </tr>
    }
        
    document.title = "My Surveys";
    SurveyService.get(SurveyData.name)
    const [survey, setSurvey] = useState([] as ISurveyData[]);
    useEffect(()=>{
        fetch("https://comp229-m2022-project-group6.herokuapp.com/api/survey")
        .then (response => response.json() as Promise<ISurveyData[]>)
        .then (data => setSurvey(data));
    }, []); 
        
        return <>
            <div className="container">
                <h1>My Surveys</h1>
                <hr />
                <Link to="/add" >
                    <button className="btn btn-primary">Create Survey</button>
                </Link>
                <br /><br />
                <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Survey Name</th>
                                <th className="text-center">Start Date</th>
                                <th className="text-center">End Date</th>
                                <th className="text-center">Response</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Edit</th>
                                <th className="text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {survey.map(l=>renderSurvey(l))}                 
                        </tbody>
                    </table>
                </div>
            </div>
        </>
}

export default Survey;