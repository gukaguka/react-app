import React, { Component } from 'react';
import Attributes from './Attributes';

//<div key={a.name}><p>{a.name}:</p><div className='attributes'>{a.items.map(item => (
 //    			<div key={item.value} className="attr-btn" ><div >{item.value}</div></div>

class AttributeTitles extends Component{


state ={
	attrValue : '',
	
}
 attrPush = (attr) => {
 	this.setState({attrValue: attr});
}



	
	render(){
		return(
			<div key={this.props.a.name}><div><h4 className='attrName'>{this.props.a.name}:</h4></div>
			<div className="attributes">{this.props.a.items.map((item) => (<Attributes a={item} attrPush={this.attrPush} attrValue={this.state.attrValue}  attrType={this.props.a.type} /> ))}</div>
			</div>
			);
	}

}


export default AttributeTitles;