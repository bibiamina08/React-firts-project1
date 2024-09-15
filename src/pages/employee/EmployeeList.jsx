import React from 'react'

const EmployeeList = () => {
  // dummydata
  const employeeListData = [
    {
        Home: "New York",
        Position: "Software Engineer",
        Rate: 60.0,
        Period: "Monthly",
        WorkingHour: 160,
        Salary: 9600.0,
        Status: "Active"
    },
    {
        Home: "Los Angeles",
        Position: "Graphic Designer",
        Rate: 50.0,
        Period: "Weekly",
        WorkingHour: 35,
        Salary: 1750.0,
        Status: "Active"
    },
    {
        Home: "Chicago",
        Position: "Project Manager",
        Rate: 75.0,
        Period: "Yearly",
        WorkingHour: 2000,
        Salary: 150000.0,
        Status: "Inactive"
    },
    {
        Home: "Houston",
        Position: "Data Analyst",
        Rate: 55.0,
        Period: "Monthly",
        WorkingHour: 160,
        Salary: 8800.0,
        Status: "Active"
    },
    {
        Home: "Miami",
        Position: "HR Specialist",
        Rate: 45.0,
        Period: "Weekly",
        WorkingHour: 40,
        Salary: 1800.0,
        Status: "Active"
    },
    {
        Home: "Seattle",
        Position: "UX Designer",
        Rate: 70.0,
        Period: "Monthly",
        WorkingHour: 160,
        Salary: 11200.0,
        Status: "On Leave"
    },
    {
        Home: "San Francisco",
        Position: "Marketing Manager",
        Rate: 65.0,
        Period: "Yearly",
        WorkingHour: 2000,
        Salary: 130000.0,
        Status: "Active"
    },
    {
        Home: "Boston",
        Position: "Customer Support",
        Rate: 40.0,
        Period: "Weekly",
        WorkingHour: 30,
        Salary: 1200.0,
        Status: "Inactive"
    }
];
let content = employeeListData.map((employee) =>(
    <>
     <tr className=' h-[50px] border-b border-[#3f2d54]'>
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
    <div className='text-white w-full h-[700px] px-8 pt-8'>
     <h1 className='text-xl font-bold'>Payroll</h1>

     {/* employee table */}

     <table className='w-full mt-3'>
      <thead className='bg-[#22182D] border-b border-[#3f2d54] h-[50px]' >
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
      <tbody className='text-center w-full bg-[#22182D] mt-3'>
        {content}
        {/* employee2 */}

        
      </tbody>
     </table>
    </div>
  )
}

export default EmployeeList

