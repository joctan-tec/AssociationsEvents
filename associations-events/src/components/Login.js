import React, { useState, useEffect } from "react";
import '../App.css';
import Eye from '../assets/show-password-eye.png';
import NotEye from '../assets/hide-password-eye.png';
import logo2 from '../assets/logo.png';
import NavigationVar from './NavigationVar';
import { Link, useNavigate } from "react-router-dom";



export default function Login() {
    const [stateButtom,changeState] = useState(false);
    const navigate = useNavigate();
    const swapPassword = () => {
        changeState(!stateButtom);
    };

    const [validated, setValidated] = useState(false);
    

    const handleAccess = (event) => {
        
        
        // Agregar un event listener al botón de envío
        const miForm = event.currentTarget;
        event.preventDefault();

        // Obtener los valores de los campos de entrada
        if(miForm.checkValidity()=== false){
            event.stopPropagation();
            setValidated(true);
        }else{
        
        const email = document.getElementById('email-input').value;
        const password = document.getElementById('password-input').value;


        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "inName": email, "inPassword": password
            }),
        }).then((res)=> res.json())
        .then((data) => {
            console.log(data.access)
            if(data.access == 'Login Exitoso'){
                navigate('/register');
            }else{
                
            }
            
        })

        
        .catch(error => {
            console.log('Error al obtener datos desde el backend:', error);
        })
        }
    }

    
    

    return (
        <div>
        <NavigationVar back="/"/>
        <div className='screen-view'>
            
            <div className='login-div'>
                <div className="content-div">
                    <h1>Gestión de Eventos Estudiantiles</h1>
                    <p className="name-login">Instituto Tecnológico de Costa Rica</p>
                    <form className="login-form" onSubmit={handleAccess}>
                        <input type="text" id="email-input" placeholder="Correo" name="email" required />
                        <div id="emailError" name="password" className="error-message"></div>
                        <input type={stateButtom ? "text" : "password"} id="password-input" placeholder="Contraseña" required/>
                        <div className="button-container">
                            <button id="eye-button" type="button" onClick={swapPassword}>
                                <img src={stateButtom ? NotEye: Eye} id="eye-image" alt="Set password visible or not" />
                            </button>
                        </div>
                        <div id="passwordError" className="error-message"></div>
                        <button id="login-button" type="submit">Iniciar Sesión ➔</button>
                    </form>
                    <p className="create-account">¿No tenés una cuenta? 
                    <Link to="/register">Registrate aquí</Link></p>
                    
                    
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
