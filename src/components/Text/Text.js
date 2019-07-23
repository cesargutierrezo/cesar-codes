import React from "react"
import styled from "styled-components"

const TextSt = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: ${p => p.weight};
  font-size: ${p => p.size};
  margin-bottom: 0.4em;
  color: ${p => p.color};
  user-select: none;
  > span {
    background-color: ${p => p.background};
  }
`

export const Text = ({ as, children, weight, color, background, size }) => (
  <TextSt
    as={as}
    color={color}
    background={background}
    weight={weight}
    size={size}
  >
    <span>{children}</span>
  </TextSt>
)
