import React from 'react'
import { useNavigate } from 'react-router'

const Employee = ({ employee, deleteEmploye }) => {

  const navigate = useNavigate()

  const editemploy = (e, id) => {
    e.preventDefault()
    navigate('/editEmployee/{id}')
  }

  return (

    <tr >
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.firstName}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.lastName}</div>
      </td>
      <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.emailId}</div>
      </td>
      <td className='text-right font-medium text-sm px-6 py-4 whitespace-nowrap'>
        <a
          onClick={(e, id) => editemploy(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmploye(e, employee.id)}
          className="text-red-600 hover:text-red-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  )
}

export default Employee
