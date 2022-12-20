import * as React from "react"
import Layout from "../components/layout.js"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <>
    <Layout>
    <main style={pageStyles}>
<div class=""><h1>Home</h1></div>
    </main>
     </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
