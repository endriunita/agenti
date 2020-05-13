import React, { Component } from 'react'

import BasketList from './../layout/basketlist'

export default class Basket extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: ''
        }
    }

    sendOrder = () => {
        const user = this.props.getUser()
        const products = this.props.getOrderedProducts()

        const url = 'http://localhost:8080/order/add'

        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              username: user,
              products: [...products]
             })
        }

        this.props.resetItems()

        fetch(url, requestOptions)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (json.message.startsWith("Stoc insuficient") ){
                    console.log("No bueno")
                    this.setState({
                        error: json.message
                    })
                    setTimeout(() => window.location.reload(), 3000)
                }
                else {
                    console.log(json)
                    window.location.reload()
                }
            })

        console.log(JSON.stringify({ username: user, products: [...products]}))
    }

    render() {
        return (
            <div style={bckStyle}>
                {this.state.error !== '' && <div style={{position: 'absolute', left: '50%', color: 'red', fontSize: '30px'}}>{this.state.error}</div>}
                <BasketList sendOrder={this.sendOrder} updateQuantity={this.props.updateQuantity} getProducts={this.props.getOrderedProducts} ></BasketList>
            </div>
        )
    }
}

const bckStyle = {
    background: 'url(https://images.unsplash.com/photo-1588159967382-198ec1c10f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    height: '100vh',
}
