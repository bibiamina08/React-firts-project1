import React from 'react'
import { Link } from 'react-router-dom' 
import { FaUsers } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen bg-[#270E5F] dark:bg-dark-sidebar pt-10">
<div className='flex justify-center items-center'>
<h2 className='text-2xl px-4 pt-4 font-bold font-serif text-white'>Cleverwise</h2>
</div>
  {/* img */}
  <div className='flex justify-center items-center py-4'>
    <img className="w-[70px] h-[70px] object-cover rounded-full" src="img.jpg" alt="error" />
  </div>
  {/* intro */}
  <div className='flex justify-center items-center flex-col py-4'>
    <h4 className='text-white font-light '>Emily Jhonson</h4>
    <p className='text-white opacity-20'>emily-jhonson@gmail.com</p>
  </div>
  {/* content */}
  <div className=''>
<ul className='flex flex-col justify-center items-center space-y-5 font-medium text-white'>
<li>
            <Link to="/" className="flex flex-row items-center justify-center gap-2"> <FaHome className='size-5' />Home</Link>
          </li>
          <li>
            <Link to="/registrationform" className="flex flex-row items-center justify-center gap-2"> <FaWpforms className="size-5" /> Registrationform</Link>
          </li>
          <li >
            <Link to="/employeelist" className="flex flex-row items-center justify-center gap-2"><FaUsers className='size-5' /> EmployeeList</Link>
          </li>
</ul>
  </div>
  <div className='flex flex-col justify-center items-center py-2'>
    <button className='bg-[#AFFFB6] w-[170px] rounded-2xl p-1 text-black font-semibold'>Payroll</button>
  </div>
    </div>
  )
}

export default Sidebar
