import styled, { keyframes } from "styled-components"

/**
 * Canvas opacity keyframes
 */
const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
`

/**
 * Styled canvas element
 */
export const CanvasSt = styled.canvas`
  position: absolute;
  margin: auto;
  opacity: ${p => p.opacity};
  width: 100%;
  height: 100%;
  user-select: none;
  touch-action: none;
  animation: ${opacityAnim} ${p => p.fadeInterval}ms ease-in-out infinite;
  z-index: -1;
`
