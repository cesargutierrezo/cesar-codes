import React from "react"
import styled from "styled-components"

const TextSt = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: ${p => p.fontWeight};
  margin-bottom: 0.4em;
  color: ${p => (p.inverted ? "#000" : "#fff")};
  user-select: none;
  > span {
    background-color: ${p => p.inverted && "#fff"};
  }
`

const Text = ({ as, children, fontWeight, inverted }) => (
  <TextSt as={as} inverted={inverted} fontWeight={fontWeight}>
    <span>{children}</span>
  </TextSt>
)

export default Text
