let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myVideo = document.querySelector('#myvideo');
let closeBtn = document.querySelector('.close-video');

playButton.onclick = () => {
    video.classList.add("show-video");
    myVideo.play()
}
closeBtn.onclick = () => {
    video.classList.remove("show-video");
    myVideo.pouse()
}