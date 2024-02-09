let video = document.querySelector('.video-container');
let myVideo = document.querySelector('#myvideo');
let id = new URLSearchParams(window.location.search).get("id")

const body = document.querySelector('.play-container');

fetch("http://localhost:3000/movies/" + id)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    body.innerHTML += `
     <!-- play img -->
      <img
        src="../html/assets/img/filimler/${data.title}/${data.image}"
        alt=""
        class="play-img"
      />
      <!-- play text -->
      <div class="play-text">
        <h2>${data.title}</h2>
        <!-- reating -->
        <div class="reating">
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star"></i>
          <i class="bx bxs-star-half"></i>
        </div>
        <!-- tags -->
        <div class="tags">
          <span>Komedi</span>
          <span>Adventure</span>
          <span>4k</span>
        </div>
        <!-- trailer button -->
        <a href="#" class="watch-btn">
          <i class="bx bx-right-arrow"></i>
          <span>Watch the Trailer</span>
        </a>
      </div>
      <!-- play btn -->
      <i class="bx bx-right-arrow play-movie"></i>
      <!-- video container -->
      <div class="video-container">
        <!-- video box -->
        <div class="video-box">
       <video id="myvideo" src="../img/filimler/Barbie/barbivideo.mp4" controls></video>
        <!-- close video -->
        <i class="bx bx-x close-video"></i>
      </div>
      </div>
`
  })


// fetch("http://localhost:3000/movies/" + id)
//   .then(res => res.json())
//   .then(data => {
//     data.actors.forEach(item => {
//       body.innerHTML += `
//         <!-- about -->
//         <div class="about-movie container">
//           <h2>Barbie</h2>
//           <p>${data.desc}</p>
//            <!-- movie cast -->
//            <h2 class="cast-heading">Movie Cast</h2>
//            <div class="cast">
//             <div class="cast-box">
//               <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/margotRobbie.webp" alt="" class="cast-img">
//               <span class="cast-title">Margot Robbie</span>
//             </div>
//            </div>
//         </div>
//         `
//     })
//   })


let playButton = document.querySelector('.play-movie');
let closeBtn = document.querySelector('.close-video');

playButton.onclick = () => {
  video.classList.add("show-video");
  myVideo.play()
}
closeBtn.onclick = () => {
  video.classList.remove("show-video");
  myVideo.pouse()
}