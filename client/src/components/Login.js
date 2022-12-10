import React, { useState, useEffect } from "react";

function Login({user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    })
    
  }

  // useEffect(() =>{
  //   const data = localStorage.getItem("session");
  //   if (data){
  //     setUser(JSON.stringify(data));
  //   }
  // }, [setUser])
  
  // useEffect(() =>{
  //   localStorage.setItem("session",JSON.stringify(user))
  // }, [user]);

  return (
    <div className="body-form">
      <div className="container">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
