import http from '../components/http-common';

class SurveyService
{
    public add(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('add', { name, responses, title, optionType, details });
    }

    getExistingSurvey()
    {
        const userString = localStorage.getItem("user") as string;
        if (userString)
        {
            return JSON.parse(userString);
        }
        return false;
    }
    
}

export default new SurveyService();