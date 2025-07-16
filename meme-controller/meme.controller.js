'use strict'

const gElCanvas = document.querySelector('.canvas-picture')
const gCtx = gElCanvas.getContext('2d')

function onInit() {
    renderMeme()
}

function renderMeme() {
    var strHtml = ''
    var gallery = document.querySelector('.canvas-picture')
    for (var i = 0; i < 5; i++) {
        strHtml += `<img src = "${gImgs[i].url}">`
    }
    gallery.innerHTML = strHtml
}

