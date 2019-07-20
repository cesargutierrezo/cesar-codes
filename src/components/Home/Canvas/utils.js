/**
 * Canvas update and fade interval
 */
export const CANVAS_INTERVAL_DELAY = 3000

/**
 * Draws canvas art
 * Taken from https://codepen.io/ge1doot/pen/KemEax and adapted to React
 * @param {HTMLCanvasElement} canvas - Canvas element reference
 */
export const drawCanvas = canvas => {
  const ctx = canvas.getContext("2d")
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
  const cx = canvas.offsetWidth / 2
  const cy = canvas.offsetHeight / 2
  let ra = 255
  let ga = 0
  let ba = 0
  const cs = 0.01 + Math.random() * 0.05
  const numPoints = Math.round(10 + Math.random() * 50)
  const dist = (2 * Math.PI) / (numPoints - 1)
  const noise2 = Math.random() * 4 + 2
  const points = []
  for (let i = 0; i < numPoints; ++i) {
    points[i] = {
      x: Math.cos(i * dist) * 10,
      y: Math.sin(i * dist) * 10,
    }
  }
  const mx = i => cx + (points[i].x + points[i + 1].x) / 2
  const my = i => cy + (points[i].y + points[i + 1].y) / 2
  const px = i => cx + points[i].x
  const py = i => cy + points[i].y
  ctx.fillStyle = "#000"
  ctx.fillRect(0, 0, cx * 2, cy * 2)
  for (let x = 0; x < Math.sqrt(Math.min(cx, cy)) * 12; x++) {
    for (let i = 0; i < numPoints; ++i) {
      const p = points[i]
      p.x *= 1.017
      p.y *= 1.017
      p.x += Math.random() * noise2 - noise2 / 2
      p.y += Math.random() * noise2 - noise2 / 2
    }
    ctx.beginPath()
    ctx.strokeStyle = `rgb(
      ${Math.round(128 + Math.cos((ra += cs)) * 127)},
      ${Math.round(128 + Math.cos((ga += cs)) * 127)},
      ${Math.round(128 + Math.cos((ba += cs)) * 127)}
    )`
    ctx.moveTo(mx(0), my(0))
    for (let i = 1; i < numPoints - 1; ++i) {
      ctx.quadraticCurveTo(px(i), py(i), mx(i), my(i))
    }
    ctx.quadraticCurveTo(px(numPoints - 1), py(numPoints - 1), mx(0), my(0))
    ctx.stroke()
  }
}
