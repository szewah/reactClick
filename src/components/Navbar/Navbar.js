import React from 'react'
import './Nav.css';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li><h3><a href="/">Clicky Game</a></h3></li>
                    <li className ={props.message.indexOf("Wrong") !== -1
                    ? "incorrectMessage"
                    : props.message.indexOf("Right") !== 1
                    ? "correctMessage" 
                    : "normalMessage"
                    }>{props.message}</li>
                    <li>Score: {props.score} | Topscore: {props.topScore}</li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar

