import React from "react"
import styled from "styled-components"

const ContainerSt = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
  text-align: center;
  user-select: none;
  > code {
    font-size: 10px;
  }
`

const WIP = () => (
  <ContainerSt>
    <code>/* work in progress */</code>
  </ContainerSt>
)

export default WIP
