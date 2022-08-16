import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import responseService from '../services/response-service';
import surveyService from '../services/survey-service';
//import IResponseData from '../models/Response';

function Response()
{   
    // items for survey
    const [ name, setName ] = useState('');

    const [ question1, setQuestion1 ] = useState('');
    const [ optiondetails1_1, setOptiondetails1_1 ] = useState('');
    const [ optiondetails1_2, setOptiondetails1_2 ] = useState('');
    const [ optiondetails1_3, setOptiondetails1_3 ] = useState('');
    const [ optiondetails1_4, setOptiondetails1_4 ] = useState('');

    const [ question2, setQuestion2 ] = useState('');
    const [ optiondetails2_1, setOptiondetails2_1 ] = useState('');
    const [ optiondetails2_2, setOptiondetails2_2 ] = useState('');
    const [ optiondetails2_3, setOptiondetails2_3 ] = useState('');
    const [ optiondetails2_4, setOptiondetails2_4 ] = useState('');

    // items for response
    const [ question1_ans, setQuestion1_ans ] = useState('');
    const [ question2_ans, setQuestion2_ans ] = useState('');
    const { id } = useParams();

    useEffect(()=> {
        getSurvey(id);
        getResponse(id);
        document.title = "Statistic";
    }, [id]);

    function getSurvey(id: any)
    {
        surveyService.readOne(id)
        .then((response: any) =>{
            setName(response.data.surveys.name);

            setQuestion1(response.data.surveys.question1);
            setOptiondetails1_1(response.data.surveys.optiondetails1_1);
            setOptiondetails1_2(response.data.surveys.optiondetails1_2);
            setOptiondetails1_3(response.data.surveys.optiondetails1_3);
            setOptiondetails1_4(response.data.surveys.optiondetails1_4);

            setQuestion2(response.data.surveys.question2);
            setOptiondetails2_1(response.data.surveys.optiondetails2_1);
            setOptiondetails2_2(response.data.surveys.optiondetails2_2);
            setOptiondetails2_3(response.data.surveys.optiondetails2_3);
            setOptiondetails2_4(response.data.surveys.optiondetails2_4);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function getResponseAns1(id: any)
    {
        responseService.readOneResponseAns1(id)
        .then((responses: any) =>{
            setQuestion1_ans(responses.data.question1_ans);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function getResponseAns2(id: any)
    {
        responseService.readOneResponseAns2(id)
        .then((responses: any) =>{
            setQuestion2_ans(responses.data.question2_ans);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function showOrHideAns1Opt3()
    {
        if (optiondetails1_3 !== "")
        {
            return (
                <tr key="{index}">
                    <th scope="row" className='text-center'>Option 3</th>
                    <td className="text-center" id="option1_3" >{ optiondetails1_3 }</td>
                    <td className="text-center" id="option1_3_count" ></td>
                </tr>
           );
        }
        else { 
            return null;
        }
    }
    function showOrHideAns1Opt4()
    {
        if (optiondetails1_4 !== "")
        {
            return (
                <tr key="{index}">
                    <th scope="row" className='text-center'>Option 4</th>
                    <td className="text-center" id="option1_4" >{ optiondetails1_4 }</td>
                    <td className="text-center" id="option1_4_count" ></td>
                </tr>
           );
        }
        else { 
            return null;
        }
    }

    function showOrHideAns2Opt3()
    {
        if (optiondetails2_3 !== "")
        {
            return (
                <tr key="{index}">
                    <th scope="row" className='text-center'>Option 3</th>
                    <td className="text-center" id="option2_3" >{ optiondetails2_3 }</td>
                    <td className="text-center" id="option2_3_count" ></td>
                </tr>
           );
        }
        else { 
            return null;
        }
    }
    function showOrHideAns2Opt4()
    {
        if (optiondetails2_4 !== "")
        {
            return (
                <tr key="{index}">
                    <th scope="row" className='text-center'>Option 4</th>
                    <td className="text-center" id="option2_4" >{ optiondetails2_4 }</td>
                    <td className="text-center" id="option2_4_count" ></td>
                </tr>
           );
        }
        else { 
            return null;
        }
    }

        return (
            <div className="container">
                <h1>Survey's Name - { name } </h1>
                <hr />
                <div className="row">
                <div className="col">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'></th>
                                <th scope="col" className="text-center">{ question1 }</th>
                                <th scope="col" className="text-center">Count</th>
                            </tr>
                        </thead>
                        <tbody id="surveyList">
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 1</th>
                                    <td className="text-center" id="option1_1" >{ optiondetails1_1 }</td>
                                    <td className="text-center" id="option1_1_count" ></td>
                                </tr>
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 2</th>
                                    <td className="text-center" id="option1_2" >{ optiondetails1_2 }</td>
                                    <td className="text-center" id="option1_2_count" ></td>
                                </tr>
                                { showOrHideAns1Opt3() }
                                { showOrHideAns1Opt4() }
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <div className="row">
                <div className="col">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'></th>
                                <th scope="col" className="text-center">{ question2 }</th>
                                <th scope="col" className="text-center">Count</th>
                            </tr>
                        </thead>
                        <tbody id="surveyList">
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 1</th>
                                    <td className="text-center" id="option2_1" >{ optiondetails2_1 }</td>
                                    <td className="text-center" id="option2_1_count" ></td>
                                </tr>
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 2</th>
                                    <td className="text-center" id="option2_2" >{ optiondetails2_2 }</td>
                                    <td className="text-center" id="option2_2_count" ></td>
                                </tr>
                                { showOrHideAns2Opt3() }
                                { showOrHideAns2Opt4() }
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <div className="text-end mt-2">
                    <Link to= {"/survey"} className="link"><button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                        <i className="fas fa-undo"></i> Back</button></Link>
                    </div>
                </div>
                
        )
}

export default Response;

