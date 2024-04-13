import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-gray-800 font-bold mb-4">For designers</h3>
          <ul className="text-gray-600">
            <li className="mb-2"><a href="#">Go Pro!</a></li>
            <li className="mb-2"><a href="#">Explore design work</a></li>
            <li className="mb-2"><a href="#">Design blog</a></li>
            <li className="mb-2"><a href="#">Overtime podcast</a></li>
            <li className="mb-2"><a href="#">Playoffs</a></li>
            <li className="mb-2"><a href="#">Weekly Warm-Up</a></li>
            <li className="mb-2"><a href="#">Refer a Friend</a></li>
            <li className="mb-2"><a href="#">Code of conduct</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-800 font-bold mb-4">Hire designers</h3>
          <ul className="text-gray-600">
            <li className="mb-2"><a href="#">Post a job opening</a></li>
            <li className="mb-2"><a href="#">Post a freelance project</a></li>
            <li className="mb-2"><a href="#">Search for designers</a></li>
            <li className="mb-2"><a href="#">Brands</a></li>
            <li className="mb-2"><a href="#">Advertise with us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-800 font-bold mb-4">Company</h3>
          <ul className="text-gray-600">
            <li className="mb-2"><a href="#">About</a></li>
            <li className="mb-2"><a href="#">Careers</a></li>
            <li className="mb-2"><a href="#">Support</a></li>
            <li className="mb-2"><a href="#">Media kit</a></li>
            <li className="mb-2"><a href="#">Testimonials</a></li>
            <li className="mb-2"><a href="#">API</a></li>
            <li className="mb-2"><a href="#">Terms of service</a></li>
            <li className="mb-2"><a href="#">Privacy policy</a></li>
            <li className="mb-2"><a href="#">Cookie policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-800 font-bold mb-4">Directories</h3>
          <ul className="text-gray-600">
            <li className="mb-2"><a href="#">Design jobs</a></li>
            <li className="mb-2"><a href="#">Designers for hire</a></li>
            <li className="mb-2"><a href="#">Freelance designers for hire</a></li>
            <li className="mb-2"><a href="#">Tags</a></li>
            <li className="mb-2"><a href="#">Places</a></li>
            <li className="mb-2"><a href="#">Design assets</a></li>
            <li className="mb-2"><a href="#">Dribbble Marketplace</a></li>
            <li className="mb-2"><a href="#">Creative Market</a></li>
            <li className="mb-2"><a href="#">Fontspring</a></li>
            <li className="mb-2"><a href="#">Font Squirrel</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 mt-8">
        <p>&copy; 2023 Dribbble. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;