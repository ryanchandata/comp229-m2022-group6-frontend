import http from '../components/http-common';

class SurveyService
{
    public add(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('add', { name, responses, title, optionType, details });
    }

    public edit(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('edit', { name, responses, title, optionType, details });
    }
}

export default new SurveyService();