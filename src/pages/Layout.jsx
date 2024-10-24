import { useState , useEffect } from 'react'
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom'
import Header from './employee/Header';




const Layout = () => {
  const [mode ,setMode] = useState(false);
   const saveDarkMode = localStorage.getItem("darkMode");
  useEffect(() =>{
    if (saveDarkMode !== null) {
      setMode(JSON.parse(saveDarkMode));
     }
  }, [])
   const handlerMode = () =>{
    setMode(!mode)
    localStorage.setItem("darkMode" , JSON.stringify(!mode));
  }
 
  return (
    <div className={`flex flex-wrap justify-start ${mode && "dark"} dark:bg-dark-container`}>
       <Sidebar/>

      <div className='w-[80%]'>
        <Header handler={handlerMode} modeCheck={mode}/>
        
        <Outlet/></div>
     
    </div>
   
  )
}

export default Layout
