//SELECTORS
const container = document.getElementsByClassName("container");
const cube = document.querySelector(".cube");
const preload = document.querySelector(".first-screen");
const teclas = document.querySelector(".teclas")
const center= document.querySelector(".section-center");

//audio

//Loading SCREEN
window.addEventListener("load", function(){
    cube.style.position='absolute';
    cube.style.left=0;
    cube.style.top=0;

})
// PRELOAD SCREEN
//PRESS ANY KEY
document.addEventListener("keydown", function(){
    
    hide(preload);
    hide(cube);
    hide(teclas);
    center.classList.add("background2")

    
})

function hide(element){
    if(element===preload){
    element.classList.add("hide");
    }
    else{
        element.classList.remove("hide")
    }
}

//main game load
let moveBy = 10;


document.addEventListener("keydown", function(e){
   switch(e.key){
    case "ArrowLeft":
        cube.style.left= parseInt(cube.style.left) - moveBy + 'px';
        break;
    case "ArrowRight":
        cube.style.left= parseInt(cube.style.left) + moveBy + 'px';
         break;
    case "ArrowUp":
        cube.style.top= parseInt(cube.style.top) - moveBy + 'px';
         break
    case "ArrowDown":
        cube.style.top= parseInt(cube.style.top) + moveBy + 'px';
         break
   }
})
