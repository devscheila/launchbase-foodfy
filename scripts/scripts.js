const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const receitas = document.querySelectorAll('.receita');

for (let receita of receitas) {
  receita.addEventListener('click', function() {
    modalOverlay.classList.add('active');
    
    const receitaImg = receita.querySelector('img').getAttribute('src');
    const receitaImgAlt = receita.querySelector('img').getAttribute('alt');
    const receitaNome = receita.querySelector('h3').innerHTML;
    const receitaAutor = receita.querySelector('p').innerHTML;
  
    modal.querySelector('img').src = `${receitaImg}`;
    modal.querySelector('img').alt = `${receitaImgAlt}`;
    modal.querySelector('h3').innerHTML = `${receitaNome}`;
    modal.querySelector('p').innerHTML = `${receitaAutor}`;
    })
}

document.querySelector('#close').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
})