import React, { Component } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

class ProductElement extends Component {
	state ={
		amount: 1,
	}

	render(){

		return(
			<Link className="link" to= "/product" state={{data: this.props.data}} >
			<div className="product">
     	<div key={this.props.data.name} className="product-container">
			<img className="product-img" src={this.props.data.gallery[0]} />
			<div className='add-btn-container'><button className="add-btn" onClick={(e) => { e.preventDefault();this.props.handleCart(this.props.data); e.stopPropagation();} }>add
     	</button></div>
     	<div className="text-area">
     	<h3 className="product-title">{this.props.data.name}</h3>
     	{this.props.data.prices.filter(p => p.currency === this.props.currentCurrency).map((price) => (<div className='price-tag'><p>{this.props.displayCurrency}</p><p>{parseInt(price.amount)}</p></div>))}
     	</div>
     
     	
      </div>
          	</div>
          	</Link>
  );
	}
			
	
}

//{this.props.data.name}



export default ProductElement;