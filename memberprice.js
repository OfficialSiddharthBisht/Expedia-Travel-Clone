import {navbar} from "./components/navbar.js"
import {footer} from "./components/footerModule.js"
import {getData, displayData} from "./showdata.js"

let one = document.getElementById("head")
let foot = document.getElementById("footer")
let container = document.getElementById("container")

one.innerHTML = navbar()
foot.innerHTML = footer()









