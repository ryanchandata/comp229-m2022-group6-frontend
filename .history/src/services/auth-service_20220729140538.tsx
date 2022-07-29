import http from '../components/http-common';

class AuthService
{
    public login(username: string, password: string)
    {
        return http.post('/login')
    }
}