import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route to={'/login'} element={Login}/>
    //   </Routes>
    // </BrowserRouter>
    <><Login/></>
  );
}

export default App;
