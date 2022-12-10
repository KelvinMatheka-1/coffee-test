import React, { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar';
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import './App.css';

function App() {
   
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  

  if(!user) return <SignUp setUser={setUser} /> 
  


  return (
    <div> 
    <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<SignUp setUser={setUser} />}/>
        <Route path="/checkout" element={ <Checkout />}></Route>
        <Route path="/home" element={ <Home />}></Route>
        <Route path="/signup" element={<SignUp setUser={setUser} />}/>
        <Route path="/login" element={<Login setUser={setUser} />}/>
        
      </Routes>
    </div>
  );
}

export default App;
