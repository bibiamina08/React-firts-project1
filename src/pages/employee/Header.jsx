import { Moon, Sun } from 'lucide-react'

import React from 'react'


const Header = ({handler , modeCheck}) => {
  return (
    <div className='dark:bg-dark-layer py-2 w-full flex flex-wrap justify-between items-center'>
     <div className=''><h2 className='dark:text-white text-black font-semibold text-xl'>Codex Devware</h2>
     </div>
     <div className='w-[50px] h-[50px] rounded-md p-2 dark:bg-dark-card text-white'>
    {
        modeCheck ?  (  <Moon className='items-center m-auto cursor-pointer' onClick={handler}/>) :
       ( <Sun className='items-center m-auto cursor-pointer' onClick={handler}/>)
    }
     </div>
    </div>
  )
}

export default Header
