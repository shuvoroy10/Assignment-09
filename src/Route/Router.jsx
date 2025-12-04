import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import ErrorPage from '../Pages/ErrorPage.jsx/ErrorPage';
import Home from '../Pages/Home/Home';
import Service from '../Pages/Service/Service';
import MyProfile from '../Pages/MyProfile/MyProfile';

const Router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        Component: App,
        children:[
            {
                index: true,
                loader: ()=>fetch('ServiceDetails.json'),
                Component: Home
            },
            {
                path: 'service',
                loader: ()=>fetch('ServiceDetails.json'),
                Component: Service
            },
            {
                path: 'my-profile',
                Component: MyProfile
            }
        ]
    }
])

export default Router;