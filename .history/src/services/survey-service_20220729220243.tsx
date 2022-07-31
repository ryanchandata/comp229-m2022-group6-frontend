import http from '../components/http-common';

class SurveyService
{
    public add(name: string, responses: Number, title: string, optionType: string, details: string)
    {
        return http.post('add', { name, responses, title, optionType, details });
    }

    getExistingSurvey()
    {
        const surveyString = localStorage.getItem("survey") as string;
        if (surveyString)
        {
            return JSON.parse(surveyString);
        }
        return false;
    }
    
}

export default new SurveyService();