import React from 'react'
import './Jumbotron.css'

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4 text-center">Clicky Game</h1>
                <br/>
                <h3 className="lead text-center">Click on an image to earn points but don't click on it more than once</h3> 
            </div>
        </div>
    )
};

export default Jumbotron;