import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted:', { name, username, email, password, termsAccepted });
    navigate("/AvatarUploadComponent", { state: {email}});
  };
  return (
    <div className='w-full h-screen flex flex-auto'>
      <div className='relative w-1/3 h-full flex flex-col'>
        <div className='absolute top-[15%] left-[5%] flex flex-col'>
          <h1 className='font-bold text-[#856115] text-3xl'>Discover the world's top Designers & Creative. </h1>
        </div>
        <img src='./img/Untitled design.png' alt='' className=' w-full h-full object-cover'/>
      </div>
      <div className='w-2/3 h-screen flex flex-col items-center'>
        <h3 className='text-3xl text-black font-bold mb-1 pt-32 pb-10'>Sign up to Dribbble</h3>
        <form onSubmit={handleSubmit} className=" flex  flex-col items-justify space-y-8   pt-10 pb-20">
          <div className='flex w-full gap-8'>
            <div >
            <label htmlFor="name" className="block font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-md px-3 py-2 w-full bg-gray-300"
              placeholder="Enter your name"
              required
            />
            </div>
            <div>
            <label htmlFor="username" className="block font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded-md px-3 py-2 w-full bg-gray-300"
              placeholder="Enter your username"
              required
            />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-md px-3 py-2 w-full bg-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md px-3 py-2 w-full bg-gray-300"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-sm">
              I agree to the Terms of Service, Privacy Policy, and Notification Settings.
            </label>
          </div>
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-md w-full"
          >
            Create Account
          </button>
        </form>
        <div className='w-full flex items-center justify-center'>
          <p className=' text-sm font-normal text-black'>Already a member? <span className='font-semibold underline underline-offset-2 text-blue-500'>Sign In</span></p>
        </div>
      </div>
     
    </div>
  )
}

export default Signup