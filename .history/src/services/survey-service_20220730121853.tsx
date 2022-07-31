import http from '../components/http-common';

class SurveyService
{
    public add(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('add', { name, responses, title, optionType, details });
    }

    public get(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('/api/survey', { name, responses, title, optionType, details });
    } 

    public delete(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('/api/survey/:id', { name, responses, title, optionType, details });
    } 
}

export default new SurveyService();