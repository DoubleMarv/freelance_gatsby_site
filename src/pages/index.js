import * as React from "react"
import Layout from "../components/layout.js"
import Homepagebanner from "../components/homepagebanner.js"
import Portfoliogrid from "../components/portfoliogrid.js"
/**/
import image1 from '../images/portfolio-1.jpg';
import image2 from '../images/portfolio-2.jpg';
import image3 from '../images/portfolio-3.jpg';
import image4 from '../images/portfolio-1.jpg';
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <>
    <Layout>
    <Homepagebanner />
    <Portfoliogrid 
images={[image1, image2, image3, image4]}
    showitems="4"/>
        <Portfoliogrid 
images={[image1, image2]}
    showitems="2" title="lorem Ipsum Blombo Blambo."/>

        <main style={pageStyles}>
<div class=""><h1>Home</h1></div>
    </main>
     </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Freelance Developer Cork</title>
