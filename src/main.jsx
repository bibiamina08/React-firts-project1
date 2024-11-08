import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegistrationForm from "./pages///employee///RegistrationForm.jsx";
// import Layout from './pages/Layout.jsx';
import EmployeeList from "./pages///employee///EmployeeList.jsx";
import NotFound from "./pages///NotFound.jsx"
import App from './App.jsx';



const router = createBrowserRouter([
{
  path : "/",
  element : <App/>,
  errorElement : <NotFound />,
  children : [
    {
      path : "/employeelist",
      element : <EmployeeList />,
    },
    {
      path : "/registrationform",
      element : <RegistrationForm />
    }
  ]
},

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

   
  </StrictMode>,
)
