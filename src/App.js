import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './Components/Authenticationpage';
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
        <Routes>
          <Route path='/login' element= {<AuthenticationPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

