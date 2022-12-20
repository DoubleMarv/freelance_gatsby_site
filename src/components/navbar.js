import * as React from 'react'
import { Link } from 'gatsby'


const Navbar = () => {
  return (
    <>
      <ul><li><Link to="/about">About</Link></li>
      <li><Link to="/products">All Products</Link></li>
       <li><Link to="/products/product_1">All Products</Link></li>
      </ul>
    </>
  )
}
export default Navbar