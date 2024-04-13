import React from 'react';

import Footer from './Footer';
import Header from './Header';


const VerifyEmail = () => {
  


  return (
    <div className='h-screen w-screen bg-gray-100'>
      <Header/>
    <div className="flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 ">Please verify your email...</h1>
        <div className="flex justify-center items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512 " className='w-40 h-40'><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0l57.4-43c23.9-59.8 79.7-103.3 146.3-109.8l13.9-10.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176V384c0 35.3 28.7 64 64 64H360.2C335.1 417.6 320 378.5 320 336c0-5.6 .3-11.1 .8-16.6l-26.4 19.8zM640 336a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 353.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
        </div>
        <p className="text-gray-600 mb-4">
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="text-gray-800 font-medium mb-6">account@refero.design</p>
        <p className="text-gray-600 mb-4">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="text-gray-600 mb-4">
          Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can
          <button className="text-pink-500 hover:text-pink-600 font-medium ml-1">
            resend the confirmation email.
          </button>
        </p>
        <p className="text-gray-600 mb-4">
          Wrong email address?
          <button className="text-pink-500 hover:text-pink-600 font-medium ml-1">
            Change it.
          </button>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  

  );
};

export default VerifyEmail;