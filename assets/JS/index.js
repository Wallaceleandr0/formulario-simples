function meuEscopo() {
    const form = document.querySelector('.form');
    form.onsubmit = function (evento) {
        evento.preventDefault();
        const email = document.querySelector('.email');
        const nome = document.querySelector('.nome');
    }
    
    confirm(`Olá, ${nome.value}, tudo bem? Seu email é ${email.value}?`);
}

