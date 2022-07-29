import React, { ChangeEvent, useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
// import AuthService from '../services/auth-service';
import UserModel from '../models/User';

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // alias for useNavigate

    useEffect(()=>{
        document.title = "Login";
    });

    function onChangeUsername(event: ChangeEvent<HTMLInputElement>)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>)
    {
        setPassword(event.target.value);
    }

    function handleLogin(event: any)
    {
        event.preventDefault();

        // Instantiate an object of type User Model
        const UserData: UserModel = {
            username: username,
            password: password,
            FirstName: '',
            LastName: '',
            EmailAddress: ''
        }
        /*
        // use the auth service to perform login
        AuthService.login(UserData.username, UserData.password)
        .then(() => {
            // navigate to the movie-list page
            //TODO: Change this link to "movie-list";
            navigate("/home"); // temporarily link to home page 
            window.location.reload();
        }, error =>{
            // TODO: Needs a replacement for Flash messaging
            window.location.reload();
        });   */
    }
    

    return(
        
    );
}

export default Login;