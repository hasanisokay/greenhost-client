import React from 'react';

import {
    createBrowserRouter,  
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Classes from '../Pages/Classes/Classes';
import Instructors from '../Pages/Instructors/Instructors';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Profile from '../Pages/Profile/Profile';
import SingleInstructor from '../Pages/Instructors/SingleInstructor';
import AdminRoute from './AdminRoute';
import AdminDashboard from '../Dashboards/AdminDashboard';
import InstractorRoute from './InstractorRoute';
import InstructorDashboard from '../Dashboards/InstructorDashboard';
import PrivateRoute from './PrivateRoute';
import StudentDashboard from '../Dashboards/StudentDashboard';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Payment from '../Pages/Payment/Payment';


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