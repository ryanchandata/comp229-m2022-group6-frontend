import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
//import ScrollButton from '../components/scrollbutton';
import logo from '../components/team_logo.jpg';
//import homepic1 from 'homepic1.jpg';
//import homepic2 from 'homepic2.jpg';
//import homepic3 from 'homepic3.jpg';
import surveyService from '../services/survey-service';
import ISurveyData from '../models/Survey';

function Home()
{

    const [ surveys, setSurveys ] = useState<Array<ISurveyData>>([]);

    useEffect(()=>{
        readSurveys();
        document.title = "Home Page";
    }, []);

    function readSurveys()
    {
        surveyService.activeSurveyList()
        .then((responses: any) =>{
            setSurveys(responses.data.surveys);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    return(
       <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/6742748/pexels-photo-6742748.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Start your journey here in SurWe !</h3>
                        <p><Link to={"/login"} className="link"><button type="button" className="btn btn-outline-secondary"> Login </button></Link></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Want to know us more?</h3>
                        <p><Link to={"/about"} className="link"><button type="button" className="btn btn-outline-secondary"> About Us </button></Link></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/6457563/pexels-photo-6457563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>We LOVE to know what you are thinking</h3>
                        <p><Link to={"/contact"} className="link"><button type="button" className="btn btn-outline-secondary"> Contact Us </button></Link></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br></br>
            <div className="container">
                <div className="row sps">
                    <div className="col-sm-12 col-lg-2 ">
                        <img src={logo} alt="Logo" height={60} width={70} />
                    </div>
                    <div className="col-sm-12 col-lg-8">
                        <h3>Active Surveys</h3>
                    </div>
                    <div className="col-sm-12 col-lg-2">
                        <img src={logo} alt="Logo" height={60} width={70} />
                    </div>
                </div>
                <br />
                <div className="row">
                <div className="col">
                    <table className="table table-bordered table-striped table-hover justify-content-center">
                        <thead>
                            <tr>
                                <th scope="col" className='text-center'>#</th>
                                <th scope="col" >Survey Name</th>
                                <th scope="col" className="text-center">End Date</th>
                                <th scope="col" className="text-center">Take Survey</th>
                            </tr>
                        </thead>
                        <tbody id="activeSurveyList">
                            {
                                surveys &&
                                surveys.map((survey: ISurveyData, index: number)=>{
                                    return (
                                        <tr key="{index}">
                                            <th scope="row" className='text-center'>{index + 1}</th>
                                            <td>{survey.name}</td>
                                            <td className="text-center" id="expireDate" >{new Date (survey.expirationDate).toDateString()}</td>
                                            <td className="text-center">
                                                <Link to={`/answer/${survey._id}`}>
                                                    <button className="btn btn-primary"><i className="fa-solid fa-pen-to-square fa-lg"></i> Do it now !</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;