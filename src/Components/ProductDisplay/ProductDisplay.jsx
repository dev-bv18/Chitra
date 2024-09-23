import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props)=>
{const { product }= props;
const {addToCart}=useContext(ShopContext);
function displaypopup(){
    document.getElementById('popup').style.display='block';
setTimeout(()=>{
    document.getElementById('popup').style.display='none';
},1000);

}
    return (
        <div className="productdisplay">
            <div id="popup">Added to cart!</div>
<div className="productdisplay-left">
    <div className="productdisplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    </div>
    <div className="productdisplay-img">
   <img className="productdisplay-main-img" src={product.image}  alt="" />
    </div>
</div>
<div className="productdisplay-right">
  <h1>{product.name}</h1>
  <div className="productdisplay-right-stars">
   <img src={star_icon} alt="" />
   <img src={star_icon} alt="" />
   <img src={star_icon} alt="" />
   <img src={star_icon} alt="" />
   <img src={star_dull_icon} alt="" />
   <p>(143)</p>
    </div> 
    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
    </div>
    <div className="productdisplay-right-description">
        An Intricate,colorful and traditional painting made by local artisans of the orginating state.
    </div>
    <div className="productdisplay-right-size">
        <h1>Select Frame Color</h1>
        <div className="productdisplay-right-sizes">
            <div>white</div>
            <div>black</div>
            <div>tan</div>
            <div>golden</div>
            <div>silver</div>
            </div>
    </div>
    <button onClick={()=>{addToCart(product.id);
        displaypopup();
    }}>ADD TO CART</button>
    <p className="productdisplay-right-category
    ">
        <span>Category:</span>Pattachitra, Painting,Traditional
    </p>
    <p className="productdisplay-right-category
    ">
        <span>Tags:</span>Odisha,Odia,Kalingan
    </p>
</div>
        </div>
    )
}
export default ProductDisplay