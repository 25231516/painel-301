/* =====================================================================
   EQUIPE 09
   ===================================================================== */

registrarCard({

  equipe: "09",
  titulo: "Dado de RPG",
  integrantes: ["Nome do aluno 1", "Nome do aluno 2"],
  icone: "fa-solid fa-dice",

  montar(area) {

    area.innerHTML = `
      <p>Clique para rolar o dado.</p>
      <p class="visor" id="visor">-</p>
      <button class="btn" id="botao">Rolar dado</button>
    `;

    const visor = document.getElementById("visor");
    const botao = document.getElementById("botao");

    botao.addEventListener("click", function () {
    const sorteado = Math.floor(Math.random() * 6);
    visor.innerText = sorteado;
    });

  }
});
