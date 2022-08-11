

const iconoMenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

    iconoMenu.addEventListener('click', () =>{

        //ALTERNAR ESTILOS PARA EL MENU Y EL BODDY
        menu.classList.toggle('active');


    })