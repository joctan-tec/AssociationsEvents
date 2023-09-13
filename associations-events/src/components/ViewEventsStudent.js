import React, { useState } from "react";
import '../App.css';
import NavigationVar from './NavigationVar.js';
import Calendar from "./Calendar"
export default function ViewEventsStudent() {

    const today = new Date();
    const [selectedDate, setSelectedDate] = useState([today.getDate(),today.getMonth()+1,today.getFullYear()]);
  // Esta función se usará como controlador para recibir el cambio de fecha desde el componente Calendar
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    

    return (
        <div>
            <NavigationVar back="/"/>
            <div className="container-all">
            
            <h1 className="events-header">Eventos</h1>
            
                <div className="container-events">
                    

                    <div className="square-events">
                    <Calendar onDateChange={handleDateChange}/>
                    </div>

                    <div className="square-events">
                    <Calendar />
                    </div>

                    
                   
                    
                </div>
                
            </div>
        
        </div>
        
    )
}
