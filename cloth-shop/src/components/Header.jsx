import React, { Component } from 'react';
import './header.css'
import Cart from './Cart';
import './header.css';
import QueryCurrencies from './QueryCurrencies';

const categories = ["tech", "clothes"];
class Header extends Component{

 render(){
           

         


		    
 	return(
		    
        <header>

        <div className="category-container">
        
        { categories.map((c) => (
    <button className="category-btn" onClick={() => {this.props.setCategory(c)} }>{c.toUpperCase()}</button>
    ))}</div>
        
  {<div className="cart-and-currency"><div><QueryCurrencies displayCurrency={this.props.displayCurrency} passCurrency={this.props.passCurrency}/></div><Cart cartItemDelete={this.props.cartItemDelete} cartItems={this.props.cartItems} amount={this.props.itemAmount} currentCurrency={this.props.currentCurrency} displayCurrency={this.props.displayCurrency} /></div>
		    }


</header>
 		);
 }


}




export default Header;