let video = document.querySelector(".video-container");
let myVideo = document.querySelector("#myvideo");
let id = new URLSearchParams(window.location.search).get("id");

const body = document.querySelector(".play-container");

fetch("http://localhost:3000/movies/" + id)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    body.innerHTML += `
     <!-- play img -->
      <img
        src="../html/assets/img/${data.desc}"
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
          <span>${data.genre}</span>
          <span>Adventure</span>
          <span>${data.view}</span>
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
       <video id="myvideo" src="../html/assets/img/${data.trailer}" controls></video>
        <!-- close video -->
        <i class="bx bx-x close-video"></i>
      </div>
      </div>

`;
  });

// const aboutInfo = document.querySelector(".about-movie container");

// fetch("http://localhost:3000/movies/" + id)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     aboutInfo.innerHTML += `
     
//       <h2>${data.title}</h2>
//       <p>${data.inform}</p> 
//       <h2 class="cast-heading">Movie Cast</h2>
//       <div class="cast">
//       <div class="cast-box">
//       <img src="../html/assets/img/${item.image}" alt="" class="cast-img">
//       <span class="cast-title">${item.name}</span>
//       </div>
//       </div>

// `;
//   });


  // const about = document.querySelector(".about-movie container");

  // fetch("http://localhost:3000/movies/" + id)
  // .then((res) => res.json())
  // .then((data) => {
  //   data.inform.forEach((item) => {
  //     console.log('about')
  //     about.innerHTML += `

  //     <h2>${data.title}</h2>
  //     <p>${data.inform}</p> 
  //     <h2 class="cast-heading">Movie Cast</h2>

  //     <div class="cast">
  //     <div class="cast-box">
  //             <img src="/html/assets/img/${item.image}" alt="" class="cast-img">
  //             <span class="cast-title">${item.name}</span>
  //           </div>
  //     </div>

  //     `;
  //   })
  // });

const cast = document.querySelector(".cast");

fetch("http://localhost:3000/movies/" + id)
  .then((res) => res.json())
  .then((data) => {
    data.actors.forEach((item) => {
      cast.innerHTML += `
            <div class="cast-box">
              <img src="/html/assets/img/${item.image}" alt="" class="cast-img">
              <span class="cast-title">${item.name}</span>
            </div>
        `;
    });
  });

let playButton = document.querySelector(".play-movie");
let closeBtn = document.querySelector(".close-video");

playButton.onclick= () => {
  video.classList.add("show-video");
  myVideo.play();
};
closeBtn.onclick = () => {
  video.classList.remove("show-video");
  myVideo.pouse();
};
