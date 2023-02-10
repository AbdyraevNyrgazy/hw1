const input = document.querySelector("#email");
const check = document.querySelector(".check_email");
const result = document.querySelector("#result");
//
const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.(com|ru)$/


check.addEventListener("click", () => {
  console.log(regExp.test(input.value));
  if (regExp.test(input.value)) {
    result.innerText = "ok";
    result.style.color = "green";
  } else {
    result.innerText = "not ok";
    result.style.color = "red";
  }
});

const password = document.querySelector("#email");
const check_pass = document.querySelector(".check_password");
const text = document.querySelector(".pass_text");

const exp = /^[a-zA-Z0-9]{4}$/

check_pass.addEventListener("click", () => {
  console.log(exp.test(password.value));
  if (exp.test(password.value)) {
    text.innerText = "good";
    text.style.color = "green";
  } else {
    text.innerText = "error";
    text.style.color = "red";
  }
});

const soon = document.querySelector(".soon")

let position = 0

const goo = () => {
  if (position < 450){
      position++
      soon.style.left = `${position}px`
      setTimeout(goo,10 )
  }
}
goo ()