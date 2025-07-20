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
    var elEditor = document.querySelector('.editor-layout')
    elEditor.classList.remove('hidden')
    var galleryEl = document.querySelector('.gallery')
    galleryEl.style.display = 'none'
    const canvasEl = document.querySelector('.container-canvas')
    setImage(imgUrl)
    setPicId(picId)
    gCurrUrl = imgUrl
}


function backToGallery() {
    const elEditor = document.querySelector('.editor-layout')
    elEditor.classList.add('hidden')
    const galleryEl = document.querySelector('.gallery')
    galleryEl.style.display = 'inline-block'
    renderGallery()
}

function onSetTextAlign(txt) {
    const inputEl = document.querySelector('.on-canvas')
    if (inputEl) inputEl.style.textAlign = txt
    gMeme.lines[gMeme.selectedLineIdx].align = txt
    renderMeme(gCurrUrl) 
}