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

    update(data: ISurveyData, id: any)
    {
        return http.post<ISurveyData>(`/edit/${id}`, data, AuthHeader());
    }

    delete(id: any)
    {
        return http.get<ISurveyData>(`/delete/${id}`, AuthHeader());
    }
}

export default new SurveyService();

function data<T>(arg0: string, data: any, arg2: { headers: { Authorization: string; }; } | { headers?: undefined; }) {
    throw new Error('Function not implemented.');
}
