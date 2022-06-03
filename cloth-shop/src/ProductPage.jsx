import logo from './logo.svg';
//import './App.css';
import Product from './components/Product';
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
const arrayOfProducts = ["huarache-x-stussy-le","jacket-canada-goosee","ps-5", "xbox-series-s", "apple-imac-2021", "apple-imac-2021","apple-iphone-12-pro","apple-airpods-pro","apple-airtag"];



class ProductPage extends Component {




  render(){
return (
  <div>
  
  
  <div className="product-page"> {arrayOfProducts.map((p) => (

     <Product id={p} category={this.props.category} handleCart={this.props.RecieveCartItem} handleSingleProduct={this.props.handleSingleProduct} currentCurrency={this.props.currentCurrency} displayCurrency={this.props.displayCurrency} />


      ))
   }
   </div>
 </div>
  );

  }
     

  
}




export default ProductPage;
