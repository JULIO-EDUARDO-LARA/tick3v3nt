//INICIO SLIDER
const btn_left = document.querySelector('.btn-left');
const btn_right = document.querySelector('.btn-right');
const slider = document.querySelector('#slider');
const slider_section = document.querySelectorAll('.slider-section');

let position_slider = 0;
let cont = 0;
let cantImg = slider_section.length;
let anchoImg = 100 / cantImg;

btn_left.addEventListener("click", e => deslizarIzquierda());
btn_right.addEventListener("click", e => deslizarDerecha());

setInterval(() => {
    deslizarDerecha();
},2500);

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


//FIN SLIDER