import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom';

import './../../styles/formPage.css'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            error: false,
        }
    }

    doRegister = (event) => {
        event.preventDefault()
        const user = event.target.username.value
        const pass = event.target.pass.value
        const rpass = event.target.rpass.value

        if (user === '' || pass === '' || rpass === '' || pass !== rpass){
            console.log("wtf?")
            this.setState({
                error: true,
            })
            return false;
        }
        
        let result = this.props.doRegister(user, pass)
        result.then(json => {
                window.location.reload(true);
            })
            .catch(err => {
                this.setState({
                    error: true
                })
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
                <form autoComplete="off" className="form" onSubmit={(event) => this.doRegister(event)}>
                    <p>Sign up</p>
                    <input name="username" type="text" placeholder="username"></input>
                    <br></br>
                    <input name="pass" type="password" placeholder="password"></input>
                    <br></br>
                    <input name="rpass" type="password" placeholder="repeat password"></input>
                    <br></br>
                    <input type="submit" value="Sign up"></input>
                    <br></br>
                    {this.state.error === true && <div style={{color: 'red', fontSize: '14px', fontWeight: '500', textAlign: 'center'}}>Invalid input</div>}
                    <br></br>
                    <span style={{color: 'white'}}>
                        Already have an account? 
                        <NavLink
                        style={{textDecoration: 'none', color: 'lightblue', marginLeft: '10px'}}
                        to="/login"
                        >
                            Login here
                        </NavLink>    
                    </span>
                </form>
            </div>
        )
    }
}
