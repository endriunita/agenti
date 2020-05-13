import React, { Component } from 'react'

import BasketProduct from './basketproduct'

export default class BasketList extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [...this.props.getProducts()]
        }
    }

    render() {
        return (
                <div style={listStyle}>
                    <div style={topbarStyle}>Basket</div>
                    <div style={{marginTop: '60px'}}></div>
                    {this.state.products.length === 0 && <p>Your basket is empty</p>}
                    {this.state.products.map((product, index) => (
                        <BasketProduct updateQuantity={this.props.updateQuantity} key={index} product={product} ></BasketProduct>
                    ))}

                    <div style={{marginBottom: '100px', bottom: '0'}}></div>
                    <div style={bottomBarStyle}>
                        <button onClick={this.props.sendOrder}>Send order</button>
                    </div>
                </div>
                
            
        )
    }
}

const bottomBarStyle = {
    height: '50px',
    position: 'fixed',
    background: '#510001',
    width: 'inherit',
    top: '86%',
}

const topbarStyle = {
    textAlign: 'center',
    color: '#f3f3f3',
    height: '50px',
    width: 'inherit',
    background: '#333',
    position: 'fixed',
    fontWeight: 'bold',
    fontSize: '20px',
}

const listStyle = {
    position: 'relative',
    left: '20%',
    top: '10%',
    height: '80%',
    width: '60%',
    // right: '20%',
    overflow: 'auto',
    border: '5px solid #333',
    borderRadius: '5px',
    background: 'rgba(255,255,255,0.4)',
}