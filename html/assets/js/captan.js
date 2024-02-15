let playButton = document.querySelector(".play-movie");
let closeBtn = document.querySelector(".close-video");
let video = document.querySelector(".video-container");
let myVideo = document.querySelector("#myvideo");
console.log(playButton);
playButton.onclick = () => {
  console.log("hdjsds");
  video.classList.add("show-video");
  myVideo.play();
};
closeBtn.onclick = () => {
  video.classList.remove("show-video");
  myVideo.pause();
};

getData();