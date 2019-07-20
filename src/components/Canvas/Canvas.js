import React, { useEffect, useRef } from "react"
import useInterval from "../../hooks/useInterval"
import { drawCanvas, CANVAS_INTERVAL_DELAY } from "./utils"
import { CanvasSt } from "./Canvas.css"

/**
 * Home page canvas element
 */
export const Canvas = () => {
  /* Methods */
  const updateCanvas = () => {
    drawCanvas(canvasRef.current)
  }

  /* Hooks */
  useEffect(updateCanvas, [])
  useInterval(updateCanvas, CANVAS_INTERVAL_DELAY)
  const canvasRef = useRef()

  return (
    <CanvasSt
      className="canvas"
      ref={canvasRef}
      fadeInterval={CANVAS_INTERVAL_DELAY}
    />
  )
}
