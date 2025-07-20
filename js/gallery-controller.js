'use strict'

function onInit() {
    hideEditor()
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
    const elEditor = document.querySelector('.editor-layout')
    elEditor.style.display = 'grid'
    var galleryEl = document.querySelector('.gallery')
    galleryEl.style.display = 'none'
    setImage(imgUrl)
    setPicId(picId)
    gCurrUrl = imgUrl
}


function backToGallery() {
    const elGallery = document.querySelector('.gallery')
    elGallery.style.display = 'grid'
    const elEditor = document.querySelector('.editor-layout')
    elEditor.style.display = 'none'
    renderGallery()
}

function onSetTextAlign(txt) {
    const inputEl = document.querySelector('.on-canvas')
    if (inputEl) inputEl.style.textAlign = txt
    gMeme.lines[gMeme.selectedLineIdx].align = txt
    renderMeme(gCurrUrl)
}

function hideEditor() {
    const editorEl = document.querySelector('.editor-layout')
    editorEl.style.display = 'none'
}

function onToggleMenu() {
  const menu = document.querySelector('.nav-menu')
  menu.style.display = 'none'
}