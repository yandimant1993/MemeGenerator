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
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
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
        txt: '',
        size: 20,
        align: 'center',
        color: '#ffffff',
        lineTextColor: '#000000',
        pos: { x: gElCanvas.width / 2, y: 100 + gMeme.lines.length * 50 }
    }
    gMeme.lines.push(newLine)
}

function deleteLine() {
    if (!gMeme.lines.length) return;
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    gMeme.selectedLineIdx = Math.min(gMeme.selectedLineIdx, gMeme.lines.length - 1);
    if (!gMeme.lines.length) addNewLine(), gMeme.selectedLineIdx = 0;
}

