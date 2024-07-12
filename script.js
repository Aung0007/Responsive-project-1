

var typed = new Typed(".type",{
    strings:["", "Web Developer", "Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});



const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
