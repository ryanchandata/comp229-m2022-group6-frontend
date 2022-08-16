import http from '../components/http-common';
import ISurveyData from '../models/Survey';
import AuthHeader from './auth-header';

class SurveyService
{
    create(data: ISurveyData)
    {
        return http.post<ISurveyData>("/add", data, AuthHeader());
    }

    readAll()
    {
        return http.get<Array<ISurveyData>>("/survey", AuthHeader());
    }

    readOne(id: any)
    {
        return http.get<ISurveyData>(`/edit/${id}`, AuthHeader());
    }

    readOneAns(id: any)
    {
        return http.get<ISurveyData>(`/edit/${id}`);
    }

    update(data: ISurveyData, id: any)
    {
        return http.post<ISurveyData>(`/edit/${id}`, data, AuthHeader());
    }

    delete(id: any)
    {
        return http.get<ISurveyData>(`/delete/${id}`, AuthHeader());
    }

    activeSurveyList()
    {
        return http.get<Array<ISurveyData>>("/publicSurveyList");
    }

}

export default new SurveyService();