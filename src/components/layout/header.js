import React, { Component }     from 'react';

import { NavLink }              from 'react-router-dom';
import color from 'color';
import Radium from 'radium';

import './../../App.css';
import basket                   from './../../images/basket.png';


const UUID = require('uuid-int');
const id = 0;
const generator = UUID(id);

export default class Header extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', float: 'left', background: '#333', color: 'white', height: '100vh', width: '150px'}}>
                <ul style={{listStyleType: 'none'}}>
                    
                    <li key={generator.uuid()} style={{textAlign: 'center', marginTop: '10px'}}>
                        <img alt="icon" src={basket}></img>
                    </li>

                    {this.props.isAuth() === true &&
                        <li key={generator.uuid()} style={nbnavStyle}>
                            <span>{this.props.getCurrentUser()}</span>
                        </li>
                    }
                    
                    <li key={generator.uuid()} style={navStyle}>
                        <NavLink
                        className="navlink"
                        style={linkStyle}
                        activeStyle={{color: '#ff7979'}}
                        to="/home">
                            Home
                        </NavLink>
                    </li>

                    {
                        this.props.isAuth() === false &&
                        <li key={generator.uuid()} style={navStyle}>
                            <NavLink
                            className="navlink"
                            style={linkStyle}
                            activeStyle={{color: '#ff7979'}}
                            to="/login">
                                Account
                            </NavLink>
                        </li>
                    }

                    {
                        this.props.isAuth() === true &&
                        <li key={generator.uuid()} style={navStyle}>
                            <NavLink
                            className="navlink"
                            style={linkStyle}
                            activeStyle={{color: '#ff7979'}}
                            to="/shop">
                                Shop
                            </NavLink>
                        </li>
                    }

                    {
                        this.props.isAuth() === true &&
                        <li key={generator.uuid()} style={navStyle}>
                            <NavLink
                            className="navlink"
                            style={linkStyle}
                            activeStyle={{color: '#ff7979'}}
                            to="/basket">
                                Basket
                            </NavLink>
                        </li>
                    }

                    <li key={generator.uuid()} style={navStyle}>
                        <NavLink
                        className="navlink"
                        style={linkStyle}
                        activeStyle={{color: '#ff7979'}}
                        to="/about">
                            About us
                        </NavLink>
                    </li>
                    
                    <li key={generator.uuid()} style={navStyle}>
                        <NavLink
                        className="navlink"
                        style={linkStyle}
                        activeStyle={{color: '#ff7979'}}
                        to="/thanos">
                            Thanos
                        </NavLink>
                    </li>

                    {this.props.isAuth() === true &&
                        <li key={generator.uuid()}  style={nbnavStyle}>
                            <button style={btnStyle} onClick={this.props.doLogout}>
                                Logout
                            </button>
                        </li>
                    }
                </ul>
            </div>
        )
    }
}

Header = Radium(Header)

const linkStyle = {
    textDecoration: 'none',
    width: '100px',
    color: 'white',
    padding: '10px 12px',
    textShadow: '2px 4px 3px rgba(0,0,0,0.3)',
    ':hover': {
        background: color('red'),
        color: 'black'
    }
}

const btnStyle = {
    width: '100px',
    color: '#f3f3f3',
    fontWeight: 'bold',
    padding: '10px 12px',
    border: 'none',
    background: 'none',
    ':hover':{
        background: color('#f3f3f3'),
        color: 'black',
    }
}

const navStyle = {
    margin: '10px 5px 0 5px',
    fontSize: '16px',
    padding: '10px 12px',
    background: '#556',
    ':hover':{
        background: color('#f3f3f3'),
        color: 'black',
    }
}

const nbnavStyle={
    color: '#f3f3f3',
    fontWeight: 'bolder',
    margin: '10px 5px 0 5px',
    fontSize: '16px',
    padding: '10px 12px',
}