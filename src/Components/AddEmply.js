import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import EmployeeService from '../services/EmployeeService'

const AddEmply = () => {

    const navigate=useNavigate()

const [employee, setemployee] = useState({
    id:"",
    firstName:"",
    lastName:"",
    emailId:""
})

const handleChange=(e)=>{
    const value=e.target.value
    setemployee({...employee,[e.target.name]:value})
}

const saveEmployee = (e)=>{ 
    e.preventDefault()
    EmployeeService.saveEmployee(employee)
    .then((Response)=>{
     navigate("/employeeList")
    })
    .catch((err)=>{
      console.log(err)
    })
}

const reset=(e)=>{
    e.preventDefault()
    setemployee({
        id:"",
        firstName:"",
        lastName:"",
        emailId:""
    })
}

  return (
    <div className="flex shadow mx-auto max-w-2xl border-b">
        <div className='px-8 py-8'>
            <div className="font-thin text-2xl tracking-wider">
                <h1>
                   Add New Employee
                </h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
              <label className='block text-gray-600 text-sm font-normal'>
                firstName
              </label>
              <input
             type="text"
             name='firstName' 
             value={employee.firstName}
             onChange={(e) =>handleChange(e)}
              className='h-10 w-96 border mt-2 px-2 py-2'/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
              <label className='block text-gray-600 text-sm font-normal'>
                lastName
              </label>
              <input 
              type="text"
             name='lastName' 
             value={employee.lastName}
             onChange={(e) =>handleChange(e)}
              className='h-10 w-96 border mt-2 px-2 py-2'/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
              <label className='block text-gray-600 text-sm font-normal'>
                emailId
              </label>
              <input 
              type="Email"
              name='emailId' 
              value={employee.emailId}
              onChange={(e) =>handleChange(e)}
              className='h-10 w-96 border mt-2 px-2 py-2'/>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
            <button 

            onClick={saveEmployee}
            className='rounded text-white font-semibold py-2 px-6 bg-green-500 hover:bg-green-800'>
                Save
            </button>
            <button 
            onClick={reset}
            className='rounded text-white font-semibold py-2 px-6 bg-red-500 hover:bg-red-800'>
                Clear
            </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmply
