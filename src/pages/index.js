import * as React from "react"
import Layout from "../components/layout.js"
import Homepagebanner from "../components/homepagebanner.js"

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
    <main style={pageStyles}>
<div class=""><h1>Home</h1></div>
    </main>
        <Homepagebanner />
     </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Freelance Developer Cork</title>
