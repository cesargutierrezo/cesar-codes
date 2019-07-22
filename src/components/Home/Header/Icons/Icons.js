import React from "react"
import styled from "styled-components"
import uuid from "uuid/v4"
import {
  ReactIcon,
  VueIcon,
  AngularIcon,
} from "../../../../assets/images/vectors/index"

const IconContainerSt = styled.div`
  display: flex;
  margin: 0.8em 0;
  > svg {
    margin-right: 1em;
  }
`

const iconList = [ReactIcon, VueIcon, AngularIcon]

export const Icons = ({ size }) => (
  <IconContainerSt>
    {iconList.map(Icon => (
      <Icon width={size} height={size} key={uuid()} />
    ))}
  </IconContainerSt>
)
