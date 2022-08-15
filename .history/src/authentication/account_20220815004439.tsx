import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthService from '../services/auth-service';
import IUserData from '../models/User';

function Account()
{
    const { id } = useParams();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ DisplayName, setDisplayName ] = useState('');
    const [ FirstName, setFirstName ] = useState('');
    const [ LastName, setLastName ] = useState('');
    const [ EmailAddress, setEmailAddress ] = useState('');
    
    useEffect(() => {
        getUser(id);
        document.title = "Account"
    }, [id]);

    function onChangeUsername(event: ChangeEvent<HTMLInputElement>)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>)
    {
        setPassword(event.target.value);
    }

    function onChangeConfirmPassword(event: ChangeEvent<HTMLInputElement>)
    {
        setConfirmPassword(event.target.value);
    }

    function onChangeFirstName(event: ChangeEvent<HTMLInputElement>)
    {
        setFirstName(event.target.value);
    }

    function onChangeLastName(event: ChangeEvent<HTMLInputElement>)
    {
        setLastName(event.target.value);
    }

    function onChangeEmailAddress(event: ChangeEvent<HTMLInputElement>)
    {
        setEmailAddress(event.target.value);
    }


    function getUser(id: any)
    {
        AuthService.readOne(id)
        .then((response: any) =>{
            setUsername(response.data.users.username);
            setDisplayName(response.data.users.DisplayName);
            setEmailAddress(response.data.users.EmailAddress);
        })
        .catch((e: Error)=>{
            console.log(e);
        });
    }

    function saveAccount(e: any)
    {
        e.preventDefault();
        const data: IUserData = {
            _id: id,
            username: username,
            password: password,
            FirstName: FirstName,
            LastName: LastName,
            EmailAddress: EmailAddress,
        }
            AuthService.update(data, id)
            .then((response: any)=>
            {
                setUsername(response.data.username);
                setPassword(response.data.password);
                setFirstName(response.data.FirstName);
                setLastName(response.data.LastName);
                setEmailAddress(response.data.EmailAddress);
            })
            .catch((e: Error)=>{
                console.log(e);
            });
            window.location.href="/survey";
        }

    return (
        <div className="container">
        <div className="row">
            <div className="offset-md-3 col-md-6 col-sm-12">
                <div className="login" id="contentArea">
                    <h1 className="display-4">{ username }'s Profile</h1>

                    <form onSubmit = { saveAccount } id="saveAccount">
                        <p className="message">* First Name and Last Name cannot be changed</p>

                        <div className="form-group">
                        <div className="row">
                            <p className="lead"><i className="fas fa-user-shield"></i> Personal Information</p>
                            <div className="col-md-6">
                            <input className="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" 
                            value= { DisplayName.split(" ")[0] }
                            onChange = { onChangeFirstName }
                            disabled/>
                            </div>
                            <div className="col-md-6">
                            <input className="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name" 
                            value = { DisplayName.split(" ")[1] }
                            onChange = { onChangeLastName }
                            disabled/>
                            </div>
                        </div>
                        </div>
                        
                        <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                            <input type="email" className="form-control" id="emailAddress" name="emailAddress" required
                            value= { EmailAddress }
                            onChange = { onChangeEmailAddress }
                            placeholder="Email"/>
                            </div>
                        </div>
                        </div>

                        <div className="form-group mt-4">
                        <div className="row">
                            <p className="lead"><i className="fas fa-database"></i> System Identification</p>
                            <div className="col-md-12">
                            <input type="text" className="form-control" id="username" name="username"  required
                            value= { username }
                            onChange = { onChangeUsername }
                            placeholder="Username"/>
                            </div>
                        </div>
                        </div>

                        <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                            <input type="password" className="form-control" id="password" name="password"  required
                            value= { password }
                            onChange = { onChangePassword }
                            placeholder="New Password"/>
                            </div>
                        </div>
                        </div>
                            
                        {/* TODO: Need to Validate that passwords are the same */}    
                        <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"  required
                            value= { confirmPassword }
                            onChange = { onChangeConfirmPassword }
                            placeholder="Confirm Password"/>
                            </div>
                        </div>
                        </div>
                                                            
                        <div className="text-end mt-2">
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg">
                            <i className="fas fa-user-plus"></i> Save Changes</button>
                        <Link to= {"/home"} className="link"><button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button></Link>
                        </div>
                    </form>
                    
                </div>

            </div>
        </div>
        </div>
    );
}

export default Account;

