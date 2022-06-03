import React, {Component} from 'react';

class Attributes extends Component{

	state = {
		active: 'attr-btn active' ,
		inactive: 'attr-btn'
	}

render(){
	return(
		<div>
		
			{!this.props.attrType ? <div className={this.props.attrValue === this.props.a.value  ? this.state.active : this.state.inactive} onClick={() => {this.props.attrPush(this.props.a.value);}}>{this.props.a.value}</div> : 
			<div  className={this.props.attrValue === this.props.a.displayValue  ? this.state.active : this.state.inactive} onClick={() => {this.props.attrPush(this.props.a.displayValue);}}>{this.props.a.displayValue}</div> }
		</div>
		);
};
}


export default Attributes;