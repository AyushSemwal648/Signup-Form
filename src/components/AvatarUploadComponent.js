import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const AvatarUploadComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [avatar, setAvatar] = useState(null);
  const [address, setAddress] = useState("");
  const email = location.state?.email;

  const handleAvatarUpload = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleLocationChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNextClick = () => {
    
    console.log("Avatar:", avatar);
    console.log("Location:", address);
    navigate("/DribbbleOnboardingComponent" , {state: {email}} );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-screen-md h-screen">
        <h1 className="text-3xl font-bold mt-20 mb-4">
          Welcome! Let's create your profile
        </h1>
        <p className="text-gray-500 mb-10">
          Let others get to know you better! You can do these later
        </p>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-8 ">Add an avatar</h2>
          <div className="flex gap-10 justify-start ml-4 mb-10">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full  border-dashed border-2 border-gray-400 rounded-full">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                </div>
              )}
              <label
                htmlFor="avatar"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <input
                  id="avatar"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                />
              </label>
            </div>
            <div className="border-gray-400 relative w-36 h-12 m-4 border rounded-md  overflow-hidden">
              <p className="justigy-center text-center m-2 font-medium text-lg ">
                choose image
              </p>
              <label
                htmlFor="avatar"
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <input
                  id="avatar"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-bold mb-4">Add your location</h2>
          <input
            type="text"
            className="w-full mb-4 mt-4 px-4 py-2 border-b-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a location"
            value={address}
            onChange={handleLocationChange}
          />
        </div>

        <button
          className="w-48 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AvatarUploadComponent;
