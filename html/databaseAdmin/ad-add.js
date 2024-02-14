let titleInput = document.querySelector(".title");
let genreInput = document.querySelector(".genre");
let imageInput = document.querySelector(".Image");
let movieBox = document.querySelector(".movie-box");
let table = document.querySelector("table");
let addBtn = document.querySelector(".addbtn");

const deleteEl = (id) => {
  axios.delete('http://localhost:3000/movies/'+id)
  window.location.reload()
}

imageInput.addEventListener('input', (e) => {
  let file = e.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        movieBox.src = reader.result;
    }
  }
})


fetch("http://localhost:3000/movies")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        table.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.genre}</td>
                <td>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                </td>
            </tr>
        `
    })
})


addBtn.addEventListener("click", function () {
  if (titleInput.value !== "" && genreInput.value !== "" && imageInput.value !== "") {
    axios.post(`http://localhost:3000/movies`, {
      title: titleInput.value,
      genre: genreInput.value,
      image: movieBox.src,
    })
    .then(res=>window.location='../index.html')
  }
  else{
    alert("Please select input value")
  }
})