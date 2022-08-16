import React, { useEffect } from 'react';
import '../App.css'
import pic2 from './kl.jpg';
import pic3 from './leung.jpeg';
import pic4 from './tong.jpg';
import bg from './homepic1.jpg';

function About()
{
    useEffect(()=>{
        document.title = "About Us";
    });
    
    return(
        <div className="main-page-section container-fluid">
            <div className="row main-content justify-content-md-center">
                <div className="col-12 ">
                    <div className="row">
                        <div className="col-md-3 col-sm-0"></div>
                        <div className="bg-transbox">
                            <h2 className="heading col-md-6 col-sm-12 ">
                                We bring you with excellent experience on collecting data without any boarder.
                            </h2>
                        </div>
                        <div className="col-md-3 col-sm-0"></div>
                    </div>
                </div>
                <h3>Meet Our Team</h3>
                <div className="row sps">
                    <div className="col-sm-12 col-lg-3">
                        <img src={pic3} alt="" width="300" height="380"></img>
                        <div>
                            <h4>Po Fai Chan</h4>
                            <p>Project Manage</p>
                        </div>
                        </div>
                    <div className="col-sm-12 col-lg-3">
                        <img src={pic2} alt="" width="300" height="380"></img>
                        <div>
                            <h4>Kin Fung Lee</h4>
                            <p>Web Designer</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3">
                        <img src={pic3} alt="" width="300" height="380"></img>
                        <div>
                            <h4>Yuen Ting Leung</h4>
                            <p>Lead Software Engineer</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3">
                         <img src={pic4} alt="" width="300" height="380"></img>
                        <div>
                            <h4>Hiu Tung Tong</h4>
                            <p>UI Programmer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;