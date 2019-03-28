

let headingBorder = document.querySelectorAll("img")
headingBorder.forEach( element  => element.addEventListener('mousemove', ( event =>
    event.target.style.border = "8px solid orange"
)));