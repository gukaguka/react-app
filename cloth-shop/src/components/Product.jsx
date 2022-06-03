import React, { useState } from 'react';
import Cart from './Cart';

import { useQuery, gql } from "@apollo/client";
import ProductElement from "./ProductElement";



const GET_PRODUCT = gql`
  query Query($pId: String!,) {
    product(id: $pId) {
      
        name
        gallery
        attributes{
          name
          type
          items{
            displayValue
            value
          }
        }
        prices{
          currency
          amount
        }
        category
        description
        brand


    }

  }

`;



const Product = ({id, category, handleCart, handleSingleProduct, currentCurrency, displayCurrency}) => {

/*state = {
	cartItems:[],
}*/
    
	/*addToCart = (product) => {
		let cartArray = [...this.state.cartItems, product];
		this.setState({cartItems: cartArray});
		console.log(this.state.cartItems);
	}*/

	const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: {
      pId: id
     
    },
  });


 if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! </p>;

   
if(data && category == data.product.category) return <ProductElement data={ data.product } 
  handleCart={handleCart} handleSingleProduct={handleSingleProduct} currentCurrency={currentCurrency} displayCurrency={displayCurrency} />
	else return null
	}




export default Product;