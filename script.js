let r = document.getElementById("txt")
let ra = document.getElementById("but")
let o = document.getElementById("job")
let exp = document.getElementById("exp")
let desc = document.getElementById("desc")

let imper = document.getElementById('persimg')
let oa = document.getElementById("twitter")
let ol = document.getElementById("linkedin")
let om = document.getElementById("github")

ra.onclick = function() {
    localStorage.setItem("personalimage", imper.value)
    localStorage.setItem("name", r.value)
    localStorage.setItem("job", o.value)
    localStorage.setItem("experience", exp.value)
    localStorage.setItem("description", desc.value)
    localStorage.setItem("twitter", oa.value)
    localStorage.setItem("linkedin", ol.value)
    localStorage.setItem("github", om.value)

    /*localStorage.setItem("twitter", oa.value)
    localStorage.setItem("fbook", ot.value)
    localStorage.setItem("insta", ol.value)
    localStorage.setItem("github", om.value)
    localStorage.setItem("persimage", ommi.value)
        //localStorage.setItem("personal", uio)*/


    window.open('template1/index.html')
}