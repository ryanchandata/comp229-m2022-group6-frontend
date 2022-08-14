import http from '../components/http-common';
import IResponseData from "../models/Response";

class ResponseService
{
    create(data: IResponseData)
    {
        return http.post<IResponseData>("/answer", data);
    }
    
    update(data: IResponseData, id: any)
    {
        return http.post<IResponseData>(`/answer/${id}`, data);
    }
}

export default new ResponseService();