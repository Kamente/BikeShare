import React, { useState } from "react";
import Userregistration from "./Userregistration";

function RegistrationForm(){
    const[submittedData, setSubmittedData] = useState([])
    const[username, setUsername] = useState ("")
    const[firstname, setFirstName] = useState("")
    const[lastname, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[image, setImage] = useState("")
    const[address, setAddress] = useState("")


    function handleSubmit(event) {
        event.preventDefault();
        const newUser = {
          username: username,
          firstname: firstname,
          lastname: lastname,
          emailAddress: email,
          imageURL: image,
          address: address,
        };
        
        fetch('http://localhost:8001', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        })
        .then((response) => response.json())
        .then((newUser) => {
          console.log('New user created:', newUser);
          setSubmittedData((prevData) => [...prevData, newUser]);
          setFirstName('');
          setUsername('');
          setLastName('');
          setEmail('');
          setImage('');
          setAddress('');
        })
        .catch((error) => {
          console.error('Error posting data:', error);
        });
    }
    
    return(
        <>
            <form id="registration" onSubmit={handleSubmit}>
                <input type="text" placeholder="username"  onChange={(event) => setUsername(event.target.value)}></input>
                <input type="text" placeholder="first name" onChange={(event) => setFirstName(event.target.value)} ></input>
                <input type="text" placeholder="lastname" onChange={(event) => setLastName(event.target.value)}></input><br></br>
                <input type="text" placeholder="email address" onChange={(event) => setEmail(event.target.value)} ></input>
                <input type="text" placeholder="image url" onChange={(event) => setImage(event.target.value)} ></input>
                <input type="text" placeholder="address" onChange={(event) => setAddress(event.target.value)}></input><br></br>
                <button type="submit">Register new user</button>
            </form>
            <Userregistration newusers = {submittedData}/>
        </>
           
    )
}
export default RegistrationForm



// const newuserArray = [...submittedData, newUser]
        // setSubmittedData(newuserArray)
        // console.log(newUser)
        // console.log(newuserArray)