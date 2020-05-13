import React, { Component } from 'react'

import Product from './product.js'
import './../../App.css'

const BE_URL = "http://localhost:8080"

export default class ProductList extends Component {
    constructor(props){
        super(props)
        this._isMounted = false
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this._isMounted = true
        this._isMounted && this.getProducts()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    getProducts = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        fetch(BE_URL + "/products/get", requestOptions)
            .then(response => {
                if (!response.ok){
                    return false;
                }
                else {
                    console.log("ok");
                    return response.json();
                }
            })
            .then(json => {
                if (json.products.length > 0){
                    console.log("eoeloaeldaopd")
                    this._isMounted && this.setState({
                        products: json.products
                    })
                    
                }
            })
            .catch(err => {
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <div style={listStyle}>
                <div style={topbarStyle}>Product list</div>
                <div style={{marginTop: '60px'}}></div>
                {this.state.products.map((product, index) => (
                    <Product addProduct={this.props.addProduct} key={index} product={product}></Product>
                ))}
            </div>
        )
    }
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