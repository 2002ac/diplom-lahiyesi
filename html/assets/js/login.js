const login_btn = document.getElementById("login_btn");
const register_btn = document.getElementById("register_btn");
const btn = document.getElementById("btn");
const login = document.getElementById("Login");
const register = document.getElementById("Register");

register_btn.onclick = function () {
  login.style.left = "-400px";
  register.style.left = "50px";
  btn.style.left = "110px";
  login_btn.style.color = "black";
  register_btn.style.color = "white";
};

login_btn.onclick = function () {
  login.style.left = "50px";
  register.style.left = "450px";
  btn.style.left = "0px";
  register_btn.style.color = "black";
  login_btn.style.color = "white";
};
const inp_log_user = document.getElementById("inp_log_user");

const inp_log_password = document.getElementById("inp_log_password");

const inp_login_btn = document.getElementById("inp_login_btn");
console.log(inp_login_btn);

function getUser() {
  fetch("http://localhost:3000/login")
    .then((res) => res.json())
    .then((data) => {
      // if (data.find((x) =>x.username === inp_log_user.value && x.parol === inp_log_password) === undefined) {
      //   logArr.push(data)
      // }
      // localStorage.setItem("login", JSON.stringify(logArr));
      data.forEach((element) => {
       if(inp_log_user.value==element.user){
        window.location.href = "index.html";
       }
      });
    });
}

const inp_register_btn = document.querySelector("#inp_register_btn");

const inp_reg_user = document.querySelector("#inp_reg_user");

const inp_reg_password = document.querySelector("#inp_reg_password");

const inp_reg_email = document.querySelector("#inp_reg_email");


function addUser() {
    fetch("http://localhost:3000/login", {
        method: "post",
        headers: {
          Accept: "application.json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user:  `${inp_reg_user.value}`,
          password: `${inp_reg_password.value}`,
          email: `${inp_reg_email.value}`,
        }),
        cache: "default",
      });
  }

inp_login_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getUser();
});
console.log(inp_register_btn);
inp_register_btn.addEventListener("click", () => {
    console.log(inp_reg_user.value);
    console.log("Salam");
    addUser();
  });