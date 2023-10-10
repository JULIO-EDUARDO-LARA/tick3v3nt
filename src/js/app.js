/*
0. LOGIN
1. SLIDER
2. EFECTO PARA TEXTO CIRCULAR EN BOTONES
3. EFECTOS PARA MENU DE LA NAVEGACION
*/


window.onload = function () {



    //0. LOGIN -----------------------------------------------------
    const loginShow = document.querySelector('.btnHeader');
    const sectionLogin = document.querySelector('.login');

    const cerrarLogin = document.querySelector('.login__cierre');

    if(loginShow != null){
        loginShow.addEventListener('click', (e)=>{
            e.preventDefault();
            sectionLogin.classList.add('login--show');
        });
    }

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

    if( btn_left != null || btn_right != null ){
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
    //3. EFECTOS PARA MENU DE LA NAVEGACION-----------------------------------------------------

    const burguerMenu = document.querySelector('.burguerMenu');
    const burguerMenuContainer = document.querySelector('.container__burgerMenu');


    const listaContainer = document.querySelector('.lista__container');
    const listaItems = document.querySelectorAll('.lista__item');
    const listassubContainer = document.querySelectorAll('.lista__subContainer');

    


    if(burguerMenu != null){

        burguerMenu.addEventListener('click', ()=>{
            listaContainer.classList.toggle('lista__container--show');
            burguerMenuContainer.classList.toggle('container__burguerMenu--click');
        });  
   
    }
    //ROTAR FLECHA DE ITEMS
    //DESPLEGAR LA SUBLISTA
    if(listaItems != null){
        listaItems.forEach(lista_item => {
            lista_item.addEventListener('click', ()=>{
                lista_item.classList.toggle('lista__item--click');
                let height = 0;
                let sublistaContainer = lista_item.nextElementSibling;

                if(sublistaContainer.scrollHeight == "0"){
                    height = sublistaContainer.scrollHeight;
                }
                sublistaContainer.style.height = `${height}px`;


            });
        });
    }
    // if(listassubContainer != null){
    //     listassubContainer.forEach(lista_subContainer => {
    //         lista_subContainer.addEventListener('click', ()=>{
    //             lista_subContainer.classList.toggle('lista__subContainer--click');
    //         });
    //     });
    // }
    // lista_itemsLinksDesplegables.forEach(itemsLinksDesplegables => {
    //     itemsLinksDesplegables.addEventListener('click', (e)=>{
    //         e.preventDefault();
    //         subListaContainer.classList.toggle('sublista__container--show');
    //     });
    // });


}
