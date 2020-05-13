import React, { Component } from 'react'
import Radium from 'radium'
import color from 'color'

export default class Product extends Component {
    constructor(props){
        super(props)
    }

    addToBasket = () => {
        this.props.addProduct(this.props.product.id, this.props.product.name)
    }
    
    render() {
        return (
            <div style={productStyle}>
                <span style={{width: '300px'}}>
                    {this.props.product.name}
                </span>

                <span style={{width: '200px'}}>
                    {this.props.product.price} lei
                </span>

                <span>
                    {this.props.product.quantity} in stoc
                </span>

                <span style={{display: 'flex'}}>
                    <button onClick={this.addToBasket} style={btnStyle}>
                        Add to basket
                    </button>
                </span>
            </div>
        )
    }
}

Product = Radium(Product)

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