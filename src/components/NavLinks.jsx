import { NavLink } from "react-router-dom";


export default function NavLinks(){
    return(
            <ul>
                <li>
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/profile"style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/profile/1"style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>Profile/1</NavLink>
                </li> 
                <li>
                    <NavLink to="/about"style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })} >About</NavLink>
                </li>
                <li>
                    <NavLink to="/about?name=mark"style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })} >About?name=mark</NavLink>
                </li>
            </ul>
    )
}