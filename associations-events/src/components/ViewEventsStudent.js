import React, { useState } from "react";
import '../App.css';
import NavigationVar from './NavigationVar.js';
import Calendar from "./Calendar"
export default function ViewEventsStudent() {


    return (
        <div>
            <NavigationVar back="/"/>
            <div className="container-all">
            
            <h1 className="events-header">Eventos</h1>
            
                <div className="container-events">
                    

                    <div className="square-events">
                    <Calendar />
                    </div>

                    <div className="square-events">
                    <Calendar />
                    </div>

                   
                    
                </div>
                
            </div>
        
        </div>
        
    )
}
