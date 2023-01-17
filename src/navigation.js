let menu = document.querySelector("nav")
console.log(menu)
document.querySelector(".header__hamburgermenu").onclick = () => {
    console.log("jo")
    menu.classList.toggle("active")
}