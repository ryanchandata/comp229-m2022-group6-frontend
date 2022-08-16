import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import IStatistic1 from '../models/Statistic';
import IStatistic2 from '../models/Statistic';
import responseService from '../services/response-service';
import surveyService from '../services/survey-service';

function Response()
{   
    // items for survey
    const [ name, setName ] = useState('');
    const [ question1, setQuestion1 ] = useState('');
    const [ question2, setQuestion2 ] = useState('');
    const { id } = useParams();

    const [ response1, setStat1 ] = useState<Array<IStatistic1>>([]);
    const [ response2, setStat2 ] = useState<Array<IStatistic2>>([]);

    useEffect(()=> {
        getSurvey(id);
        readStatAns1();
        readStatAns2();
        document.title = "Statistic";
    }, [id, readStatAns1, readStatAns2]);

    
    function getSurvey(id: any)
    {
        surveyService.readOne(id)
        .then((response: any) =>{
            setName(response.data.surveys.name);

            setQuestion1(response.data.surveys.question1);
            setQuestion2(response.data.surveys.question2);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function readStatAns1()
    {
        responseService.readOneResponseAns1(id)
        .then((responses: any) =>{
            setStat1(responses.data.response1);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function readStatAns2()
    {
        responseService.readOneResponseAns2(id)
        .then((responses: any) =>{
            setStat2(responses.data.response2);
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
                                <th scope="col" className="text-center">{ question1 }</th>
                                <th scope="col" className="text-center">Count</th>
                            </tr>
                        </thead>
                        
                        <tbody id="surveyList">
                            {   response1 &&
                                response1.map((response1: IStatistic1) => {
                                return(
                                     <tr key="{index}">
                                     <th scope="row" className='text-center'>{response1._id}</th>
                                     <th scope="row" className='text-center'>{Number(response1.count)}</th>
                                     </tr>
                                     );
                            })}
                            </tbody>
                            </table>
                    </div>
                    </div>
                    <div className="row">
                <div className="col">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">{ question2 }</th>
                                <th scope="col" className="text-center">Count</th>
                            </tr>
                        </thead>
                        <tbody id="surveyList">
                            {   response2 &&
                                response2.map((response2: IStatistic2) => {
                                return(
                                     <tr key="{index}">
                                     <th scope="row" className='text-center'>{response2._id}</th>
                                     <th scope="row" className='text-center'>{Number(response2.count)}</th>
                                     </tr>
                                     );
                            })}
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

