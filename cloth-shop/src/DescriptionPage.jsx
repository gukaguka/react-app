import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router-dom";
import "./DescriptionPage.css"
import { withRouter } from "react-router";
import AttributeTitles from "./components/AttributeTitles";

const DescriptionPage = (props) => {


const location = useLocation();
const [currentImage, setCurrentImage] = useState('');



	return(
		<withRouter>
		<div className='description-page'>
		<div className="imgs"><div className="gallery-imgs">{location.state.data.gallery.map((g) => (
			<img className="gallery" src={g} key={g} onClick={() => {setCurrentImage(g)}} />
			))}</div>
		<img className="main-img" src={!currentImage ? location.state.data.gallery[0] : currentImage}/>
		</div>
		<div className='description-container'>
		<h3 className='brand'>{location.state.data.brand}</h3>
		<h3 className='name'>{location.state.data.name}</h3>
			{location.state.data.attributes.map((a) => (<AttributeTitles a={a}/>)

     	 )}
			<div className="add-to-cart-btn" onClick={() => props.RecieveCartItem(location.state.data)}>ADD TO CART</div>
			<div className='description-text' dangerouslySetInnerHTML={{__html: location.state.data.description}}></div> 
			</div>
		</div>
		</withRouter>
		
		);


}


export default DescriptionPage;