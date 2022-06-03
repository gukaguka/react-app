import React, {Component} from 'react';
import Cart from './components/Cart';
import './components/header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import DescriptionPage from './DescriptionPage';
import CartPage from './CartPage';
import Header from './components/Header';



class App extends Component {
  state ={

    //categories: 
    category: "clothes",
    cartItems: [],
    cartItem: '',
    currentCurrency: 'USD',
    displayCurrency: '$',
    totalPrice: 0,
    nameAttr: '',
    valueAttr: '',

  }

  setCategory =(c) =>{
    this.setState({category:c});

  }

  setCartItems = (item) =>{
    var cartItems = this.state.cartItems.filter(c => c.name != item.name);
    let cartArray = [item,...cartItems];;
    console.log(cartArray);
    this.setState({cartItems:cartArray});
    console.log(this.state.cartItems);
  }

  recieveCartItem =(recieve) =>{
  

         this.setState({ cartItem: recieve }); 
              
              setTimeout(() => {
                console.log(this.state.cartItem);
                this.setCartItems(this.state.cartItem); 
              }, 200);
           
     
    
          }    

    passCurrency = (c) => {
      this.setState({currentCurrency:c})
     setTimeout(() => { console.log(this.state.currentCurrency);}, 200)
     if(c === "USD"){this.setState({displayCurrency : "$"})}
     else if(c === "GBP"){this.setState({displayCurrency: "£"})}
     else if(c === "AUD"){this.setState({displayCurrency: "A"})}
     else if(c === "JPY"){this.setState({displayCurrency: "¥"})}
     else if(c === "RUB"){this.setState({displayCurrency: "R"})}
    }
  cartItemDelete = (del) => {
    var filtered = this.state.cartItems.filter(c => c.name !== del);
   this.setState({cartItems: filtered });
  }

  getAttribute = (attrName, attrValue) => {
    this.setState({nameAttr : attrName});
    this.setState({valueAttr : attrValue});
    console.log(this.state.nameAttr);
}

  render(){
return (
        <BrowserRouter>
                <div className="w3-container">
                    <div className='menu'> <Header  setCategory={this.setCategory} cartItems={this.state.cartItems} cartItemDelete={this.cartItemDelete} passCurrency={this.passCurrency} currentCurrency={this.state.currentCurrency} displayCurrency={this.state.displayCurrency}/></div>
                  <Routes>
                        <Route path="/" exact element={<ProductPage passCurrency={this.passCurrency} category={this.state.category} getAttribute={this.getAttribute}
                         RecieveCartItem={this.recieveCartItem} handleSingleProduct={this.andleSingleProduct} currentCurrency={this.state.currentCurrency} displayCurrency={this.state.displayCurrency}/>}>
                        }
                        
                        </Route>
                        <Route path="/product" exact element={<DescriptionPage RecieveCartItem={this.recieveCartItem} displayCurrency={this.state.displayCurrency}/> }  />
                        <Route path="/cart" exact element={<CartPage  cartItemDelete={this.cartItemDelete} cartItems={this.state.cartItems} displayCurrency={this.state.displayCurrency} currentCurrency={this.state.currentCurrency} displayCurrency={this.state.displayCurrency} />} />
                  </Routes >
                </div>
            </BrowserRouter>
  );

  }
     

  
}




export default App;
