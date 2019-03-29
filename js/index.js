
let headingBorder = document.querySelectorAll("img")
headingBorder.forEach( element  => element.addEventListener('mousemove', ( event =>
    event.target.style.border = "8px solid darkorange"
)));

const navContent = {
nav: {
    "nav-item-1": "Home",
    "nav-item-2": "About Us",
    "nav-item-3": "Contact",
}
}

const headerNav = document.querySelectorAll("a");
headerNav[0].textContent = navContent.nav["nav-item-1"];
headerNav[1].textContent = navContent.nav["nav-item-2"];
headerNav[2].textContent = navContent.nav["nav-item-3"];
console.log(navContent);
