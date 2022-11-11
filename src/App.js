
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddEmply from './Components/AddEmply';
import EmployeeList from './Components/EmployeeList';
import Navbar from './Components/Navbar';
import UpdateEmploy from './Components/UpdateEmploy';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/' element={<EmployeeList />} />
     <Route index    element={<EmployeeList />} /> 
     <Route path='/employeeList' element={<EmployeeList />} /> 
     <Route path='/addEmployee' element={<AddEmply />} /> 
     <Route path='/editEmployee/:id' element={<UpdateEmploy />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
