import React from 'react';
import { useAuthentication } from '../auth';
import { Navigate } from 'react-router-dom';


// this will help to redirect backe to home when we try to access login or register even after getting  authorized.

const ProtectedRoute = ({children})=>{

    const {isAuthorized} = useAuthentication();

    if (isAuthorized === null) {
        return <div>LOADING...</div>
    }

    if (isAuthorized && 
        window.location.pathname === '/login' || window.location.pathname === '/register'
    ) {
        return <Navigate to={"/"}/>
    }

    return children
}
