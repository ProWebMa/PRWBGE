let r = document.getElementById("nm")
let ra = document.getElementById("jb")
let ral = document.getElementById("des")
let y = document.querySelector('#perimg')
let yl = document.getElementById('pexp')
let twi = document.getElementById('twitter')
let lnk = document.getElementById('linkedin')
let git = document.getElementById('github')
let ul = document.querySelector("ul")

if (window.innerWidth > 800) {
    ul.classList.remove("nondisplay")
    ul.classList.add("display")
}
if (window.innerWidth < 800) {
    ul.classList.add("nondisplay")
    ul.classList.remove("display")
}

document.title = localStorage.getItem("name")
r.textContent = localStorage.getItem("name")
ra.textContent = localStorage.getItem("job")
yl.textContent = localStorage.getItem("experience")
ral.textContent = localStorage.getItem("description")

git.href = localStorage.getItem("github")
lnk.href = localStorage.getItem("linkedin")
twi.href = localStorage.getItem("twitter")

let yt = localStorage.getItem("personalimage")
y.setAttribute("src", yt)

document.querySelector("#menu").onclick = function() {

    if (ul.classList.contains('nondisplay')) {
        console.log(1)
        ul.classList.remove("nondisplay")
        ul.classList.add("display")
    } else if (ul.classList.contains("display")) {
        ul.classList.remove("display")
        ul.classList.add("nondisplay")
    } else {}
}

window.onresize = function() {
    if (window.innerWidth > 800) {
        ul.classList.remove("nondisplay")
        ul.classList.add("display")
    }
    if (window.innerWidth < 800) {
        ul.classList.add("nondisplay")
        ul.classList.remove("display")
    }
}