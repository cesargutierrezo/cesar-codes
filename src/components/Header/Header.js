import React from "react"
import styled from "styled-components"

import { NavLinks } from "../NavLinks/NavLinks"
import { HamburgerIcon } from "../../assets/images/vectors/index"

import { media } from "../../utils"

const NavSt = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: 1.5em 2em;
  width: 100%;
`

const NavLinkContainerSt = styled.div`
  display: none;
  ${media.md(`
    display: block;
  `)}
  > a {
    margin-left: 2em;
  }
`

const SidebarButtonSt = styled.button`
  padding: 0;
  transform: rotate(180deg);
  display: block;
  ${media.md(`
    display: none;
  `)}
`

export const Header = ({ onToggle }) => {
  return (
    <NavSt className="navigation">
      <NavLinkContainerSt>
        <NavLinks color="#fff" />
      </NavLinkContainerSt>
      <SidebarButtonSt onClick={() => onToggle(true)}>
        <HamburgerIcon width={30} height={30} fill={"#fff"} />
      </SidebarButtonSt>
    </NavSt>
  )
}
