import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    // Implement your logic to handle the next step
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="/" className="text-pink-500 font-bold text-lg">
            Dribbble
          </a>
          <ul className="hidden md:flex ml-10 space-x-4">
            <li>
              <a href="/inspiration" className="text-gray-600 hover:text-gray-800">
                Inspiration
              </a>
            </li>
            <li>
              <a href="/find-work" className="text-gray-600 hover:text-gray-800">
                Find Work
              </a>
            </li>
            <li>
              <a href="/learn-design" className="text-gray-600 hover:text-gray-800">
                Learn Design
              </a>
            </li>
            <li>
              <a href="/go-pro" className="text-gray-600 hover:text-gray-800">
                Go Pro
              </a>
            </li>
            <li>
              <a href="/hire-designers" className="text-gray-600 hover:text-gray-800">
                Hire Designers
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-search"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-comments"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-user-circle"></i>
          </a>
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
          onClick={handleNextClick}
          >
            Upload
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;