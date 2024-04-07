import React from 'react'

function Lower() {
  return (
    <div className='flex flex-col lg:flex-row mt-16 ml-16 gap-8  py-32'>
        <div className='w-3/6'>
            <h4 className='text-sm text-blue-900 font-bold border-b-2 w-11/12 border-b-blue-100 mb-4'>Small-to-Medium Business</h4>
            <div className='flex gap-48'>
                <div className='flex flex-col gap-2 text-gray-700 font-bold'>
                    <h4 className='text-sm '>Introduction</h4>
                    <h4 className='text-sm ' >getting started</h4>
                </div>
                <div className='flex flex-col gap-2 text-gray-700'>
                    <h4 className='text-sm font-bold'>All solutions</h4>
                    <h4 className='text-sm font-medium' >Accept payments</h4>
                    <h4 className='text-sm font-medium'>Make payments</h4>
                    <h4 className='text-sm font-medium' >Manage Risks</h4>
                    <h4 className='text-sm font-medium'>Accelerate growth</h4>
                    <h4 className='text-sm font-medium' >Streamline operations</h4>

                
               </div>
          

            </div>
       
      
         </div>
         <div className='w-3/6'>
            <h4 className='text-sm text-blue-900 font-bold border-b-2 w-11/12 border-b-blue-100 mb-4'>Enterprise</h4>
            <div className='flex gap-36'>
                <div className='flex flex-col gap-2 text-gray-700 font-bold'>
                    <h4 className='text-sm '>Introduction</h4>
                    <h4 className='text-sm ' >Marketplace and Partners</h4>
                </div>
                <div className='flex flex-col gap-2 text-gray-700'>
                    <h4 className='text-sm font-bold mb-2'>Platforms and solutions</h4>
                    <h4 className='text-sm font-medium' >Accept payments</h4>
                    <h4 className='text-sm font-medium'>Make payments</h4>
                    <h4 className='text-sm font-medium' >Manage Risks</h4>
                    <h4 className='text-sm font-medium'>Accelerate growth</h4>
                    <h4 className='text-sm font-medium' >Streamline operations</h4>

                
               </div>
          

            </div>
       
      
         </div>
         <div className='w-2/5'>
            <h4 className='text-sm text-blue-900 font-bold border-b-2 w-4/12 border-b-blue-100 mb-4'>More</h4>
            <div className='flex gap-36 '>
                <div className='flex flex-col gap-2 text-gray-700 font-bold'>
                    <h4 className='text-sm '>Nonprofits</h4>
                    <h4 className='text-sm ' >Pricing</h4>
                    <h4 className='text-sm ' >Resource Center</h4>
                </div>
                
          

            </div>
       
      
         </div>
    </div>
  )
}

export default Lower
