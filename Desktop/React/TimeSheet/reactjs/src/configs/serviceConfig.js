import Axios from 'axios';
import store from './storeConfig';
const http = Axios.create({
    baseURL: 'http://localhost:3001'
});

http.interceptors.request.use(config => {
    const token = store.getState().login.token;
    if(!!token && token.getToken()){
        config.headers.common['Authorization'] = token.getToken();
    }
    return config;
}, error => {
    return Promise.reject(error);
});
http.interceptors.response.use(response => {
    return response;
},error => {
    return Promise.reject(error);
})

export default http;