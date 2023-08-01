import  React from 'react'
import ReactDOM from'react-dom'
import './/NavBar.css'
import Evehicle from './Pages/Evehicle'

function NavBar() {
    return(
        <nav className="nav">
            <h1>Roll <span>Motion</span></h1>
            <ul className="nav-links">
                <li>
                 <a href="/">Home</a>
                 </li>  
                 <li>  
                 <a href="/about us">About us </a> 
                 </li>   
                 <li> 
                 <a href="/e-vehicles">e-Vehicles</a>     
                </li>
            </ul>
            <button class="book">Booking</button>
        </nav>

        
    )
}

export default NavBar

