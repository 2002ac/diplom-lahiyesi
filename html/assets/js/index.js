var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
loop: true,
});

const movieContent = document.querySelector(".movies-content")

const getMovies = function(){
  movieContent.innerHTML =""
  fetch("http://localhost:3000/movies")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      movieContent.innerHTML += `
      <div class="movie-box">
      <img
        src="../html/assets/img/movelistitem/${item.image}"
        alt=""
      />
      <div class="box-movie-text">
        <h2 class="Box-movie-title">${item.title}</h2>
        <span class="s-movie-type">${item.genre}</span>
        <a href="../html/details-play.html?id=${item.id}" class="watch-btn play-btn">
          <i class="bx bx-right-arrow"></i>
        </a>
      </div>
    </div>
      `
    })
  })
}

getMovies()


const getCartss = function(){
  movieContent.innerHTML =""
  fetch("http://localhost:3000/movies")
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      movieContent.innerHTML += `
      <div class="swiper-slide">
            <img
              src="${item.image}"
              alt=""
            />
            <div class="box-movie-text">
              <h2 class="Box-movie-title">${item.title}</h2>
              <span class="s-movie-type">${item.genre}</span>
              <a href="../html/details-play.html?id=${item.id}" class="watch-btn play-btn">
                <i class="bx bx-right-arrow"></i>
              </a>
            </div>
          </div>
      `
    })
  })
}