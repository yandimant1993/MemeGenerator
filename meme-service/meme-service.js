'use strict'


var gImgs = [
    {
        id: 1
        , url: 'img/1.jpg'
        , keyWords: ['funny', 'cat']
    }
    ,
    {
        id: 2
        , url: 'img/2.jpg'
        , keyWords: ['funny', 'cat']
    }
    ,
    {
        id: 3
        , url: 'img/3.jpg'
        , keyWords: ['funny', 'cat']
    }
    ,
    {
        id: 4
        , url: 'img/4.jpg'
        , keyWords: ['funny', 'cat']
    }
    ,
    {
        id: 5
        , url: 'img/5.jpg'
        , keyWords: ['funny', 'cat']
    }
]

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'i sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}

var gKeyWordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme(){
    return gMeme
}