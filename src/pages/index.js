import * as React from "react"
import Layout from "../components/layout.js"
import Homepagebanner from "../components/homepagebanner.js"
import Portfoliogrid from "../components/portfoliogrid.js"
/**/
import image1 from '../images/portfolio-5.png';
import image2 from '../images/portfolio-6.png';
import image3 from '../images/portfolio-7.png';
import image4 from '../images/portfolio-8.png';
import image5 from '../images/interaction-1.gif';
import image6 from '../images/interaction-2.gif';
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
    sidetitle="websites"
    images={[image1, image3, image2, image4]}
    showitems="4"/>
    <Portfoliogrid 
    sidetitle="Wordpress Themes"
    images={[image5, image6]}
    showitems="2" title="<span>Award-winning*</span> custom WP theme builds."
    content="Whether you need full design and build, or simply the build of a pre-existing design, 
    I can guarantee you a performant and easy-to-use Wordpress theme - built from scratch to your, as lean and secure as possible.<br><span class='smalltext'>*Winner - Best Website Cork Chamber 2022</span>">/></Portfoliogrid>

    <main style={pageStyles}>
    <div class="containo">
    <h1>Home</h1>
    <h1>Home</h1>
    </div>
    </main>
    </Layout>
    </>
    )
}

export default IndexPage

export const Head = () => <title>Freelance Developer Cork</title>
