import React from 'react';
import { useNavigate } from 'react-router-dom';

const DribbbleOnboardingComponent = () => {

const navigate = useNavigate();

const handleNextClick = () => {
  // Implement your logic to handle the next step
  
  navigate("/VerifyEmail");
};

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-screen-lg">
        <h1 className="text-3xl font-bold mb-6">What brings you to Dribbble?</h1>
        <p className="text-gray-500 mb-10">
          Select the options that best describe you. Don't worry, you can explore other options later.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-6 text-center justify-between">
            <div className="mb-4">
              <img src='./img/designer.png' alt=''/>
            </div>
            <h3 className="text-lg font-medium mb-2">
              I'm a designer looking to share my work
            </h3>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 checked:text-pink-500" name="option" value="designer" />
              <span className="ml-2 text-gray-700">Select</span>
            </label>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center justify-between">
            <div className="mb-4">
              <img src='./img/hired.png' alt=''/>
            </div>
            <h3 className="text-lg font-medium mb-2">
              I'm looking to hire a designer
            </h3>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-5 w-5 " name="option" value="hire" />
              <span className="ml-2 text-gray-700">Select</span>
            </label>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center">
            <div className="mb-4">
              <img src='./img/insperation.jpeg' alt=''/>
            </div>
            <h3 className="text-lg font-medium mb-2">
              I'm looking for design inspiration
            </h3>
            <label className="inline-flex items-center cursor-pointer">
              <input type="radio" className="form-radio h-6 w-6 checked:bg-pink-600 text-pink-500" name="option" value="inspiration" />
              <span className="ml-2 text-gray-700">Select</span>
            </label>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          onClick={handleNextClick}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default DribbbleOnboardingComponent;