'use strict'

const gElCanvas = document.querySelector('.canvas-picture')
const gCtx = gElCanvas.getContext('2d')



function renderMeme(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => drawImg(img)
}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function setImage(imgUrl) {
    renderMeme(imgUrl)
}