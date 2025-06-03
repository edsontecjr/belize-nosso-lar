document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.tecnologia .btn-tec');
  const imagens = document.querySelectorAll('.tecnologia .midia img');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const alvo = botao.getAttribute('data-target');

      imagens.forEach(img => {
        img.classList.remove('ativa');
      });

      const imagemAlvo = document.querySelector(`.tecnologia .midia img[data-id="${alvo}"]`);
      if (imagemAlvo) {
        imagemAlvo.classList.add('ativa');
      }
    });
  });
});
