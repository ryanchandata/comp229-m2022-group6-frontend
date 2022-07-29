import axios from 'axios';
export default axios.create({
    baseURL: "https://comp229-m2022-group6-backend.herokuapp.com/api",
    // baseURL: "http://localhost:3500/api"
    headers: {
        "Content-type": "application/json"
    }
});