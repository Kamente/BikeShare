import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(){
    return (
        <div>
            <h2>Navigation bar</h2>
            <ul>
                <li><NavLink  to="/dashboard" >Dashboard</NavLink></li>
                <li><NavLink  to="/preference" >Preference</NavLink></li>
                <li><NavLink  to="/login" >Login</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation