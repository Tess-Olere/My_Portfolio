import React from 'react'
import { Link } from 'react-router-dom'
import shopify from '../images/shopify.jpg'
import estore from '../images/estore.jpg'
import './MediaCard.css'


export default function MediaCard() {
  return (
    <div className='pictures'> 
        <div className="card">
  <img className="card-img-top" src={shopify} alt="blogimage" />
  <div className="card-body">
    <h3 class="card-title">Blog App</h3>
    <p class="card-text">A fully responsive blog website</p>
    <Link className='site' to='https://gisti.netlify.app'>Go to site</Link>
  </div>
</div>
<div className="card">
  <img className="card-img-top" src={estore} alt="blogimage" />
  <div className="card-body">
    <h3 class="card-title">Blog App</h3>
    <p class="card-text">A fully responsive blog website</p>
    <Link className='site' to='https://etess.netlify.app'>Go to site</Link>
  </div>
</div>

    </div>
  )
}
