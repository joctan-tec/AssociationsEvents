import React from "react";
import '../App.css';


export default function Login() {

    return(
        <div className = 'login-div'>
            <div className="content-div">
                <h1>Gestión de Eventos Estudiantiles</h1>
                <p className="name-login">Instituto Tecnológico de Costa Rica</p>
                <form>
                    <input type="email" id="email-input" placeholder="Escriba su correo institucional"/>
                </form>
            </div>
        </div>        
    )
}