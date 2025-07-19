'use strict'

const gElCanvas = document.querySelector('.canvas-picture')
const gCtx = gElCanvas.getContext('2d')
var gCurrUrl

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
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
    var newY = gMeme.lines[gMeme.lines.length - 1].pos.y
    createInputLine(newY)
    const newLine = {
        txt: '',
        size: 20,
        color: 'black',
        pos: { x: gElCanvas.width / 2, y: newY + 50 },
        lineTextColor: 'black'
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    renderMeme(gCurrUrl)
}

function createInputLine() {
    const input = document.createElement('input')
    const idx = gMeme.lines.length - 1
    const line = gMeme.lines[idx]
    input.className = 'on-canvas'
    input.type = 'text'
    input.value = line.txt
    input.placeholder = 'insert your text'
    input.style.position = 'absolute'
    input.style.top = `${line.pos.y}px`
    input.style.left = `${line.pos.x}px`
    input.style.transform = 'translate(-50%, -50%)'
    input.fontSize = line.size
    input.style.color = line.color
    input.style.textAlign = 'center'
    input.addEventListener('input', () => {
        setLineTxt(input.value, idx)
    })

    input.addEventListener('blur', () => {
        input.remove()
    })

    const canvasContEl = document.querySelector('.canvas-container')
    canvasContEl.appendChild(input)
}

function onCanvasClick(ev) {
    const { offsetX, offsetY } = ev
    const clickedLineIdx = gMeme.lines.findIndex(line => {
        const dx = Math.abs(line.pos.x - offsetX)
        const dy = Math.abs(line.pos.y - offsetY)
        return dx < 100 && dy < line.size // טווח סביר
    })

    if (clickedLineIdx !== -1) {
        gMeme.selectedLineIdx = clickedLineIdx
        createInputLine(clickedLineIdx)
    }
}



