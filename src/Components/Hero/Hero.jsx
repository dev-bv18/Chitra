import React from 'react'
import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.webp'
const Hero=()=>
{
    return (
    
        <div className='hero'>
            <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div className="hero-hand-icon">
    <p>new</p>
    <img src={hand_icon} alt="" />
</div>
<p>Artworks</p>
<p>For Everyone</p>
<a href="#new">
<div className="hero-latest-btn">
              <div>Latest Arrivals</div> 
                <img src={arrow_icon} alt="" />
            </div>
</a>
            </div>
          
            <div className="hero-right">
<img src={hero_image} alt="" />
            </div>
        </div>)
    
}
export default Hero