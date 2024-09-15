import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './pages/Sidebar'
import Layout from './pages/Layout'





function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='flex flex-wrap justify-between '>
     <Sidebar/>
    <Layout/>
    
  </div>

  </>
  )
}

export default App
