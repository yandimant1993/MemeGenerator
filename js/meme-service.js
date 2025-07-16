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
    },
    {
        id: 6
        , url: 'img/6.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 7
        , url: 'img/7.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 8
        , url: 'img/8.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 9
        , url: 'img/9.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 10
        , url: 'img/10.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 11
        , url: 'img/11.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 12
        , url: 'img/12.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 13
        , url: 'img/13.jpg'
        , keyWords: ['funny', 'cat']
    }
    ,
    {
        id: 14
        , url: 'img/14.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 15
        , url: 'img/15.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 16
        , url: 'img/16.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 17
        , url: 'img/17.jpg'
        , keyWords: ['funny', 'cat']
    },
    {
        id: 18
        , url: 'img/18.jpg'
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

function getMeme() {
    return gMeme
}