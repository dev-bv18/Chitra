import React, { useContext, useRef, useState } from 'react' 
import './Navbar.css'
import logo from '../assets/logo2.svg'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../assets/dropdown_icon.png'
const Navbar=()=>
{
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();
    const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
   e.target.classList.toggle('open'); }
    return (
        <div className='navbar'>
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Chiତ୍ର</p> 
            </div> 
           <img className="nav-dropdown" src={nav_dropdown} onClick={dropdown_toggle} alt="" />
            <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color:'grey'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("modern")}}><Link style={{textDecoration:'none',color:'grey'}} to="/modern">Modern</Link>{menu==="modern"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("traditional")}}><Link style={{textDecoration:'none',color:'grey'}} to="/traditional">Traditional</Link>{menu==="traditional"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("handicraft")}}><Link style={{textDecoration:'none',color:'grey'}} to="/handicraft">Handicraft</Link>{menu==="handicraft"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'> <button>Login</button></Link>
           <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        </div>
   
    )
}
export default Navbar