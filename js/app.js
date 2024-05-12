const $ = document

const audioElem = $.querySelector("#music")
const pervBtn = $.querySelector(".prev-btn")
const playBtn = $.querySelector(".play-btn")
const nextBtn = $.querySelector(".next-btn")
const nameMusic = $.querySelector("#name-Music")
const artistName = $.querySelector("#artist-Name")

let songs = [
    {src:"music/1.mp3", artist: "Navid", name: "Nakhon"},
    {src:"music/2.mp3", artist: "Navid", name: "Bala"},
    {src:"music/3.mp3", artist: "Navid", name: "Be Vaght Non"},
    {src:"music/4.mp3", artist: "Navid", name: "Farsh"},
    {src:"music/5.mp3", artist: "Navid", name: "Kando"},
    {src:"music/6.mp3", artist: "Navid", name: "Ejaze"},
    {src:"music/7.mp3", artist: "Navid", name: "Chak"},
    {src:"music/8.mp3", artist: "Navid", name: "Maahi"},
    {src:"music/9.mp3", artist: "Navid", name: "Soboone"},
    {src:"music/10.mp3", artist: "Navid", name: "Saaghi"},
    {src:"music11.mp3", artist: "Navid", name: "Falak"},
    {src:"music/12.mp3", artist: "Navid", name: "Charkh"},
    {src:"music/13.mp3", artist: "Navid", name: "Raah Aahan Shahrak Naft"}
]

let songSelect = 0

let isPlaying = false

function playHandler() {
    if (!isPlaying) {
        playBtn.innerHTML = "Pause"
        isPlaying = true

        artistName.innerHTML = songs[songSelect].artist
        nameMusic.innerHTML = songs[songSelect].name
        
        audioElem.play()
    } else {
        playBtn.innerHTML = "Play"
        isPlaying = false
        
        artistName.innerHTML = songs[songSelect].artist
        nameMusic.innerHTML = songs[songSelect].name
        
        audioElem.pause()
    }
}

function pervHandler () {
    songSelect--
    
    if (songSelect < 0){
        songSelect = songs.length - 1
    }

    audioElem.src = songs[songSelect].src

    artistName.innerHTML = songs[songSelect].artist
    nameMusic.innerHTML = songs[songSelect].name
    
    audioElem.play()
    isPlaying = true
    playBtn.innerHTML = "Pause"
}

function nextHandler () {
    songSelect++
    
    if (songSelect > songs.length - 1){
        songSelect = 0
    }

    audioElem.src = songs[songSelect].src

    artistName.innerHTML = songs[songSelect].artist
    nameMusic.innerHTML = songs[songSelect].name
    
    audioElem.play()
    isPlaying = true
    playBtn.innerHTML = "Pause"
}

pervBtn.addEventListener("click", pervHandler)
playBtn.addEventListener("click", playHandler)
nextBtn.addEventListener("click", nextHandler)