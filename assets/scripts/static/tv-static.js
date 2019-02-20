'use strict'

/**
 * Generate TV static in a canvas element
 *
 * Original Author: Dave Eddy <dave@daveeddy.com>
 * Date: 2/9/2013
 * License: MIT
 *
 * Modified by: Jonathan Lee Marcus <jonathan.marcus@gmail.com>
 * Date: 2/20/2019
 * License: GPL
 */

const buffercanvas = document.createElement('canvas')
const bufferctx = buffercanvas.getContext('2d')
const WIDTH = 100
const HEIGHT = 100
buffercanvas.width = WIDTH
buffercanvas.height = HEIGHT
buffercanvas.fillStyle = '#000'
let canvas, ctx

function initialize () {
  load()
}

function load () {
  canvas = document.getElementById('static')
  ctx = canvas.getContext('2d')
  ctx.fillStyle = '#000'
  resize()
  requestAnimationFrame(render)
}

function resize () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function render () {
  requestAnimationFrame(render)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  tvstatic(canvas, ctx, 2)
}

function rand (num) {
  return Math.floor(Math.random() * num)
}

function tvstatic (canvas, ctx, scale) {
  scale = scale || 1
  const h = canvas.height
  const w = canvas.width

  bufferctx.clearRect(0, 0, WIDTH, HEIGHT)
  // draw the static on the buffer canvas
  for (let x = 0; x < WIDTH; x += scale) {
    for (let y = 0; y < HEIGHT; y += scale) {
      if (Math.round(Math.random())) { bufferctx.fillRect(x, y, scale, scale) }
    }
  }

  // repeat it onto the real canvas
  for (let x = 0; x < canvas.width; x += WIDTH) {
    for (let y = 0; y < canvas.height; y += HEIGHT) {
      ctx.drawImage(buffercanvas, x, y)
    }
  }

  // draw some horizontal lines on the real canvas
  for (let y = rand(10); y < canvas.height; y += rand(10)) {
    ctx.fillRect(0, y, canvas.width, rand(3))
  }
}

window.tvstatic = tvstatic

const fadeInStatic = function () {
  $('.tvstatic').fadeIn(1000)
}

const fadeOutStatic = function () {
  $('.tvstatic').fadeOut(1000)
}

const addHandlers = () => {
  $(document).ready(initialize)
  $(window).resize(resize)
}

module.exports = {
  addHandlers,
  fadeInStatic,
  fadeOutStatic
}
