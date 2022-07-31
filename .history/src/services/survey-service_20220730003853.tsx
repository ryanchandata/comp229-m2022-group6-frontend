import http from '../components/http-common';

class SurveyService
{
    public add(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('add', { name, responses, title, optionType, details });
    }

    public get(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('survey', { name, responses, title, optionType, details });
    } 
}

export default new SurveyService();