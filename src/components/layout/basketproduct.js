import React, { Component } from 'react'

import color from 'color'
import Radium from 'radium'
import Basket from '../pages/basket'

export default class BasketProduct extends Component{
    constructor(props){
        super(props)
    }

    changeQuantity = (event) => {
        const quantity = event.target.value

        this.props.updateQuantity(this.props.product.id, quantity)

    }

    render() {
        return (
            <div style={productStyle}>
                <span style={basicStyle}>
                    {this.props.product.name}
                </span>

                <span style={basicStyle}>
                    {this.props.product.quantity}
                </span>

                <span style={basicStyle}>
                    cantitate: 
                    <input onChange={(event) => this.changeQuantity(event)} style={{width: '40px'}} type="number" min="0"></input>
                </span>
            </div>
        );
    }
    
}

BasketProduct = Radium(BasketProduct)

const basicStyle = {
    width: '300px'
}

const btnStyle = {
    background: '#eb3b5a',
    color: 'black',
    border: 'none',
    fontWeight: '650',
    borderRadius: '3px',
    padding: '8px 2px',
    ':hover': {
        background: color('#eb3b5a')
        .lighten(0.5)
    },
}

const productStyle = {
    background: '#333',
    color: 'white',
    margin: '10px',
    fontSize: '22px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 10px',
    overflow: 'auto',
    borderRadius: '5px',
}