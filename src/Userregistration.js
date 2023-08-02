import React, {useEffect, useState}from "react";

const API_URL = "http://localhost:8001/users"

function Userregistration({newusers}){
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching data:', error));
    },[newusers])

    return(
        <>
            <div>
            <h1>User profiles</h1>
            <div id="users">
                {users.map((user) =>(
                    <div key={user.shortId} id="userdetails">
                        <img src={user.photo[0]} alt={user.username}/>
                        <h3>Name: {user.username}</h3>
                        <p>Email: {user.email}</p>
                        {/* <div>{user.bikes.map((bike, index) => (
                        <p key={user.shortID}>{bike}</p>
                        ))}</div> */}
                    </div>
                ))}
                </div>
            </div>
            
        </>
    )
}

export default Userregistration