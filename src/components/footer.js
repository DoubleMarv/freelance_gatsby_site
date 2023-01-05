import * as React from 'react'
import { Link } from 'gatsby'
import {footer} from '../asset_includes/footer.scss';


const Footer = () => {
  return (
    <>
    <div className="main-footer">
      <div className="containo">
      <ul><li><Link to="/about">About</Link></li>
      <li><Link to="/products">All Products</Link></li>
       <li><Link to="/products/product_1">All Products</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}
export default Footer