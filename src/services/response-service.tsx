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

    readOneResponse(id: any)
    {
        return http.get<IResponseData>(`/responseAddPage/${id}`);
    }

    readAllResponse()
    {
        return http.get<Array<IResponseData>>("/responseAddPage");
    }
}

export default new ResponseService();