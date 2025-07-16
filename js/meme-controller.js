'use strict'

const gElCanvas = document.querySelector('.canvas-picture')
// const gCtx = gElCanvas.getContext('2d')

function onInit() {
    renderGallery()
}

function renderGallery() {
    var strHtml = ''
    const imgEl = document.querySelector('.gallery')
    for (var i = 0; i < 18; i++) {
        strHtml += `<img src="${gImgs[i].url}">`
    }
    imgEl.innerHTML = strHtml
}








// function () {
//     const imagesUrl = []
//     for (var i = 0; i < 12; i++) {
//         imagesUrl[i] = gImgs[i].url
//     }

//     imagesUrl.forEach((imgUrl, idx) => {
//         const img = new Image()
//         img.src = imgUrl
//         img.onload = () => {
//             drawImg(img, idx, imagesUrl.length)
//         }
//     })
// }


// function drawImg(img, idx, totalPictures) {
//     const picWidth = gElCanvas.width / totalPictures
//     const dist = picWidth * idx
//     gCtx.drawImage(img, dist, 0, picWidth, picWidth)
// }