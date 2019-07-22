import { css } from "styled-components"

/**
 * Canvas update and fade interval
 */
export const CANVAS_INTERVAL_DELAY = 3000

export const TYPING_DELAY = 3000

const breakpoints = {
  sm: 320, // default
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
}

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (cls, isIE = false) =>
    css`
      ${isIE
        ? css`
            @media all and (min-width: ${breakpoints[
                label
              ]}px) and (-ms-high-contrast: none) {
              ${cls};
            }
          `
        : css`
            @media (min-width: ${breakpoints[label]}px) {
              ${cls};
            }
          `};
    `

  return accumulator
}, {})
