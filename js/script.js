const btnMenu = document.querySelector('#btn-menu');

btnMenu.addEventListener('click', function(event) {
    event.stopPropagation(); // impede que o clique feche imediatamente
    const mobileMenu = document.querySelector('#mobileMenu');
    mobileMenu.classList.toggle('active');
    const menuIcon = btnMenu.querySelector('i');
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-x');
    } else {
        menuIcon.classList.remove('fa-x');
        menuIcon.classList.add('fa-bars');
    }
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', function(event) {
    const mobileMenu = document.querySelector('#mobileMenu');
    // Só fecha se estiver aberto e o clique não for no menu nem no botão
    if (
        mobileMenu.classList.contains('active') &&
        !mobileMenu.contains(event.target) &&
        !btnMenu.contains(event.target)
    ) {
        mobileMenu.classList.remove('active');
        const menuIcon = btnMenu.querySelector('i');
        menuIcon.classList.remove('fa-x');
        menuIcon.classList.add('fa-bars');
    }
});





window.addEventListener('scroll', function() {
    let scrol = this.document.querySelector('#header-scrol');
    scrol.classList.toggle('rolagem', window.scrollY > 0);
});