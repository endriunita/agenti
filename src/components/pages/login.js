import React, { Component } from 'react'

import './../../styles/formPage.css'
import { NavLink, Redirect } from 'react-router-dom'

const BE_URL = "http://localhost:8080"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: false
        }
    }
    
    doLogin = (event) => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
                })
            }
        fetch(BE_URL + "/users/authenticate", requestOptions)
            .then(response => {
                if (!response.ok){
                    this.setState({error: true})
                    return false;
                }
                else {
                    console.log("ohkeoheho");
                    return response.json();
                }
            })
            .then(json => {
                if (json.message === "OK"){
                    console.log("eoeloaeldaopd")
                    this.props.setAuth(username)
                }
                else{
                    this.setState({
                        error: true
                    })
                }
            })
            .catch(err => {
                this.setState({
                    error: true
                })
            })
    }

    displayError = () => {
        this.setState({
            error: true
        })
    }
    
    render() {

        if (this.props.checkAuth() === true){
            return (
                <Redirect to="/home"></Redirect>
            );
        }

        return (
            <div className="fPage">
                <form onSubmit={(event) => this.doLogin(event)} autoComplete="off" className="form">
                    <p>Sign in</p>
                    <input name="username" type="text" placeholder="username"></input>
                    <br></br>
                    <input name="password" type="password" placeholder="password"></input>
                    <br></br>
                    <input type="submit" value="Sign in"></input>
                    <br></br>
                    {this.state.error === true && <div style={{color: 'red', fontSize: '14px', fontWeight: '500', textAlign: 'center'}}>Invalid input</div>}
                    <br></br>
                    <span style={{color: 'white'}}>
                        No account? 
                        <NavLink
                        style={{textDecoration: 'none', color: 'lightblue', marginLeft: '10px'}}
                        to="/register"
                        >
                            Register here
                        </NavLink>    
                    </span>
                </form>
            </div>
            
        )
    }
}
