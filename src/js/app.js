/*
0. LOGIN
1. SLIDER
2. EFECTO PARA TEXTO CIRCULAR EN BOTONES
3. EFECTOS PARA MENU DE LA NAVEGACION INTERFAZ DE USUARIO
*/
window.onload = function () {

    //0. LOGIN -----------------------------------------------------
    const loginShow = document.querySelector('.btnHeader');
    const sectionLogin = document.querySelector('.login');

    const cerrarLogin = document.querySelector('.login__cierre');

    if(loginShow){
        loginShow.addEventListener('click', (e)=>{
            e.preventDefault();
            sectionLogin.classList.add('login--show');
        });
    }

    if(cerrarLogin){
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
    console.log(circle)

    if(circle){
        
        circleArray = circle.textContent.split('');
        if(circleArray){
            circle.textContent = '';

            for(var i = 0; i < circleArray.length; i++){
                circle.innerHTML += '<span class="span">'+circleArray[i]+'</span>';
            }   
        }
     
    }

    //3. EFECTOS PARA MENU DE LA NAVEGACION USUARIOS-----------------------------------------------------

    const botonesClick1 = document.querySelectorAll('.lista__btn--1click');
    const botonesClick2 = document.querySelectorAll('.lista__btn--2click');
    const enlacesNavDeploy = document.querySelectorAll('.lista__link--click');

    if(enlacesNavDeploy){
        enlacesNavDeploy.forEach(enlaceNavDeploy => {
            enlaceNavDeploy.addEventListener('click', (e) => {
                e.preventDefault();
            })
        })
    }
    
    if(botonesClick1){
        botonesClick1.forEach(botonClick1 => {
            botonClick1.addEventListener('click', (e)=> {
                botonClick1.classList.toggle('icon__container--rotate');

                let claseBtn1regular = "lista__btn--1regular";
                let btn_1_clickeado = e.target;

                let arrayClassClick1 = btn_1_clickeado.classList.value;
                let largoClases = arrayClassClick1.split(" ").length;
                let nombre = '';

                for(var i=0; i < largoClases;i++){
                    nombre = arrayClassClick1.split(" ")[i];
                    if(nombre === claseBtn1regular){
                        // BLOQUE USUARIO REGULAR PARA BOTON DE MENU NIVEL1
                        let showLista2_regular = document.querySelector('.lista__mostrar--2regular');

                        let altura2 = 0;
                        let showLista1_regular = btn_1_clickeado.nextElementSibling;
                        console.log(showLista1_regular);

                        let catchHeightShowLista1_regular  = showLista1_regular.clientHeight;
                        let catchMinHeightShowLista1_regular  = showLista1_regular.scrollHeight;

                        if(catchHeightShowLista1_regular  == "0"){
                            altura2 = catchMinHeightShowLista1_regular;
                        }else{showLista2_regular.style.height = `0px`;}

                        showLista1_regular.style.height = `${altura2}px`;
                        return;
                    }
                }
                
                // BLOQUE PROMOTOR PARA BOTON DE MENU NIVEL1
                let showLista2_promotor = document.querySelector('.lista__mostrar--2promotor');

                let altura = 0;
                let showLista1_promotor = btn_1_clickeado.nextElementSibling;
                let catchHeightShowLista1_promotor = showLista1_promotor.clientHeight;
                let catchMinHeightShowLista1_promotor = showLista1_promotor.scrollHeight;

                if(catchHeightShowLista1_promotor == "0"){
                    altura = catchMinHeightShowLista1_promotor;
                }else{showLista2_promotor.style.height = `0px`;}

                showLista1_promotor.style.height = `${altura}px`;


            })
        })
    }

    if(botonesClick2){
        botonesClick2.forEach(botonClick2 => {
    
            botonClick2.addEventListener('click', (e)=> {
                botonClick2.classList.toggle('icon__container--rotate');

                let claseBtn2promotor = "lista__btn--2promotor";
                let claseBtn2regular = "lista__btn--2regular";
                let btn_2_clickeado = e.target;


                let arrayClassClick2 = btn_2_clickeado.classList.value;
                let largoClases = arrayClassClick2.split(" ").length;
                let nombre = '';
                
                for(var i=0; i < largoClases;i++){
                    nombre = arrayClassClick2.split(" ")[i];
                    if(nombre === claseBtn2promotor){
                        

                        // BLOQUE USUARIO PROMOTOR PARA BOTON DE MENU2
                        let showLista1_promotor = document.querySelector('.lista__mostrar--1promotor');
                        let alturaShowLista1_promotor = showLista1_promotor.clientHeight;

                        let altura = 0;
                        let showLista2_promotor = btn_2_clickeado.nextElementSibling;
                        let catchHeightShowLista2_promotor = showLista2_promotor.clientHeight;
                        let catchMinHeightShowLista2_promotor = showLista2_promotor.scrollHeight;

                        if(catchHeightShowLista2_promotor == "0"){
                            altura = catchMinHeightShowLista2_promotor;
                            alturaShowLista1_promotor = alturaShowLista1_promotor + altura;
                        }else{alturaShowLista1_promotor = alturaShowLista1_promotor - catchMinHeightShowLista2_promotor;}

                        showLista1_promotor.style.height = `${alturaShowLista1_promotor}px`;
                        showLista2_promotor.style.height = `${altura}px`;



                    } 
                    if(nombre === claseBtn2regular){
                        console.log('esto es un ' + nombre);

                        // BLOQUE USUARIO REGULAR PARA BOTON DE MENU2
                        let showLista1_regular = document.querySelector('.lista__mostrar--1regular');
                        let alturaShowLista1_regular = showLista1_regular.clientHeight;

                        let altura2 = 0;
                        let showLista2_regular = btn_2_clickeado.nextElementSibling;
                        let catchHeightShowLista2_regular = showLista2_regular.clientHeight;
                        let catchMinHeightShowLista2_regular = showLista2_regular.scrollHeight;

                        if(catchHeightShowLista2_regular == "0"){
                            altura2 = catchMinHeightShowLista2_regular;
                            alturaShowLista1_regular = alturaShowLista1_regular + altura2;
                        }else{alturaShowLista1_regular = alturaShowLista1_regular - catchMinHeightShowLista2_regular;}

                        showLista1_regular.style.height = `${alturaShowLista1_regular}px`;
                        showLista2_regular.style.height = `${altura2}px`;
                    } 
                }
                




            })
     

        })

    }



}
