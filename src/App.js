import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/homepage/Home';


function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" exact Component={Home} />
        <Route path='/Login' Component={Login}/>
        <Route path="/SignUp" Component={Signup} />
      </Routes>
    </ Router>
    
  );
}

export default App;
