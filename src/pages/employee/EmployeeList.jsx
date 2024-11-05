import React, { useState } from 'react';
import EmployeeListData from "../../utils/data";
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase';

const EmployeeList =() => {
  const [data , setData] = useState(EmployeeListData);
  const [searchDept , setSearchDept] = useState("");
   
  const dataCheck = async() => {
  try {
      const employeeRef = collection(db , "employees");
  const querySnapshot = await getDocs(employeeRef);
   const employees = querySnapshot.docs.map( (employee)  => employee.data ());
   console.log(employees);
    setData(employees)
  } catch (error) {
    console.error("Error fetching document : ", error);
    
  }
  // querySnapshot.array.forEach( (employee) => { 
  //   console.log(employee?.data)

  // });
  // }

  dataCheck();
  const searchHandler = (event) =>{
    event.preventDefault();
 let filteredData = EmployeeListData.filter((employeeData) => (employeeData.Position).toLowerCase() == searchDept.toLowerCase());



 if (searchDept == ""){
  setData(EmployeeListData)
 }else {
  setData(filteredData);
 }


  };
  // console.log(searchDept);
  // console.log(data)

let content = data.map((employee, index) =>(
 
    <>
     <tr className=' h-[50px] border-b border-[#3f2d54] ' key={index}>
          <td>{employee.Home}</td>
          <td className='text-center flex justify-center py-2 items-center'>
            <div className='bg-[#DDCBFC]  rounded-2xl p-1 text-black'>
         {employee.Position}
            </div>
          </td>
          <td>{employee.Rate}</td>
          <td>{employee.Period}</td>
          <td>{employee.WorkingHour}</td>
          <td>{employee.Salary}</td>
          <td className='text-center flex justify-center py-3 items-center'>
            <div className='bg-[#9566F2] w-[100px] rounded-xl p-1 text-black'>
           {employee.Status}
            </div></td>
        </tr>
    </>

  )
)
   
  return (
    <div className='text-white w-full h-[700px] pt-8'>

      <div className='flex flex-wrap justify-between items-center'>
     <h1 className='text-xl font-bold'>Payroll</h1>

     {/* searchbar */}

     <form onSubmit={searchHandler}>
      <input type="text" placeholder='Search here' 
      // value={searchDept}
      className='py-1 px-2 rounded-md text-black'
      onChange={(event) => setSearchDept (event.target.value)}
     />
     </form>
     </div>

     {/* employee table */}
       <table className='w-full mt-3'>
      <thead className='bg-[#22182D] dark:bg-dark-layer border-b border-[#3f2d54] h-[50px]' >
        <tr className='rounded-md'>
          <th>Home</th>
          <th>Position</th>
          <th>Rate</th>
          <th>Period</th>
          <th>Working hour</th>
          <th>Salery</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className='text-center w-full bg-[#22182D]  dark:bg-dark-card mt-3'>
        {content}
        {/* employee2 */}

        
      </tbody>
     </table>
    </div>
  )
}

export default EmployeeList;

