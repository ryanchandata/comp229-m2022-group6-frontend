import { render } from '@testing-library/react';
import { Link } from 'react-router-dom';


function Survey(this: any)
{   
    document.title = "My Surveys";

    const handleDisplay = () => {
        let databody = 
        {
            "name": this.state.nameIn,
            "dateCreated": this.state.dateCreatedIn,

        }

        return fetch ("https://comp229-m2022-project-group6.herokuapp.com/api/survey", {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then (res => res.json())
        .then(data => console.log(data));
    }

        render(){
            return (
            <div className="container">
                <h1>My Surveys</h1>
                <hr />
                <Link to="/add" >
                    <button className="btn btn-primary">Create Survey</button>
                </Link>
                <br /><br />
                <div className="table-responsive">
                    <table onProgress={ this.handleDisplay } className="table table-bordered table-striped table-hover">
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
                            <td className="text-center"> { this.nameIn } </td>
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
            )
            
        }
}

export default Survey;