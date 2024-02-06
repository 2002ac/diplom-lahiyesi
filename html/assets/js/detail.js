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

const body = document.querySelector('.cont');
let id = new URLSearchParams(window.location.search).get("id")
let playButton = document.querySelector('.play-movie');
let closeBtn = document.querySelector('.close-video');

fetch("http://localhost:3000/movies/" + id)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        body.innerHTML += `
    <div class="play-container container">
     <!-- play img -->
      <img
        src="../html/assets/img/movie-play-pages/barbie_slay_movie_poster_x1x.jpg_1909824714.webp"
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
       <video id="myvideo" src="../html/assets/img/videooo/Barbie _ Teaser Trailer 2.mp4" controls></video>
        <!-- close video -->
        <i class="bx bx-x close-video"></i>
      </div>
      </div>
    </div>

    
    <!-- about -->
    <div class="about-movie container">
      <h2>Barbie</h2>
      <p>${data.desc}</p>
       <!-- movie cast -->
       <h2 class="cast-heading">Movie Cast</h2>
       <div class="cast">
        <div class="cast-box">
          <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/margotRobbie.webp" alt="" class="cast-img">
          <span class="cast-title">Margot Robbie</span>
        </div>
        <div class="cast-box">
          <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/arianaGreeenblat.webp" alt="" class="cast-img">
          <span class="cast-title">Ariana Greenblatt</span>
        </div>
        <div class="cast-box">
          <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/KingsleyBenAdin.webp" alt="" class="cast-img">
          <span class="cast-title">Kingsley Ben-Adir</span>
        </div>
        <div class="cast-box">
          <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/ryanGosling.webp" alt="" class="cast-img">
          <span class="cast-title">Ryan Gosling</span>
        </div>
        <div class="cast-box">
          <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/IsaRea.webp" alt="" class="cast-img">
          <span class="cast-title">Isa Rea</span>
        </div>
        <!-- <div class="cast-box">
          <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/americaFerrea.webp" alt="" class="cast-img">
          <span class="cast-title">America Ferrea</span>
        </div> -->
        <div class="cast-box">
          <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/MichelCera.webp" alt="" class="cast-img">
          <span class="cast-title">Michel Cera</span>
        </div>
       </div>
    </div>
`
    })
    fetch("http://localhost:3000/movies/" + id)
    .then(res => res.json())
    .then(data => {
        data.actors.forEach(item => {
            body.innerHTML += `
        <!-- about -->
        <div class="about-movie container">
          <h2>Barbie</h2>
          <p>${data.desc}</p>
           <!-- movie cast -->
           <h2 class="cast-heading">Movie Cast</h2>
           <div class="cast">
            <div class="cast-box">
              <img src="/html/assets/img/movie-play pages/barbiyeoyuncular/margotRobbie.webp" alt="" class="cast-img">
              <span class="cast-title">Margot Robbie</span>
            </div>
           </div>
        </div>
        `
        })
    })