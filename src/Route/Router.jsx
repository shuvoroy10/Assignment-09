import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import ErrorPage from '../Pages/ErrorPage.jsx/ErrorPage';
import Home from '../Pages/Home/Home';
import Service from '../Pages/Service/Service';
import MyProfile from '../Pages/MyProfile/MyProfile';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        Component: App,
        children:[
            {
                index: true,
                Component: Home,
                loader: ()=>fetch('/ServiceDetails.json')
            },
            {
                path: 'service',
                Component: Service,
                loader: ()=>fetch('/ServiceDetails.json')
            },
            {
                path: 'my-profile',
                Component: MyProfile
            },
            {
            path: '/service-details/:id',
            Component: ServiceDetails,
            loader: ()=>fetch('/ServiceDetails.json')
        },
        ]
    }
])

export default Router;