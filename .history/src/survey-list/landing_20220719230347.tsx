import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Survey()
{
    useEffect(()=>{
        document.title = "My Surveys";
    });
    
    return(
        <div className="container">
            <h1>My Surveys</h1>
            <hr />
            <Link to="/add">
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
                        <tr>
                            <td></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                            <td className="text-center"></td>
                            <td className="text-center">
                                <Link to="/edit/<%= surveys[count]._id %>">
                                    <button className="btn btn-primary"><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                                </Link></td>
                            <td className="text-center">
                                <Link to="/delete/<% surveys[count]._id %>">
                                    <button className="btn btn-primary"><i className="fa-solid fa-circle-minus fa-lg"></i></button>
                                </Link>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Survey;