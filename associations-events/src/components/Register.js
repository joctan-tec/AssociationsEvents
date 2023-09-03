import React, { useState, useEffect } from "react";
import '../App.css';
import NavigationVar from './NavigationVar';


export default function Register() {
    



    return (
        <div>
        <NavigationVar back="/"/>
        <div className="container-h1">
            <h1 className="header-register">Ingrese sus datos</h1>
        </div>
        <div className='screen-view'>
            <div className="container-form-register-select-account">
                <form id="form-register-select-account">
                    <label htmlFor='accountType' className="label-register">Tipo de cuenta</label>
                    <select id="accountType">
                        <option className="options-register" value="null">Seleccione el tipo de cuenta:  </option>
                        <option className="options-register" value="Estudiante">Estudiante</option>
                        <option className="options-register" value="Asociación">Asociación</option>
                    </select>
                </form>
            </div>
            
            
            
        
        </div>
        </div>
        
    )
}