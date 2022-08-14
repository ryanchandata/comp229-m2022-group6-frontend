import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IResponseData from '../models/Response';
import responseService from '../services/response-service';

function Response()
{   
    const [ response, setResponse ] = useState<Array<IResponseData>>([]);
    const { id } = useParams();

    useEffect(()=> {
        getResponse(id);
        document.title = "Response Statistic";
    }, [id]);

    function getResponse()
    {
        responseService.readOneResponse(id)
        .then((responses: any) =>{
            setResponse(responses.data.response);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }
        return (
            <div className="container">
                <h1>My Surveys</h1>
                
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
                                            <td>{response.surveyId}</td>
                                            <td className="text-center" id="activeDate" >{ response.question1_ans }</td>
                                            <td className="text-center" id="expireDate" >{ response.question2_ans }</td>
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

