document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".tecnologia ul li");
  const midias = document.querySelectorAll(".tecnologia .midia img, .tecnologia .midia iframe");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const id = botao.getAttribute("data-target");

      // Remove classe ativa de todas as mídias
      midias.forEach(midia => {
        midia.classList.remove("ativa");
      });

      // Exibe a mídia correspondente
      const alvo = document.getElementById(id);
      if (alvo) {
        alvo.classList.add("ativa");
      }
    });
  });
});
