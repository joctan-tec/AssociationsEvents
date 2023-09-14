import React, { useState } from "react";
import '../App.css';
import NavigationVar from './NavigationVar';
import Proposals from "./Proposals"
export default function ViewScreenAssociation(props) {





    return (
        <div>
            <NavigationVar back="/"/>
            <div className="container-all">
                <h1 className="events-header">
                    {props.name}
                </h1>

                <h2 className="events-header">
                    Propuestas
                </h2>

                <div className="square-proposals">
                    <Proposals />
                </div>
            </div>
        </div>
        
    )
}