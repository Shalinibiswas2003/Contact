import React from 'react';
import logo from '../Assets/logo.jpg';

function Navbar() {
  return (
    <div className='flex flex-col lg:flex-row  w-screen lg:w-169 items-start  lg:pl-0 lg:items-center  gap-3 my-3'>
      {/* Logo */}
      <div className="logo mx-4 px-28 sm:mx-0 lg:px-0">
        <img src={logo} alt="Logo" className='h-11'/>
      </div>
      {/* Menu Items */}
      <div className='text-blue-900 flex flex-wrap pl-6 md:pl-3 md:flex-nowrap space-x-7 font-bold'>
        <div>Personal</div>
        <div>Business</div>
        <div>Developer</div>
        <div>Help</div>
      </div>
      {/* Login and Sign Up Buttons */}
      <div className="login flex flex-wrap gap-4  ml-6 sm:ml-24 xl:ml-auto xl:mr-64">
        <button type="button" className='px-6 py-2 border-2 border-blue-900 text-blue-900 font-bold border-solid rounded-full'>Log In</button>
        <button type="button" className='px-6 py-2 border-2 border-blue-900 text-white text-sm bg-blue-900 font-bold border-solid rounded-full'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
