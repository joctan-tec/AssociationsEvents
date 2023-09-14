import React, { useState } from "react";
import '../App.css';
import Reminder from "./Reminder";

export default function Reminders() {



    

    return (
        <div className="reminders-container">
            <Reminder 
                tittle = "Titulo generico"
                message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
            />

<Reminder 
                tittle = "Titulo generico"
                message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."
            />


        </div>
        
    )
}