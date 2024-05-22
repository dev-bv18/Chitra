import React from 'react'
import './NewsLetter.css'
const NewsLetter=()=>
{
return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your email</h1>
        <p>Subscribe to our news letter to stay updated!</p>
    <div>
        <input type="email" placeholder="Enter you email id"/>
        <button>Subscribe</button>
    </div>
    </div>
)
}
export default NewsLetter