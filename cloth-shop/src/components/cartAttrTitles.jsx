import React, { Component } from 'react';
import CartAttr from './cartAttr';

//<div key={a.name}><p>{a.name}:</p><div className='attributes'>{a.items.map(item => (
 //    			<div key={item.value} className="attr-btn" ><div >{item.value}</div></div>

class CartAttrTitles extends Component{

state ={
	attrValue : '',
	attrName: this.props.attributeTitle.name,
}
 attrPush = (attr) => {
 	this.setState({attrValue: attr});
}


	
	render(){
		return(
			
			<div className="attributes">{this.props.attributeTitle.items.map((item) => (<CartAttr attr={item} attrPush={this.attrPush} attrValue={this.state.attrValue} attrName={this.state.attrName}/> ))}</div>
			
			);
	}

}


export default CartAttrTitles;