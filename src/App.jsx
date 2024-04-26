
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/adminLogin'} element={<Login/>}></Route>
        <Route path={'/dashboard'} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
