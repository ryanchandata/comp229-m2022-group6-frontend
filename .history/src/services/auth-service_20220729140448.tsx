import http from '../components/http-common';

class auth-service
{
    public login(username: string, password: string)
    {
        return http.post('/login')
    }
}