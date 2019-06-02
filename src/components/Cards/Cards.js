import React, { Component } from 'react'
import './Cards.css'

class Cards extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <div className="card" onClick={() => this.props.cardCount(this.props.id)}>
                    <div className="img-container">
                        <img src={require ('../../images/' + this.props.image)} 
                        className="img-fluid" alt={this.props.id}/>
                    </div>
                </div>
            </div>
        )
    }
}



export default Cards
