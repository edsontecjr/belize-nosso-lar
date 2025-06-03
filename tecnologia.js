document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.tecnologia .btn-tec');
  const imagens = document.querySelectorAll('.tecnologia .midia img');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const alvo = botao.getAttribute('data-target');

      // Remove classe ativa das imagens
      imagens.forEach(img => img.classList.remove('ativa'));

      // Adiciona classe ativa na imagem alvo
      const imagemAlvo = document.querySelector(`.tecnologia .midia img[data-id="${alvo}"]`);
      if (imagemAlvo) {
        imagemAlvo.classList.add('ativa');
      }

      // Remove classe ativo dos botões
      botoes.forEach(b => b.classList.remove('ativo'));

      // Adiciona classe ativo no botão clicado
      botao.classList.add('ativo');
    });
  });

  // Inicializar o primeiro botão e imagem como ativo
  if (botoes.length && imagens.length) {
    botoes[0].classList.add('ativo');
    imagens[0].classList.add('ativa');
  }
});
