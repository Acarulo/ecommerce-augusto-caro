import React from "react";
import "./styles.css";

const Navbar = () => {
    return (
        <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#paintings">Pinturas</a></li>
            <li><a href="#sculptures">Esculturas</a></li>
            <li><a href="#jewelry">Joyería</a></li>
            <li><a href="#miscelaneous">Miscelaneos</a></li>
            <li class="about"><a href="#about">Sobre nosotros</a></li>
        </ul>
    )
}

export default Navbar;