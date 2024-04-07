import React from 'react'
import flag from "../Assets/flag.webp"
function Last() {
  return (
    <>
    <div className='flex flex-col lg:flex-row  gap-9 ml-8 border-b-2 border-b-blue-100 mr-8 pb-3 lg:gap-36 w-4/5'>
        <div className= 'flex  text-blue-900 font-bold gap-6 text-sm'>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Help</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Contact</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Fees</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Security</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Apps</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Shops</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Enterprise</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Partner</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Feedback</a>
        </div>
        <img src={flag} alt="" srcset="" className='h-3 w-3 lg:ml-auto mt-2' />
        
      
    </div>
    <div className='flex lg:flex-row ml-8  mr-8 pb-3 lg:gap-36'>
        <div className= 'flex text-blue-900 font-bold gap-6 text-sm'>
        <a href="http://" target="_blank" rel="noopener noreferrer"> About</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Newsroom</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Jobs</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Investor Relations</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Values in action</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Public policy</a>
        <a href="http://" target="_blank" rel="noopener noreferrer"> Site map</a>
        <div className='flex ml-52 gap-5'>
          <p className='text-sm font-medium text-gray-500'> © 1999-2022</p>
          <a href="http://" target="_blank" rel="noopener noreferrer"> Accessibility</a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> Privacy</a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> Cookies</a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> Legal</a>

        </div>
        </div>
        
        
      
    </div>
    
    </>
  )
}

export default Last
