import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import EmployeeService from '../services/EmployeeService'
import Employee from './Employee'

const EmployeeList = () => {

  const navigate=useNavigate()

  const [loading, setloading] = useState(true)

  const [employees, setemployees] = useState(null)


  useEffect(() => {
   const fetchdata=async ()=>{
    setloading(true)
    try {
        const response=await EmployeeService.getEmployees()
        setemployees(response.data)
    } catch (error) {
        console.log(error)
    }
    setloading(false)
   }
   fetchdata()
  }, [])
  

  const deleteEmployee=(e,id) => {
   e.preventDefault()
   EmployeeService.deleteEmploye(id).then((res) =>{
     if(employees){
        setemployees((prevElement)=>{
         return prevElement.filter((employee)=> employee.id !== id)
        })
     }
   })

  }
  
  return (

<div className="container mx-auto my-8">
    <div className='h-12'>
      <button 
      onClick={()=>navigate("/addEmployee")}
      className='rounded text-white px-6 py-2 font-semibold  bg-fuchsia-600 hover:bg-fuchsia-900 '>
        Add Employee
      </button>
    </div>
    <div className='flex shadow border-b'>
        <table className='min-w-full'>
           
            <thead className='bg-gray-50'>
            <tr>
                <th className='uppercase text-left font-medium text-gray-500 tracking-wider py-3 px-6'>
                    Last Name
                </th>
                <th className='uppercase text-left font-medium text-gray-500 tracking-wider py-3 px-6'>
                    EmailId
                </th>
                <th className='uppercase text-left font-medium text-gray-500 tracking-wider py-3 px-6'>
                    first Name
                </th>
                <th className='uppercase text-right font-medium text-gray-500 tracking-wider py-3 px-6'>
                    Action
                </th>
            </tr>
            </thead>
            {!loading && (
            <tbody className="bg-white">
                {employees.map((employee) =>(
                 <Employee employee={employee} deleteEmploye={deleteEmployee}  key={employee.id}></Employee>
                ))}
            </tbody>
            )}
        </table>
    </div>
</div>
  )
}

export default EmployeeList
