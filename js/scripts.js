let button=document.querySelector(".site-humburger");
let nav=document.querySelector(".navigation-container")

button.onclick=function(){
      button.classList.toggle("hum-on");
      nav.classList.toggle("nav-off")
}