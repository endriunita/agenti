import React, { Component } from 'react'

import ProductList from './../layout/productlist'

export default class Shop extends Component {
    constructor(props){
        super(props)
    }

    addProduct = (productid, productname) => {
        const user = this.props.getUser()
        console.log(user + " a adaugat in cos " + productid)

        const orderedProduct = {
            id: productid,
            name: productname,
            quantity: 0,
        }

        this.props.addOrderedProduct(orderedProduct)
    }

    render() {
        return (
            <div style={panelStyle}>
                <ProductList addProduct={this.addProduct}></ProductList>
            </div>
        )
    }
}

const panelStyle = {
    // background: 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    // background: 'linear-gradient(to right, #fc4a1a, #f7b733)',
    background: 'url(https://images.unsplash.com/photo-1588159967382-198ec1c10f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
    height: '100vh',
}