import React, { useState } from "react";
import '../App.css';
import Proposal from "./Proposal";
export default function Proposals(props) {





    return (
        <div className="proposal-container">
            <div className="tittles-line">
                <div className="proposal-topic">
                    <h3>Temática</h3>
                </div>

                <div className="proposal-target">
                    <h3>Objetivo</h3>
                </div>

                <div className="proposal-ideas">
                    <h3>Ideas de actividades</h3>
                </div>

                <div className="proposal-approve">
                    <h3>Aprobar</h3>
                </div>
            </div>

            <div className="proposals-lines">
                <Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />

<Proposal 
                    topic = "Alguna mamada rara"
                    target = "Una mamada más rara aun, pero bueno"
                    ideas = "-Una asi bien saica, otra vara saica, pueden poder cosas saicas para que prometa la vara"
                />
            </div>
            
        </div>
        
    )
}