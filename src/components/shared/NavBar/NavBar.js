import React from "react"
import styled from "styled-components"

import Text from "../Text/Text"

const NavSt = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: 1em 1.5em;
  width: 100%;
`

const LinkSt = styled.a`
  text-decoration: none;
  margin-left: 1em;
`

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
    href: "/downloads/cesar-gutierrez-cv-2019.pdf",
    target: "_blank",
  },
  {
    label: "contact",
    href: "mailto:hello@cesar.codes",
  },
]

const NavBar = () => (
  <NavSt>
    {links.map(({ label, href, target }) => (
      <LinkSt href={href} key={href} target={target} rel="noopener noreferrer">
        <Text fontWeight={"bold"}>{label}</Text>
      </LinkSt>
    ))}
  </NavSt>
)

export default NavBar
