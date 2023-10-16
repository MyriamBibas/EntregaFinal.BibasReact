import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>CoffeShop</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/productos">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/Tortas y Budines">Tortas y Budines</Link></li>
            <li><Link className="menu-link" to="/productos/Licuados">Licuados</Link></li>
            <li><Link className="menu-link" to="/productos/Cafes">Cafes</Link></li>
            <li><Link className="menu-link" to="/productos/Sandwich">Sandwich</Link></li>
            <li><Link className="menu-link" to="/productos/Brunch">Brunch</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar