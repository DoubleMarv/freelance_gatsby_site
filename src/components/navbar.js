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
      <li><Link to="/services">Services</Link>
        <ul>
          <li><Link to="/services/wordpress">Wordpress</Link></li>
          <li><Link to="/services/wordpress-unhacking">Wordpress Unhacking</Link></li>
          <li><Link to="/services/wordpress-maintenance">Wordpress Maintenance</Link></li>
        </ul>
      </li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/hire">About</Link></li>
      </ul>
      </nav>
      </div>
    </>
  )
}
export default Navbar