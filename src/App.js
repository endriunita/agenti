import 
React,{   
  Component,
} from 'react';

import {
  BrowserRouter as Router, 
  NavLink,
  Route,
  Redirect
}
from 'react-router-dom';
import Register from './components/pages/register.js';
import Header from './components/layout/header.js';
import Thanos from './components/pages/thanos.js';
import Login from './components/pages/login.js';
import Basket from './components/pages/basket';
import About from './components/pages/about';
import Shop from './components/pages/shop';

import './App.css';


const BE_URL = "http://localhost:8080"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuth: localStorage.getItem('agentuser') !== null,
      currentUser: localStorage.getItem('agentuser'),
      orderedProducts: []
    }
  }

  setAuth = (username) => {
    this.setState({
      isAuth: true,
      currentUser: username
    })
    localStorage.setItem('agentuser', username)
  }

  getUser = () => {
    return this.state.currentUser
  }

  addOrderedProduct = (product) => {
    this.setState({
      orderedProducts: [...this.state.orderedProducts, product]
    })
  }

  updateQuantity = (id, quantity) => {
    var aux = this.state.orderedProducts

    for(var i = 0; i < aux.length; i++){
      if (aux[i].id === id){
        aux[i].quantity = quantity
      }
    }

    this.setState({
      orderedProducts: [...aux]
    })
  }

  getOrderedProducts = () => {
    const aux = this.state.orderedProducts
    return aux
  }

  async doRegister(username, password){
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
    fetch(BE_URL + "/users/register", requestOptions)
      .then(response => {
        if (response.ok){
            return response.json()
        }
      })
      .then(json => {
          return json
      })
      .catch(err => {
          return err
      })
  }

  resetItems = () => {
    this.setState({
      orderedProducts: []
    })
  }

  doLogout = () =>{
    this.setState({
      isAuth: false
    })
    localStorage.removeItem('agentuser')
    window.location.reload()
  }

  isAuth = () => {
    return this.state.isAuth
  }

  render() {
    return(
      
      <Router>
        <div>
          <Header getCurrentUser={this.getUser} doLogout={this.doLogout} isAuth={this.isAuth}></Header>

            <Route exact path="/home">
              <div id="homeScreen">
                <div style={titleStyle}>
                  <h1 style={{position: 'sticky', right: '0', top: '0'}}>Agenti de vanzari</h1>

                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <NavLink id="fbtn-1" to="/register">Sign up</NavLink>
                    <NavLink id="fbtn-2" to="/about">About us</NavLink>
                  </div>
                </div>
              </div>
            </Route>

            <Route exact path="/shop">
              <Shop addOrderedProduct={this.addOrderedProduct} getUser={this.getUser}></Shop>
            </Route>

            <Route exact path="/thanos">
              <Thanos></Thanos>
            </Route>

            <Route exact path="/basket">
              <Basket resetItems={this.resetItems} getUser={this.getUser} updateQuantity={this.updateQuantity} getOrderedProducts={this.getOrderedProducts}></Basket>
            </Route>

            <Route exact path="/login">
              <Login setAuth={this.setAuth} checkAuth={this.isAuth}></Login>
            </Route>

            <Route exact path="/register">
              <Register checkAuth={this.isAuth} doRegister={this.doRegister}></Register>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Redirect from="*" to="/home"></Redirect>
          
        </div>
      </Router>
    );
  }
}

const titleStyle = {
  position: 'absolute',
  bottom: '50%',
  right: '25%',
  fontSize: '72px',
  color: '#f3f3f3',
  textShadow: '2px 4px 3px rgba(0,0,0,0.3)'
}



export default App;
