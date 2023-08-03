import React from "react";

function Signup() {

  
  return (
    <div id="signup">
      <h1>Create account</h1>
        <p>Let's get started</p>
      <form>
          <input type="text" placeholder="username" /><br></br>
          <input type="text"  placeholder="email address"/><br></br>
          <input type="password"  placeholder="Create password" /><br></br>
          <input type="password"  placeholder="Confirm password" /><br></br>
        <button  type="submit">Create account</button>
      </form>
    </div>
  );
}

export default Signup;
