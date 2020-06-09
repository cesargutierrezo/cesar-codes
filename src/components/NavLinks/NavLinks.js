import React from "react"
import styled from "styled-components"

import { Text } from "../Text/Text"

const links = [
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/cesargutierrezo/?locale=en_US",
    target: "_blank",
  },
  {
    label: "github",
    href: "https://github.com/cesargutierrezo",
    target: "_blank",
  },
  {
    label: "cv",
    href: "/downloads/cesar-gutierrez-cv-2020.pdf",
    target: "_blank",
  },
  {
    label: "contact",
    href: "mailto:hello@cesar.codes",
  },
]

const LinkSt = styled.a`
  text-decoration: none;
`

export const NavLinks = ({ color, size, as }) => {
  return links.map(({ label, href, target }) => (
    <LinkSt href={href} key={href} target={target} rel="noopener noreferrer">
      <Text as={as} weight="bold" color={color} size={size}>
        {label}
      </Text>
    </LinkSt>
  ))
}
