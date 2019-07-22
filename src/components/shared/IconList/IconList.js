import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import uuid from "uuid/v4"

const IconContainerSt = styled.div`
  display: flex;
  margin: ${p => p.margin[0]} 0;
  > svg:not(:last-of-type) {
    margin-right: ${p => p.margin[1]};
  }
`

const Icons = ({ icons, fill, margin, size }) => (
  <IconContainerSt margin={margin}>
    {icons.map(Icon => (
      <Icon width={size} height={size} key={uuid()} fill={fill} />
    ))}
  </IconContainerSt>
)

Icons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.func),
  fill: PropTypes.string,
  margin: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.number,
}

Icons.defaultProps = {
  icons: [],
  fill: "#fff",
  margin: ["0.8em", "1em"],
  size: 50,
}

export default Icons
