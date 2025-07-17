'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    var strHtml = ''
    const imgEl = document.querySelector('.gallery')
    for (var i = 0; i < 18; i++) {
        strHtml += `<img src="${gImgs[i].url}" onclick="onImgSelect('${gImgs[i].url}', '${gImgs[i].id}')">`;
    }
    imgEl.innerHTML = strHtml
}


function onImgSelect(imgUrl, picId) {
    var elEditor = document.querySelector('.editor')
    elEditor.classList.remove('hidden')
    var galleryEl = document.querySelector('.gallery')
    galleryEl.style.display = 'none'
    const canvasEl = document.querySelector('.container-canvas')
    canvasEl.classList.remove('hidden')
    setImage(imgUrl)
    setPicId(picId)
    gCurrUrl = imgUrl
}


function backToGallery() {
    const elEditor = document.querySelector('.editor')
    elEditor.classList.add('hidden')
    const canvEl = document.querySelector('.container-canvas')
    canvEl.classList.add('hidden')
    const galleryEl = document.querySelector('.gallery')
    galleryEl.style.display = 'block'
    renderGallery()
}