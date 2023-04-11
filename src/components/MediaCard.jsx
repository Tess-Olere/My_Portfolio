import React from 'react'
import { Link } from 'react-router-dom'
import Staycurious from '../images/Staycurious.jpeg'
import './MediaCard.css'

export default function MediaCard() {
  return (
    <div>
        <div className="card">
  <img className="card-img-top" src={Staycurious} alt="blogimage" />
  <div className="card-body">
    <h3 class="card-title">Blog App</h3>
    <p class="card-text">A fully responsive blog website</p>
    <Link className='site' to='https://gisti.netlify.app'>Go to site</Link>
  </div>
</div>

    </div>
  )
}
