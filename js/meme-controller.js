'use strict'

function renderMeme(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        drawImg(img)
        drawText()
    }
    gElCanvas.addEventListener('click', onCanvasClick)
}

function drawText() {
    const lines = gMeme.lines
    lines.forEach(line => {
        gCtx.font = `${line.size}px Arial`
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = line.lineTextColor
        gCtx.lineWidth = 1
        gCtx.textAlign = 'center'
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    })
}

function drawImg(img) {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function setImage(imgUrl) {
    renderMeme(imgUrl)
}

function onSetLineText(txt) {
    setLineTxt(txt)
}


function onDownloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onChangeColor(val) {
    setColor(val)
    renderMeme(gCurrUrl)
}

function onChangeFontSize(val) {
    changeFontSize(val)
    renderMeme(gCurrUrl)
}

function onChangeLineTextColor(colorLine) {
    setLineTextColor(colorLine)
}


//not working yet
function onDown(ev) {
    //* Get mouse/touch position relative to canvas
    const pos = getEvPos(ev)

    //* Exit if click/touch is not on the circle
    if (!isCircleClicked(pos)) return

    setCircleDrag(true)

    //* Store initial position for drag calculations
    gPrevPos = pos

    document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
    const { isDrag } = getCircle()
    // console.log('isDrag:', isDrag)
    if (!isDrag) return

    const pos = getEvPos(ev)

    //* Calculate distance moved from drag start position
    const dx = pos.x - gPrevPos.x
    const dy = pos.y - gPrevPos.y
    moveCircle(dx, dy)
    // setCirclePos(pos.x, pos.y)

    //* Update prev position for next move calculation
    gPrevPos = pos

    //* Redraw the canvas with updated circle position
    renderCanvas()
}

function onUp() {
    setCircleDrag(false)
    document.body.style.cursor = 'grab'
}

function onAddLine() {
    addNewLine()
    // createInputLine()
}





