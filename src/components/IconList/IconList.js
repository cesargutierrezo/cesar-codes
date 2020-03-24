import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { v4 as uuid } from "uuid"

const IconContainerSt = styled.div`
  display: flex;
  margin: ${p => p.margin[0]} 0;
  > svg:not(:last-of-type) {
    margin-right: ${p => p.margin[1]};
  }
`

export const IconList = ({ icons, fill, margin, size }) => (
  <IconContainerSt margin={margin}>
    {icons.map(Icon => (
      <Icon width={size} height={size} key={uuid()} fill={fill} />
    ))}
  </IconContainerSt>
)

IconList.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.func),
  fill: PropTypes.string,
  margin: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.number,
}

IconList.defaultProps = {
  icons: [],
  fill: "#fff",
  margin: ["0.8em", "1em"],
  size: 50,
}
