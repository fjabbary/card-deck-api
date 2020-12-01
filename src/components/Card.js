import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props)
        this.angle = Math.random() * 90 - 45
        this.translate = Math.random() * 40 - 20
        this.myStyle = {
            borderRadius: '5%',
            transform: `Rotate(${this.angle}deg) translate(${this.translate}px)`,
            position: 'absolute',
            width: '10%',
            height: 'auto'
        }


    }

    render() {
        const { card } = this.props

        return (
            <div style={{ marginTop: '140px' }}>
                <p><img src={card.image} alt={`${card.value} - ${card.suit}`} style={this.myStyle} /></p>
            </div>
        );
    }
}

export default Card;
