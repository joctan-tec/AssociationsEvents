import React, { useState, useEffect } from "react";
import '../App.css';
import Eye from '../assets/show-password-eye.png';
import NotEye from '../assets/hide-password-eye.png';
import logo2 from '../assets/logo.png';
import NavigationVar from './NavigationVar';
import { Link } from "react-router-dom";



export default function Login() {
    const [stateButtom,changeState] = useState(false);

    const swapPassword = () => {
        changeState(!stateButtom);
    };
    

    return (
        <div>
        <NavigationVar back="/"/>
        <div className='screen-view'>
            
            <div className='login-div'>
                <div className="content-div">
                    <h1>Gestión de Eventos Estudiantiles</h1>
                    <p className="name-login">Instituto Tecnológico de Costa Rica</p>
                    <form>
                        <input type="email" id="email-input" placeholder="Correo" required />
                        <input type={stateButtom ? "text" : "password"} id="password-input" placeholder="Contraseña" required/>
                        <div className="button-container">
                            <button id="eye-button" type="button" onClick={swapPassword}>
                                <img src={stateButtom ? NotEye: Eye} id="eye-image" alt="Set password visible or not" />
                            </button>
                        </div>
                        <button id="login-button" type="submit">Iniciar Sesión ➔</button>
                    </form>
                    <p class="create-account">¿No tenés una cuenta? <a>
                    <Link to="/register">Registrate aquí</Link></a></p>
                    
                    
                </div>
            </div>
            <div className='main-image'>
            <div className='main-logo'>
                <img src={logo2} alt="Logo"/>
            </div>
            </div>
      </div>
      </div>
        
    )
}
