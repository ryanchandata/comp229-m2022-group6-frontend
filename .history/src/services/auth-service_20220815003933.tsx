import http from '../components/http-common';
import IUserData from '../models/User';
import AuthHeader from './auth-header';

class AuthService
{
    public login(username: string, password: string)
    {
        return http.post('/login', {username, password})
        .then(response => {
            if(response.data.token)
            {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    public logout()
    {
        localStorage.removeItem("user");
    }

    public register(username: string, password: string, firstName: string, lastName: string, emailAddress: string)
    {
        return http.post('register', { username, password, firstName, lastName, emailAddress });
    }
     
    getCurrentUser()
    {
        const userString = localStorage.getItem("user") as string;
        if (userString)
        {
            return JSON.parse(userString);
        }
        return false;
    }

    update(data: IUserData, id: any)
    {
        return http.post<IUserData>(`/userEdit/${id}`, data, AuthHeader());
    }

    readOne(id: any)
    {
        return http.get<IUserData>(`/userEdit/${id}`, AuthHeader());
    }
}

export default new AuthService();