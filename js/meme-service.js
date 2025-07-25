'use strict'
const smiles = ['😂', '😘', '❤️', '😍', '🤩']
const gElCanvas = document.querySelector('.canvas-picture')
const gCtx = gElCanvas.getContext('2d')
var gCurrUrl
var gTextAlign = 'center'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Insert your text here',
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


function setLineTxt(txt) {
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
    var newY = 100
    if (gMeme.lines.length > 0) {
        newY = gMeme.lines[gMeme.lines.length - 1].pos.y + 30
    }
    const newLine = {
        txt: 'insert text',
        size: 20,
        color: 'black',
        pos: { x: gElCanvas.width / 2, y: newY + 50 },
        lineTextColor: 'black'
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    renderMeme(gCurrUrl)
}

function DeleteLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = Math.max(0, gMeme.selectedLineIdx - 1)
    renderMeme(gCurrUrl)
}

function onCanvasClick(ev) {
    const { offsetX, offsetY } = ev
    const clickedIdx = gMeme.lines.findIndex(line => {
        const dx = Math.abs(line.pos.x - offsetX)
        const dy = Math.abs(line.pos.y - offsetY)
        return dx < 100 && dy < line.size
    })

    if (clickedIdx !== -1) {
        gMeme.selectedLineIdx = clickedIdx
    }
}

function addSmiley(smiley) {
    gMeme.lines[gMeme.selectedLineIdx].txt += smiley
    renderMeme(gCurrUrl)
}

function randomize() {
    const randMemeIdx = getRandomInt(0, 19)
    const picUrl = gImgs[randMemeIdx].url
    gCurrUrl = picUrl
    onImgSelect(gCurrUrl, gImgs[randMemeIdx].id)
}

function SetTextAlign(txt) {
    const inputEl = document.querySelector('.on-canvas')
    if (inputEl) inputEl.style.textAlign = txt

    gMeme.lines[gMeme.selectedLineIdx].align = txt
    renderMeme(gCurrUrl)
}


