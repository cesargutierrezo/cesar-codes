import React from "react"

import { Layout } from "../components/Layout/Layout"
import { SEO } from "../components/SEO/SEO"
import { Home } from "../components/Home/Home"
import { WIP } from "../components/WIP/WIP"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <WIP />
  </Layout>
)

export default IndexPage
