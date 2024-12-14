import React, { useState ,useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebase';

const EmployeeList =() => {                      
  const [data , setData] = useState([]);
  const [searchDept , setSearchDept] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const dataCheck = async() => {
  try {
      const employeeRef = collection(db , "employees");
  const querySnapshot = await getDocs(employeeRef);
  console.log(querySnapshot);
   const employees= querySnapshot.docs.map( (employee)  => employee.data ());
    setData(employees)
  } catch (error) {
    console.error("Error fetching document : ", error);
    
  }
}

  useEffect(() => {
    dataCheck();
  }, []);
  const searchHandler= (event) => {
    event.preventDefault();
    
    let filteredData = data.filter(
      (employeeData) =>
        employeeData?.position.toLowerCase() === searchDept.toLowerCase()
    );

    if (searchDept === "") {
      setFilteredData(data);
    } else {
      setFilteredData(filteredData);
    }
  };



let content = filteredData.map((employee, index) =>(
 
    <>
     <tr className=' h-[50px] border-b border-[#3f2d54] ' key={index}>
          <td>{employee.name}</td>
          <td className='text-center flex justify-center py-2 items-center'>
            <div className='bg-[#DDCBFC]  rounded-2xl p-1 text-black'>
         {employee.position}
            </div>
          </td>
          <td>{employee.rate}</td>
          <td>{employee.period}</td>
          <td>{employee.hour}</td>
          <td>{employee.salary}</td>
          <td className='text-center flex justify-center py-3 items-center'>
            <div className='bg-[#9566F2] w-[100px] rounded-xl p-1 text-black'>
           {employee.status}
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
      value={searchDept}
      className='py-1 px-2 rounded-md text-black'
      onChange={(event) => setSearchDept (event.target.value)}
     />
     </form>
     </div>

     {/* employee table */}
       <table className='w-full mt-3'>
      <thead className='bg-[#22182D] dark:bg-dark-layer border-b border-[#3f2d54] h-[50px]' >
        <tr className='rounded-md'>
          <th>Name</th>
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

