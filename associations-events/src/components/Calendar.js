import React, { useState, useEffect, useRef } from "react";
import '../App.css';
import backArrow from '../assets/back-arrow.png';
import nextArrow from '../assets/next-arrow.png';


function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return true; // Es bisiesto
    } else {
        return false; // No es bisiesto
    }
};

export default function Calendar() {
    const containerRef = useRef(null);
    const [currentDate,onChange] = useState(new Date("2023-09-23"));
    const rows = 6;
    const columns = 7;
    const year = currentDate.getFullYear();

    const months = {
        0: ["Enero", 31, 11, 1],
        1: ["Febrero", esBisiesto(year) ? 29 : 28, 0, 2],
        2: ["Marzo", 31, 1, 3],
        3: ["Abril", 30, 2, 4],
        4: ["Mayo", 31, 3, 5],
        5: ["Junio", 30, 4, 6],
        6: ["Julio", 31, 5, 7],
        7: ["Agosto", 31, 6, 8],
        8: ["Septiembre", 30, 7, 9],
        9: ["Octubre", 31, 8, 10],
        10: ["Noviembre", 30, 9, 11],
        11: ["Diciembre", 31, 10, 0]
    };
    const primerDiaDeLaSemana = new Date(year,currentDate.getMonth(), 0).getDay();
    console.log("first",primerDiaDeLaSemana);
    const daysOfweek = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"]
    

    useEffect(() => {
        // Crear el HTML dinámico
        let dynamicHTML = '';
        let isDone = false;
        let count = 1;
        let limit = months[currentDate.getMonth()][1];
        for (let i = 0; i < rows; i++) {
            dynamicHTML += '<div class="days-line">';
            for (let j = 0; j < columns; j++) {
                if (count <= limit) {
                    if (primerDiaDeLaSemana === j || isDone) {
                        dynamicHTML += '<div class="days-number"> <span>' + count + '</span></div>';
                        count += 1;
                        isDone = true;
                    }else{
                        dynamicHTML += '<div class="days-number"><span></span></div>';
                    }
                }else{
                    dynamicHTML += '<div class="days-number"><span></span></div>';
                }
                
            }
            dynamicHTML += '</div>';
        }
        
        // Insertar el HTML en el contenedor usando la propiedad innerHTML
        if (containerRef.current) {
            containerRef.current.innerHTML = dynamicHTML;
            dynamicHTML = '';
        }
    }, []);
    
    
    
    
    
    

    return (
        <div className="calendar-square">
            <div className="header-calendar">
                <h2 id="month-year">{months[currentDate.getMonth()][0] + " " + year}</h2>
                <div className="buttons-header-calendar">
                    <div className="arrows-container-calendar">
                        <div id="back-arrow">
                            <img src={backArrow}/>
                        </div>
                    </div>

                    <div className="arrows-container-calendar">
                        <div id="next-arrow">
                            <img src={nextArrow}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="short-days-line">

                <div className="days-short">
                    <span>{daysOfweek[0]}</span>
                </div>

                <div className="days-short">
                    <span>{daysOfweek[1]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[2]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[3]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[4]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[5]}</span>
                </div>

                <div className="days-short">
                <span>{daysOfweek[6]}</span>
                </div>

            </div>
            
            <div className="line-calendar"></div>
            
            <div ref={containerRef} className="containerDays">
            </div>

            

           

                
           


        
        </div>
        
    )
}



