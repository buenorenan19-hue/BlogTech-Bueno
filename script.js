// Seleção dos elementos do DOM
const likeBtn = document.getElementById('likeBtn');
const counterElement = document.getElementById('counter');

// Variável para armazenar o número de curtidas
let likesCount = 0;

// Evento de clique para disparar o contador
likeBtn.addEventListener('click', () => {
    likesCount++;
    counterElement.textContent = likesCount;

    // Adiciona animação visual no número ao clicar
    counterElement.classList.add('bounce');
    setTimeout(() => {
        counterElement.classList.remove('bounce');
    }, 200);
});
