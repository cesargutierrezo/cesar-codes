import styled, { keyframes } from "styled-components"

/**
 * Canvas opacity keyframes
 */
const opacityAnim = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
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
  width: 100vw;
  height: 100vh;
  user-select: none;
  touch-action: none;
  animation: ${opacityAnim} ${p => p.fadeInterval}ms ease-in-out infinite;
`
