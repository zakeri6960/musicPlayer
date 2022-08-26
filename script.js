let musics = [{
    title: 'Mardomak',
    cover: 'image/Reza-Pishro-Mardomak-Ft-Babak-415x415-1.jpg',
    audio: new Audio("music/Reza Pishro - Mardomak (Ft Babak).mp3")
}]

let musicTitle = document.querySelector("#music-name")
let musicTime = document.querySelector("#music-time")
let musicCover = document.querySelector("#music-cover")
let next = document.querySelector("#next-btn")
let back = document.querySelector("#pre-btn")
let play = document.querySelector("#play-btn")

let currentMusic = 0;
let audio = musics[currentMusic].audio()
musicTitle.innerHTML = musics[currentMusic].title
musicCover.src = musics[currentMusic].cover