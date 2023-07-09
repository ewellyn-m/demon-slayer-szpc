//objetivo 1 passo 1

const personagens = document.querySelectorAll('.personagem');

//passo 2

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //passo3
       const personagemSelecionado = document.querySelector('.selecionado');
       personagemSelecionado.classList.remove('selecionado');

       personagem.classList.add('selecionado');

       //objetivo2 passo 1
       const imagemPersonagemGrande = document.querySelector('.personagem-grande');
       

       //passo2
       const idPersonagem = personagem.attributes.id.value;
       imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}.png`;

       //passo 3
       const nomePersonagem = document.getElementById('nome-personagem');
       nomePersonagem.innerText = personagem.getAttribute('data-name');


       //passo4
       const descricaoPersonagem =document.getElementById('descricao-personagem');
       descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})