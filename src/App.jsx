
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import React from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

import Books from './components/Books';
import Profile from './components/Profile';


import Landing from './components/Landing';
import Signup from './components/Signup';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Provider } from 'react-redux';
import {store} from './store/index'
import AddBook from './components/AddBook';
import Borrow from './components/Borrow';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store} >
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Landing/>}></Route>
        <Route path={'/studentLogin'} element={<Login/>}></Route>
        <Route path={'/signup'} element={<Signup/>}></Route>
      
        <Route path={'/dashboard'} element={<ProtectedRoute element={Dashboard} />}>
          <Route path='' element={<Home/>}/>
         
          <Route path='/dashboard/books' element={<Books/>}/>
          <Route path='/dashboard/profile' element={<Profile/>}/>
          <Route path='/dashboard/add_book' element={<AddBook/>}/>
          
          <Route path='/dashboard/borrow' element={<Borrow/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
    </Provider>
    
  );
}

export default App;
