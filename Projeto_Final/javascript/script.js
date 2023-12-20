let navbar = document.getElementById("navbar");
window.addEventListener("scroll", () =>{
    if (window.scrollY  >= 200) {
        navbar.classList.add("fixed-navbar");
    } else {
        navbar.classList.remove("fixed-navbar");
    }
});