import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
    const {user}=useAuth()
    return (
        <div className='pt-20'>
              <Helmet>
                <title>Light & Shadow | Profile</title>
            </Helmet>
            <h2 className='text-4xl mb-6 font-poppins  font-semibold text-center'>Welcome, {user?.displayName} </h2>
            <div className='flex flex-col items-center'>
                <img src={user?.photoURL} className='w-[300px] h-[200px] rounded border-4 border-cyan-800' alt="" />
           <div className='text-center'>
           <p className='text-2xl mt-6 mb-2'>Profile Information</p>
            <p className='text-lg'>Name: {user?.displayName}</p>
            <p className='text-lg'>Email: {user?.email}</p>
            <p className='text-lg my-2'>Email Verified: {user?.emailVerified ? "Yes":"No"}</p>
           </div>
            </div>
        </div>
    );
};

export default Profile;