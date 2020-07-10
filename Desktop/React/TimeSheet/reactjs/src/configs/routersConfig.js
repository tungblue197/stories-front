import React from 'react';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AppPage from '../pages/AppPage';
const routers = [
    {
        name:'login',
        path:'/',
        title:'Đăng nhập',
        component:(props) => <LoginPage {...props}/>,
        private: false,
        showInMenu: false,
        exact:true
    },
    {
        name:'register',
        path:'/register',
        title:'Đăng ký',
        component: (props) => <RegisterPage {...props}/>,
        private: false,
        showInMenu: false,
        exact:true
    },
    {
        name:'app',
        path:'/app',
        title:'App',
        component: (props) => <AppPage {...props}/>,
        private: true,
        showInMenu: false,
        exact:true
    }
];

export default routers;