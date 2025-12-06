import React from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
     const navigate = useNavigate();
    return (


    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      
      <div className="flex-grow flex flex-col items-center justify-center space-y-2">
        
        <h2 className='text-2xl lg:text-5xl text-center font-bold'>Oops, page not found!</h2>
        <p className='text-l text-center'>The page you are looking for is not available.</p>
        <button onClick={()=>navigate(-1)} className='bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white p-2 rounded-[8px] mb-3'>Go Back!</button>
      </div>
      
      <Footer />
    </div>
  );
};



export default ErrorPage;