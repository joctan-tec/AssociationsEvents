import React, { useState, useEffect } from "react";
import '../App.css';
import Eye from '../assets/show-password-eye.png';
import NotEye from '../assets/hide-password-eye.png';
import logo2 from '../assets/logo.png';
import NavigationVar from './NavigationVar';


export default function Login() {
    const [stateButtom,changeState] = useState(false);

    const swapPassword = () => {
        changeState(!stateButtom);
    };
    

    return (
        <div>
        <NavigationVar back="/"/>
        <div className='screen-view'>
            <h1>Hola Mundo</h1>
        
        </div>
        </div>
        
    )
}