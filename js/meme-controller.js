'use strict'

function renderMeme(imgUrl) {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
        drawImg(img)
        drawText()
    }
}

function drawText() {
    const lines = gMeme.lines
    lines.forEach(line => {
        gCtx.font = `${line.size}px Arial`
        gCtx.fillStyle = line.color
        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2
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






function onShowStarData(ev) {
    const { offsetX, offsetY, clientX, clientY } = ev
    // console.log('offsetX, offsetY:', offsetX, offsetY)
    // console.log('clientX, clientY:', clientX, clientY)

    const clickedStar = gStars.find(star => {
        // DONE: Find the only clicked star
        return (
            offsetX >= star.x && offsetX <= star.x + BAR_WIDTH &&
            offsetY >= star.y
        )
    })
    // console.log('clickedStar:', clickedStar)
    if (clickedStar) {
        // Todo: Fix modal location relative to screen
        openModal(clickedStar.name, clickedStar.rate, clientX, clientY)
    } else {
        closeModal()
    }
}
