import React from "react"
import styled from "styled-components"

import Drawer from "@material-ui/core/Drawer"
import { NavLinks } from "../NavLinks/NavLinks"

const ContainerSt = styled.div`
  height: 100%;
  width: 80vw;
  background-color: #1a1a1a;
  padding: 3em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  > a {
    margin: 0;
  }
`

export const Sidebar = ({ open, onToggle }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onToggle(false)}>
      <ContainerSt>
        <NavLinks color="#fff" as="h1" />
      </ContainerSt>
    </Drawer>
  )
}
