import React from "react"
import styled from "styled-components"

const TextSt = styled.span`
  margin-bottom: 0.4em;
  color: ${p => (p.inverted ? "#000" : "#fff")};
  user-select: none;
  > span {
    background-color: ${p => p.inverted && "#fff"};
  }
`

const Text = ({ as, children, inverted }) => (
  <TextSt as={as} inverted={inverted}>
    <span>{children}</span>
  </TextSt>
)

export default Text
