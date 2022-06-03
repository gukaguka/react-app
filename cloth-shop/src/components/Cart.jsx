import React, { Component } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import cart from "./cart.svg";

class Cart extends Component {
	state = {
		cartVisibility: "cart-hidden",
		divVisibility: "div-hidden",
		totalPrice: 0,
	}

	cartHandler(cartVisibility){
		if( cartVisibility === "cart-hidden"){
			this.setState({cartVisibility: 'cart-visible'});
			this.setState({divVisibility: "div-visible"});
		}else{
			this.setState({cartVisibility: 'cart-hidden'}); 
			this.setState({divVisibility: 'div-hidden'});
		}
	
}



	render(){
		let id = 0;
		return(
			<>
			<div className='cart-container'><div className="cart-counter">{this.props.cartItems.length > 0 ? this.props.cartItems.length.toString()  : null}</div><div className='cart-icon' onClick={() => {this.cartHandler(this.state.cartVisibility)}}><img src={cart} width='20' /></div></div>
			<div className={this.state.divVisibility} onClick={()=> {this.setState({cartVisibility: 'cart-hidden'});
			this.setState({divVisibility: 'div-hidden'});}}><div className={this.state.cartVisibility} onClick={(e) => {e.stopPropagation();} }>
	   {this.props.cartItems.map( (cartItem,index) => {
	   return (
	   	<div key={id++}>
	   	<CartItem cartItemDelete={this.props.cartItemDelete} displayCurrency={this.props.displayCurrency} cartItem={cartItem} delete={cartItem.name} currentCurrency={this.props.currentCurrency}  />

	   	</div>
		)}

	)}
	   <div className={this.props.cartItems.length > 0 ? 'btns' : 'hidden' }>
	   <Link className="link" to="/cart" state={{items: this.props.cartItems}} onClick={()=> {this.setState({cartVisibility: 'cart-hidden'});
			this.setState({divVisibility: 'div-hidden'});}} >
			<div className="view-bag-btn">View Bag</div></Link>
			<div className="check-out">check out</div></div>
		</div>
		</div>
		</>
			)
		}
	}

export default Cart;