import * as React from 'react'
import '../asset_includes/global.scss';
import Navbar from "./navbar.js"
import Footer from "./footer.js"


const Layout = ({children}) => {
  return (
<div className="all-layout">
<Navbar />
{children}
<Footer />
</div>
  )
}
export default Layout