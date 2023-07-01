import { useState } from "react"
import NavLink from "./Navlink"

const Navbar = () => {
    const [user, setUser] = useState({
        name: 'bob'
    })
    const logout = () => {
        setUser(null)
    }
  return (
    <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLink user={user} logout={logout}/>
    </nav>
  )
}
export default Navbar