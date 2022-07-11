function mensagem() {
    const form = document.querySelector('.form');
    form.onsubmit = function (evento) {
        evento.preventDefault();
        const email = document.querySelector('.email');
        const nome = document.querySelector('.nome');
    }
    
    confirm(`Olá, ${nome.value} tudo bem? Enviamos a oferta para ${email.value}`);
}

