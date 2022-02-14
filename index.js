const botaoMenu = document.querySelector('.cabecalho__menu');

const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', ()=> {
menu.classList.toggle('menu-lateral--ativo')
})




const botoesLink = document.querySelector('.menu-lateral__link');

const botoesAtivo = document.querySelector('.menu-lateral__link--inicio')

botoesLink.addEventListener('mouseover', ()=> {
botoesAtivo.classList.add('menu-lateral__link--ativo')
})

//botoesLink.addEventListener('mouseout', ()=> {
   // botoesAtivo.classList.remove('menu-lateral__link--ativo')
    //})

    const botoesLink2 = document.querySelector('.menu-lateral__link--picos');


botoesLink2.addEventListener('mouseover', ()=> {
botoesLink2.classList.add('menu-lateral__link--ativo')
})

botoesLink2.addEventListener('mouseout', ()=> {
    botoesLink2.classList.remove('menu-lateral__link--ativo')
    })
