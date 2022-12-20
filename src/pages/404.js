import * as React from "react"
import Layout from "../components/layout.js"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


const NotFoundPage = () => {
  return (
        <>
    <Layout>
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
    Custom error page
    </main>
    </Layout>
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
