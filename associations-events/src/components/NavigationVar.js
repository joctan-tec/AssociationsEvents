import React from "react";
import '../App.css';
import logo from '../assets/logo.png';

export default function NavigationVar(params) {

    return(
        <div className = 'nav-var'>
            <div className="img-nav-container">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="container-text-nav">
                <h2 className="nav-title">Gestión de Eventos Estudiantiles</h2>
                <p className="nav-name">Tecnológico de Costa Rica</p>
            </div>
        </div>
    )
}