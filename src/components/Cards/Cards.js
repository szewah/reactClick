import React, { Component } from 'react'
import './Cards.css'

const Cards = (props) => {
    return (
        <div key={props.id}>
            <div className="card" onClick={() => props.cardCount(props.id)}>
                <div className="img-container">
                    <img src={require ('../../images/' + props.image)} 
                    className="img-fluid" alt={props.id}/>
                </div>
            </div>
        </div>
    )
};



export default Cards
