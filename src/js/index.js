const listadigimon = document.querySelectorAll('.digimon')
const digimonsCard = document.querySelectorAll('.cartao-digimon')

listadigimon.forEach(digimon => {
  digimon.addEventListener('click', () => {
    const cartaodigimonAberto = document.querySelector('.aberto')
    cartaodigimonAberto.classList.remove('aberto')

    const iddigimonSelected = digimon.attributes.id.value

    const idCartaodigimonAbrir = 'cartao-' + iddigimonSelected

    const cartaodigimonAbrir = document.getElementById(idCartaodigimonAbrir)
    cartaodigimonAbrir.classList.add('aberto')

    const digimonAtivoListagem = document.querySelector('.ativo')
    digimonAtivoListagem.classList.remove('ativo')

    const digimonSelectedListagem = document.getElementById(iddigimonSelected)
    digimonSelectedListagem.classList.add('ativo')
  })
})
