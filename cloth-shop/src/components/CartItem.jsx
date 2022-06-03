import React, {Component} from 'react';
import CartAttrTitles from "./cartAttrTitles";
import AttributeTitles from "./AttributeTitles";

class CartItem extends Component{
	state = {
		amount: 1,
	}

	render(){
		let id = 0;
		return(
			<div key={id++} className="cart-item-container">
		    
		<div className='cartitem-left-side'><div className='item-name'><p>{this.props.cartItem.name}</p></div>
		<div>{this.props.cartItem.prices.filter(p => p.currency === this.props.currentCurrency).map((price) => (<div className="price-in-cart"><p>{this.props.displayCurrency}</p><p>{parseInt(price.amount * this.state.amount)}</p></div>))}</div>
		{this.props.cartItem.attributes.map((a) => (<CartAttrTitles attributeTitle={a} />) )}
		</div>
		<div className='flex-container'>
		<div>
		<div className="increment-decrement" onClick={() => {this.setState(function(state){return{amount: state.amount + 1}})}}>+</div>
		<p className="amount">{this.state.amount.toString()}</p>
		<div className='increment-decrement' onClick={() => {this.state.amount >= 2 ? this.setState(function(state){return{amount: state.amount - 1}}): this.setState({amount:1})}}>-</div>
		</div><img className="cart-image" src={this.props.cartItem.gallery[0]} />
		<div className="delete-cart" onClick={() => {this.props.cartItemDelete(this.props.delete)}}>x</div>
		</div></div>

			);
	}
}





export default CartItem;