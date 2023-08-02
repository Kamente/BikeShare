import React from "react";

function RegistrationForm(){
    
    return(
        <>
            <form id="registration">
                <input type="text" placeholder="username"  ></input>
                <input type="text" placeholder="first name" ></input>
                <input type="text" placeholder="lastname"></input><br></br>
                <input type="text" placeholder="email address"></input>
                <input type="text" placeholder="image url"></input>
                <input type="text" placeholder="address"></input><br></br>
                <button type="submit">Register new user</button>
            </form>
        </>
           
    )
}
export default RegistrationForm