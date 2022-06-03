import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";
import './components/Product.css';


const client = new ApolloClient ({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
  });





/*
const client = new ApolloClient ({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache()
});




function ClothShopData(){
  const { loading, error, data } = useQuery(gql`
 query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! </p>;

  return data.rates.map(({currency, rate}) => (

    <div key={currency}>
      <p>
        {currency}:{rate}
      </p>
    </div>
    ));
}



function App() {
  return (
    <div className="App">
     <h1> My first Apollo app </h1>
     <ClothShopData />
    </div>
  );
}
*/


ReactDOM.render(
  <ApolloProvider client={client}>

    <App />,

 </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
