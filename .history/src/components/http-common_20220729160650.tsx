import axios from 'axios';
export default axios.create({
    baseURL: "http://localhost:3000/api",
    // baseURL: "http://localhost:3500/api"
    // baseURL: "https://comp229-m2022-group6-backend.herokuapp.com/api"
    headers: {
        "Content-type": "application/json"
    }
});