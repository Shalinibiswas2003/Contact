import React from 'react';

function Form() {
  return (
    <div className='flex flex-col gap-x-96 xl:flex-row'>
      {/* left side design*/ }
    <div className='mt-16 ml-16 '>
      <h2 className='text-2xl font-medium w-60'>Some Other ways to connect with us</h2>
     <p className='mt-8 font-medium'> Want to speak with sales right away?</p>
      <a href='tel:877-794-7639' className='text-sky-600 font-semibold mt-2'>Call 877-794-7639</a>
      <p   className='mt-8 font-medium'> Need help with your existing account?</p>
      <a href='.' className='text-sky-600 font-semibold mt-2'>Visit our Help center →</a>
      <p className='mt-8 font-medium'> Want helpful business insights?</p>
      <a href='.' className='text-sky-600 font-semibold mt-2'>Visit our Business Resource Center →</a>
    </div>
    {/*form*/ }
    
    <div className=" xl:transform -translate-x-1/3  mt-10 ml-52  xl:-mt-44 right-0 mb-9   bg-white shadow-md p-8 rounded-lg max-w-lg w-full">
      <h2 className="text-left text-2xl font-semibold mb-4">Get Started</h2>
      <p className="text-left mb-4">Tell us a little about your business so we can connect you with the right people.</p>
      <form>
        <div className="mb-4 font-semibold">
          <input type="text" id="firstname" name="firstname" placeholder="First Name*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="text" id="lastname" name="lastname" placeholder="Last Name*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="email" id="email" name="email" placeholder="Work Email*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="tel" id="phone" name="phone" placeholder="Phone Number*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="text" id="company" name="company" placeholder="Company Name*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="url" id="website" name="website" placeholder="Company Website*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
       

        <div class="mb-4 font-semibold relative">
    <select id="country" name="country" className="mt-4 p-3 border rounded-md w-full">
      
       
        <option value="India">India</option>
        <option value="United States of America">United Sates Of America</option>
        <option value="England">England</option>
        <option value="Other">Other</option>
       
        
    </select>
    <div class="absolute top-0 left-0 px-3 pt-4 pointer-events-none text-gray-400 text-sm mb-2" id="placeholder">Country*</div>
</div>

        <div class="mb-4 font-semibold relative">
    <select id="sales" name="sales" className="mt-4 p-3 border rounded-md w-full">
      
        <option value="" selected disabled hidden>Select annual sales</option>
        <option value="India">less than 6Lakh</option>
        <option value="United States of America">6lakh-10lakh</option>
        <option value="England">More than 10lakh</option>
       
        
    </select>
    <div class="absolute top-0 left-0 px-3 pt-4 pointer-events-none text-gray-400 text-sm mb-2" id="placeholder">Estimated Annual Sales*</div>
</div>

<div class="mb-4 font-semibold relative">
    <select id="paypal" name="paypal" className="mt-4 p-3 border rounded-md w-full">
      
        <option value="India">Yes</option>
        <option value="United States of America">No</option>
        
       
        
    </select>
    <div class="absolute top-0 left-0 px-3 pt-4 pointer-events-none text-gray-400 text-sm mb-2" id="placeholder">Do you already have a PayPal Business account?*</div>
</div>

        
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="privacy-policy" name="privacy-policy" className="mr-2" />
          <label htmlFor="privacy-policy" className="text-left text-sm text-gray-700">I have read and accepted the PayPal Privacy Policy</label>
        </div>
        <div className="text-left text-xs mb-4">
          <p>I consent to PayPal contacting me by phone or by email, and to sending me product or industry information relevant to my query. I know I can unsubscribe at any time.</p>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className=" w-72 ml-20 border border-sky-600 text-white bg-sky-600 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-green-800 "
          >
            Submit
          </button>
          <p className="text-xs mx-44 mt-4">*Required Fields</p>
        </div>
      </form>
    </div>
  

    
    </div>
  );
}

export default Form;
