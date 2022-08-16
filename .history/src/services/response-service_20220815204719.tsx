import http from '../components/http-common';
import IResponseData from "../models/Response";
import ISurveyData from '../models/Survey';

class ResponseService
{
    readOne(id: any)
    {
        return http.get<ISurveyData>(`/responseAddPage/${id}`);
    }
    
    update(data: IResponseData, id: any)
    {
        return http.post<IResponseData>(`/responseAddPage/${id}`, data);
    }

    readOneResponseAns1(id: any)
    {
        return http.get<IResponseData>(`/responseStatAns1/${id}`);
    }

    readOneResponseAns2(id: any)
    {
        return http.get<IResponseData>(`/responseStatAns2/${id}`);
    }

    readAllResponse()
    {
        return http.get<Array<IResponseData>>("/responseAddPage");
    }
}

export default new ResponseService();