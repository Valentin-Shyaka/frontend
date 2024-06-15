
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import React from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Employee from './components/Employee';
import Laptop from './components/Laptop';
import Profile from './components/Profile';
import AddLaptop from './components/AddLaptop';
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee';
import EmployeeLogin from './components/EmployeeLogin';
import Landing from './components/Landing';
import Signup from './components/Signup';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import {store} from './store/index'

function App() {
  return (
    <Provider store={store} >
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Landing/>}></Route>
        <Route path={'/adminLogin'} element={<Login/>}></Route>
        <Route path={'/signup'} element={<Signup/>}></Route>
        <Route path={'/employeeLogin'} element={<EmployeeLogin/>}></Route>
        <Route path={'/dashboard'} element={<ProtectedRoute element={Dashboard} />}>
          <Route path='' element={<Home/>}/>
          <Route path='/dashboard/employee' element={<Employee/>}/>
          <Route path='/dashboard/add_employee' element={<AddEmployee/>}/>
          <Route path='/dashboard/laptops' element={<Laptop/>}/>
          <Route path='/dashboard/profile' element={<Profile/>}/>
          <Route path='/dashboard/add_laptop' element={<AddLaptop/>}/>
          <Route path='/dashboard/EditEmployee/:id' element={<EditEmployee/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
    </Provider>
    
  );
}

export default App;
