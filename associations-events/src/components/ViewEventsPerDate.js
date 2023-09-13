import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import Event from "./Event";





export default function EventPerDate() {

    return (
        <div className="calendar-square">
            <div className="header-calendar">
                <h2 id="day-from-calendar">Aquí la fecha</h2>
            </div>
            <div className="line-event"></div>
            <div className="event-list">
                <Event
                    name="Evento1"
                    hour="16:29"
                    location="Cartago"
                />
                </div>
        </div>
    
    )
}