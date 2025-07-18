'use strict'

const gElCanvas = document.querySelector('.canvas-picture')
const gCtx = gElCanvas.getContext('2d')
var gCurrUrl

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Insert your text',
            size: 20,
            color: 'black',
            pos: { x: gElCanvas.width / 2, y: 100 },
            lineTextColor: 'black'
        }
    ]
}

var gKeyWordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme() {
    return gMeme
}


function setLineTxt(txt,idx) {
    gMeme.selectedLineIdx = idx
    gMeme.lines[idx].txt = txt
    renderMeme(gCurrUrl)
}

function setPicId(id) {
    gMeme.selectedImgId = id
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme(gCurrUrl)
}

function changeFontSize(fontSize) {
    gMeme.lines[gMeme.selectedLineIdx].size = +fontSize
    renderMeme(gCurrUrl)
}

function setLineTextColor(lineColor) {
    gMeme.lines[gMeme.selectedLineIdx].lineTextColor = lineColor
    renderMeme(gCurrUrl)
}

function addNewLine() {
    const newLine = {
        txt: 'Insert your text',
        size: 20,
        color: 'black',
        pos: { x: gElCanvas.width / 2, y: gElCanvas.height / 2 },
        lineTextColor: 'black'
    }
    gMeme.lines.push(newLine)
    renderMeme(gCurrUrl)
}


