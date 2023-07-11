import React from 'react';

import {
    createBrowserRouter,  
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';

import ErrorPage from '../Pages/ErrorPage/ErrorPage';

import AboutUs from '../Pages/AboutUs/AboutUs';
import Domain from '../Pages/Home/Domain/Domain';
import HostingPlans from '../Pages/Home/HostingPlans/HostingPlans';



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"about",
          element: <AboutUs></AboutUs>
        },
        {
          path: "domain",
          element: <Domain></Domain>
        },
        {
          path:"hosting",
          element: <HostingPlans></HostingPlans>
        }
      ]
    },
  ]);
const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;