
let table = document.querySelector("table");






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
