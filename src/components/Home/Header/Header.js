import React from "react"
import styled from "styled-components"

const ContainerSt = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  padding: 30px;
`

const TextSt = styled.span`
  color: #000;
  > span {
    background-color: #fff;
  }
`

const Header = () => {
  return (
    <ContainerSt>
      <TextSt as="h1">
        <span>César Gutiérrez Olivares</span>
      </TextSt>
      <TextSt as="h3">
        <span>web / mobile developer</span>
      </TextSt>
    </ContainerSt>
  )
}

export default Header
