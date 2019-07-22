import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Home from "../components/Home/Home"
import WIP from "../components/WIP/WIP"
// import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <WIP />
    {/* <Footer /> */}
  </Layout>
)

export default IndexPage
