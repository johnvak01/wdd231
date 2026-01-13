const navigation_button = document.getElementById("nav-btn");
const navigation_menu = document.getElementById("nav-bar");
navigation_button.addEventListener("click",()=>{
    navigation_button.classList.toggle("show");
    navigation_menu.classList.toggle("show");
}); 