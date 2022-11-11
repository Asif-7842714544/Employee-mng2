import axios from "axios";

const Employee_api="http://localhost:8080/api/employees"

class EmployeeService{

    saveEmployee(employee){
         return axios.post(Employee_api,employee)
    }

    getEmployees(){
        return axios.get(Employee_api)
    }

    deleteEmploye(id){
      return axios.delete(Employee_api+"/"+id)
    }

    getEmployeesById(id){
      return axios.get(Employee_api+"/"+id)
    }
    updateEmployee(employee,id){
      return axios.put("http://localhost:8080/api/employees"+"/"+id,employee)
    }
}

export default new EmployeeService();