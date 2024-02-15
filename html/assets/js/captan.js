

const body = document.querySelector(".play-container");





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