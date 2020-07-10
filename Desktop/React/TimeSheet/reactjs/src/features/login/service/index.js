import http from '../../../configs/serviceConfig';

export default {
    login:async (user) => {
        try {
            const res = http.post('/public/auth/login', { body : user });
            return res;
        } catch (error) {
            return error;
        }
    }
}