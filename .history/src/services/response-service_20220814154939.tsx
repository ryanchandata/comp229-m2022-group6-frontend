import http from '../components/http-common';
import IResponseData from "../models/Response";
import ISurveyData from '../models/Survey';

class ResponseService
{
    readOne(id: any)
    {
        return http.get<ISurveyData>(`/answer/${id}`);
    }
    
    update(data: IResponseData, id: any)
    {
        return http.post<IResponseData>(`/answer/${id}`, data);
    }

    readOneResponse(id: any)
    {
        return http.get<IResponseData>(`/response/${id}`);
    }

    readAllResponse()
    {
        return http.get<Array<IResponseData>>("/response");
    }
}

export default new ResponseService();