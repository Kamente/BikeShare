import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './Components/Authenticationpage';
import Navigation from "./Components/Navigation"
import Dashboard from './Components/Dashboard';
import Preference from './Components/Preference';
import Signin from './Components/Signin';



function App() {
  const[token, setToken] = useState();

  if (!token){
    return <Signin setToken ={setToken}/>
  }

  return (
    <div className="App">
      <h2>Bikeshare</h2>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/dashboard' element ={<Dashboard/>}></Route>
          <Route path='/preference' element ={<Preference/>}></Route>
          <Route path='/login' element= {<AuthenticationPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

