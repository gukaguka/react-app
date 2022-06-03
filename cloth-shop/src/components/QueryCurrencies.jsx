import React, { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import angledown from '../images/angle-down-solid.svg';

const GET_CURRENCIES = gql`
query QueryCurrencies{

currencies
}`;


const QueryCurrencies = (props) => {
const {loading:loading1, error:error1, data:data1} = useQuery(GET_CURRENCIES);
const [currentCurrency, setCurrentCurrency] = useState("USD");
const [toggle, setToggle] = useState("currency-hidden");
const currencySymbol = ["$ ", "£ " , "A " , "¥ " , "R "];

if(loading1) return <p>Loading...</p>
if(error1) return <p>error</p>

	return (<div><div className="currency-toggle" onClick={() => {toggle != "currency-hidden" ? setToggle("currency-hidden") : setToggle("currency-visible")} }><div className="currency-symbol">{ props.displayCurrency }</div><img src={angledown} width="10px"/></div>
			<div className={toggle}>{data1.currencies.map((currency ,index)=> (
					<div className="currency-item" key={currency} onClick={() => {setCurrentCurrency(currency); props.passCurrency(currency);} }>
						{currencySymbol[index] + currency}
					</div>

				))}</div></div>);
}






export default QueryCurrencies;