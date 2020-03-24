import React from "react"
import styled, { css } from "styled-components"
import Link from "gatsby-link"
import { Layout } from "../components/Layout/Layout"
import { SEO } from "../components/SEO/SEO"
import { Canvas } from "../components/Canvas/Canvas"
import { Text } from "../components/Text/Text"
import { media } from "../utils"

const ContainerSt = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 2em;
  ${media.md(css`
    align-items: center;
  `)}
`

const ButtonSt = styled(Link)`
  outline: none;
  text-align: center;
  border: 2px solid #fff;
  margin-top: 0.4em;
  text-decoration: none;
  padding: 0.5em 0.8em;
  border-radius: 4px;
  width: auto;
  > h3 {
    margin: 0;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Canvas />
    <ContainerSt>
      <Text as="h1" color="#fff">
        404
      </Text>
      <Text as="h1" color="#fff">
        Lost?
      </Text>
      <ButtonSt to="/">
        <Text as="h3" color="#fff">
          Go back
        </Text>
      </ButtonSt>
    </ContainerSt>
  </Layout>
)

export default NotFoundPage
