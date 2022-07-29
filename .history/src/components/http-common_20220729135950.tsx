import axios from 'axios';
export default axios.create({
    baseURL: "http://localhost:3500/api",
    // baseURL: "http://herokuapp.com/api"
    headers: {
        "Content-type": "application/json"
    }
});