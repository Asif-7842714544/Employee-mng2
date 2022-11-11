import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import EmployeeService from '../services/EmployeeService';


const UpdateEmploy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeesById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmploye = (e) => {
    e.preventDefault();
    console.log(employee);
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
     return (
        <div className="flex shadow mx-auto max-w-2xl border-b">
        <div className='px-8 py-8'>
            <div className="font-thin text-2xl tracking-wider">
                <h1>
                   Update Employee
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
            onClick={updateEmploye}
            className='rounded text-white font-semibold py-2 px-6 bg-green-500 hover:bg-green-800'>
                Update
            </button>
            <button 
            className='rounded text-white font-semibold py-2 px-6 bg-red-500 hover:bg-red-800'>
                Cancel
            </button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmploy
