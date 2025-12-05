import React, { use } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContex)
const location = useLocation();
// console.log(location)

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to={'/log-in'}></Navigate>
};

export default PrivateRoute;