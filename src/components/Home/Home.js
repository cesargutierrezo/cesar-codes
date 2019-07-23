import React from "react"
import styled from "styled-components"

import { Canvas } from "./Canvas/Canvas"
import { HomeContent } from "./HomeContent/HomeContent"

const SectionSt = styled.section`
  height: 100%;
`

export const Home = () => {
  return (
    <SectionSt>
      <Canvas />
      <HomeContent />
    </SectionSt>
  )
}
