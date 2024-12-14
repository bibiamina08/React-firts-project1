import { Moon, Sun } from 'lucide-react'

import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({handler , modeCheck}) => {
  return (
    <div className='dark:bg-dark-layer py-2 w-full flex flex-wrap justify-between items-center '>
     <div>
      <h2 className='dark:text-white text-black font-semibold text-xl ps-6 '>Codex Devware</h2>
     </div>
  
     <div className="">
        <ul className="items-center gap-20 text-black dark:text-white font-medium hidden lg:flex ">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registrationform"> Registrationform</Link>
          </li>
          <li>
            <Link to="/employeelist">EmployeeList</Link>
          </li>
         </ul>
      </div>
     <div className='w-[50px] h-[50px] rounded-md p-4 dark:bg-dark-card text-white'>
    {
        modeCheck ?  (  <Moon className='items-center m-auto cursor-pointer' onClick={handler}/>) :
       ( <Sun className='items-center text-black m-auto cursor-pointer' onClick={handler}/>)
    }
     </div>
    </div>
  )
}

export default Header
