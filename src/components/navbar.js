import * as React from 'react'
import { Link } from 'gatsby'
import {holdsoneyou_nav} from '../asset_includes/mainnav.scss';

const Navbar = () => {
  return (
    <>
    <div className="holdsoneyou_nav">
    <nav className="navulstyles">
      <ul>
<li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">All Products</Link></li>
       <li><Link to="/products/product_1">All Products</Link></li>
      </ul>
      </nav>
      </div>
    </>
  )
}
export default Navbar