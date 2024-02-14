let titleInput = document.querySelector(".title");
let genreInput = document.querySelector(".genre");
let imageInput = document.querySelector(".Image");
let movieBox = document.querySelector(".movie-box");
let table = document.querySelector("table");
let addBtn = document.querySelector(".addbtn");



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


fetch(" http://localhost:3000/login")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        table.innerHTML += `
            <tr>
                <td>${element.user}</td>
                <td>${element.password}</td>
                <td>${element.email}</td>
                <td>
                    <button onclick="deleteEl(${element.id})">Delete</button>
                </td>
            </tr>
        `
    })
})

const deleteEl = (id) => {
  axios.delete('http://localhost:3000/movies/' + id)
  window.location.reload();
}
