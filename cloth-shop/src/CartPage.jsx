import React, { Component } from "react";
import "./components/Cart.css";
import CartItem from './components/CartItem'

class CartPage extends Component{
	render(){
		return(
			<div className='cartpage'>
				<h1>CART</h1>
			{this.props.cartItems.map((cartItem) => (
				<div className='cartpage-item'>
				<CartItem  cartItemDelete={this.props.cartItemDelete} displayCurrency={this.props.displayCurrency} cartItem={cartItem} delete={cartItem.name}  currentCurrency={this.props.currentCurrency}  />
				
				</div>
				
				
				))}</div>
			);
	}
}


export default CartPage;
