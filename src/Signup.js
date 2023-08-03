import React, {useState} from "react";

function Signup() {
    const [username, setUsername] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    console.log('content submitted')
  }
  return (
    <div id="signup">
      <h1>Create account</h1>
        <p>Welcome, {username}</p>

      <form>
          <input type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)}/><br></br>
          <input type="text"  placeholder="email address"onChange={(event) => console.log(event.target.value)}/><br></br>
          <input type="password"  placeholder="Create password" onChange={(event) => console.log(event.target.value)}/><br></br>
          <input type="password"  placeholder="Confirm password" onChange={(event) => console.log(event.target.value)}/><br></br>
        <button  type="submit" onClick={handleSubmit}>Create account</button>
      </form>
    </div>
  );
}

export default Signup;
