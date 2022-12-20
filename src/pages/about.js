import * as React from "react"
import Layout from "../components/layout.js"
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const AboutPage = () => {
  return (
  	<>
    <Layout>
    <main style={pageStyles}>
<div class="">About Page</div>
    </main>
     </Layout>
    </>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>
