import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
    return <Login onLogin={(username, password) => console.log(username, password)} />;
};

export default LoginPage;
