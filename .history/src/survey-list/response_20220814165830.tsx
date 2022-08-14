import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import responseService from '../services/response-service';
import surveyService from '../services/survey-service';
import IResponseData from '../models/Response';

ChartJs.register(
   CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
    //const [ question1_ans, setQuestion1_ans ] = useState('');
    //const [ question2_ans, setQuestion2_ans ] = useState('');
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

    function getResponse(id: any)
    {
        responseService.readOneResponse(id)
        .then((responses: any) =>{
            //setQuestion1_ans(responses.data.question1_ans);
            //setQuestion2_ans(responses.data.question2_ans);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
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
                                <th scope="col" className="text-center">{ question2 }</th>
                            </tr>
                        </thead>
                        <tbody id="surveyList">
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 1</th>
                                    <td className="text-center" id="activeDate" >{ optiondetails1_1 }</td>
                                    <td className="text-center" id="expireDate" >{ optiondetails2_1 }</td>
                                </tr>
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 2</th>
                                    <td className="text-center" id="activeDate" >{ optiondetails1_2 }</td>
                                    <td className="text-center" id="expireDate" >{ optiondetails2_2 }</td>
                                </tr>
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 3</th>
                                    <td className="text-center" id="activeDate" >{ optiondetails1_3 }</td>
                                    <td className="text-center" id="expireDate" >{ optiondetails2_3 }</td>
                                </tr>
                                <tr key="{index}">
                                    <th scope="row" className='text-center'>Option 4</th>
                                    <td className="text-center" id="activeDate" >{ optiondetails1_4 }</td>
                                    <td className="text-center" id="expireDate" >{ optiondetails2_4 }</td>
                                </tr>
                        </tbody>
                    </table>
                    </div>
                
                    </div>
                </div>
        )
}

export default Response;

