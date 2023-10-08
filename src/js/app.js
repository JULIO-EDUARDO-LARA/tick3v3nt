/*
0. LOGIN
1. SLIDER
2. EFECTO PARA TEXTO CIRCULAR EN BOTONES*/


window.onload = function () {



//0. LOGIN -----------------------------------------------------
const loginShow = document.querySelector('.btnHeader');
const sectionLogin = document.querySelector('.login');

const cerrarLogin = document.querySelector('.login__cierre');

loginShow.addEventListener('click', (e)=>{
    e.preventDefault();
    sectionLogin.classList.add('login--show');
});

if(cerrarLogin != null){
    cerrarLogin.addEventListener('click', (e)=>{
        e.preventDefault();
        sectionLogin.classList.remove('login--show');
    });
}



//1. SLIDER-----------------------------------------------------
const btn_left = document.querySelector('.btn-left');
const btn_right = document.querySelector('.btn-right');
const slider = document.querySelector('#slider');
const slider_section = document.querySelectorAll('.slider-section');

let position_slider = 0;
let cont = 0;
let cantImg = slider_section.length;
let anchoImg = 100 / cantImg;

if( btn_left != null && btn_left != null ){
    btn_left.addEventListener("click", e => deslizarIzquierda());
    btn_right.addEventListener("click", e => deslizarDerecha());

    setInterval(() => {
        deslizarDerecha();
    },2500);
}




function deslizarDerecha () {

    if(cont >= cantImg - 1){
        position_slider = 0;
        slider.style.transform = `translate(-${position_slider}%)`;
        slider.style.transition = `none`;
        cont = 0;
        return;
    }
    cont++;
    position_slider += anchoImg;
    slider.style.transform = `translate(-${position_slider}%)`;
    slider.style.transition = `all ease .6s`;
}

function deslizarIzquierda () {
    if(cont <= 0){
        position_slider = 100 - anchoImg;
        slider.style.transform = `translate(-${position_slider}%)`;
        slider.style.transition = `none`;
        cont = cantImg - 1;
        return;
    }
    cont--;
    position_slider -= anchoImg;
    slider.style.transform = `translate(-${position_slider}%)`;
    slider.style.transition = `all ease .6s`;
}

//2. EFECTO PARA TEXTO CIRCULAR EN BOTONES-----------------------------------------------------
    //colocar cada letra en una etiqueta <span>
    circle = document.querySelector(".texto-btn-icon");
   
    circleArray = circle.textContent.split('');
    
    circle.textContent = '';

    for(var i = 0; i < circleArray.length; i++){
        circle.innerHTML += '<span class="span">'+circleArray[i]+'</span>';
    }
}