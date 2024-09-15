import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-[18%] h-[800px] bg-[#270E5F] ">
<div className='flex justify-center items-center'>
<h2 className='text-2xl px-4 pt-4 font-bold font-serif text-white'>Cleverwise</h2>
</div>
  {/* img */}
  <div className='flex justify-center items-center py-4'>
    <img className="w-[70px] h-[70px] object-cover rounded-full" src="src/imgs/img.jpg" alt="error" />
  </div>
  {/* intro */}
  <div className='flex justify-center items-center flex-col py-4'>
    <h4 className='text-white font-light '>Emily Jhonson</h4>
    <p className='text-white opacity-20'>emily-jhonson@gmail.com</p>
  </div>
  {/* content */}
  <div className='flex flex-col justify-center items-center space-y-5'>
    <p className='text-white'>Dashboard</p>
  <p className='text-white'>Vacancies</p>
  <p className="text-white">Applicant</p>
  <p className="text-white">Employee</p>
  </div>
  <div className='flex flex-col justify-center items-center py-5'>
    <button className='bg-[#AFFFB6] w-[170px] rounded-2xl p-1 text-black font-semibold'>Payroll</button>
  </div>
    </div>
  )
}

export default Sidebar
