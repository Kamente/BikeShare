import React from "react";

function Signin() {
  return (
    <div id="signin">
        <form id="login">
          <h1 id="title">Login</h1>
            <input type="text"  placeholder="Username or email" /><br></br>
            <input type="password"  placeholder="Password" /><br></br>
          <button  type="submit">Login</button>
        </form>
        </div>
  );
}

export default Signin;
