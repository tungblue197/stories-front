
class Token {
    constructor(token){ 
        this.token = token;
        if(!!token) localStorage.setItem('token', token);
    }
    setToken = (token) => {
        localStorage.setItem('token', token);
        this.token = token;
    }
    getToken = () => {
        if(!!this.token) return this.token;
        return false;
    }
    static getTokenFromLocal = () => {
        if(localStorage.getItem('token')) return localStorage.getItem('token');
        return false;
    }
    static clearTokenFromLocal = () => {
        localStorage.removeItem('token');
    }
}
export default Token;