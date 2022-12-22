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
      <li><Link to="/about">Test</Link></li>
      <li><Link to="/products">Test 2</Link></li>
       <li><Link to="/products/product_1">Test 3</Link></li>
      </ul>
      </nav>
      </div>
    </>
  )
}
export default Navbar