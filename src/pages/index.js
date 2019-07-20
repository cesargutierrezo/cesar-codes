import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Canvas } from "../components/Canvas/Canvas"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Canvas />
  </Layout>
)

export default IndexPage
