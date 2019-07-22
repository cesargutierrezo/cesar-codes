import React from "react"
import styled from "styled-components"
import { media, TYPING_DELAY } from "../../../utils"

import Text from "../../shared/Text/Text"
import TypingList from "./Typing/Typing"
import IconList from "../../shared/IconList/IconList"

import {
  ReactIcon,
  VueIcon,
  AngularIcon,
} from "../../../assets/images/vectors/index"

const list = [
  `frontend engineer`,
  `mobile app developer`,
  `ui engineer`,
  `web developer`,
]

const iconList = [ReactIcon, VueIcon, AngularIcon]

const ContainerSt = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 2em;
  ${media.md(`
    align-items: center;
  `)}
`

const Header = () => {
  return (
    <ContainerSt>
      <Text as="h1">César Gutiérrez Olivares</Text>
      <TypingList loop as="h3" delay={TYPING_DELAY} textList={list} />
      <IconList icons={iconList} />
    </ContainerSt>
  )
}

export default Header
