/* =====================================================================
   EQUIPE 09
   ===================================================================== */

registrarCard({

  equipe: "09",
  titulo: "Dado de RPG",
  integrantes: ["Marina Alves", "Téo Barbosa"],
  icone: "fa-solid fa-dice",

  montar(area) {

    area.innerHTML = `
      <p>Clique para rolar o dado.</p>
      <p class="visor" id="visor-09">-</p>
      <button class="btn" id="botao-09">Rolar dado</button>
    `;

    const visor = document.getElementById("visor-09");
    const botao = document.getElementById("botao-09");

    botao.addEventListener("click", function () {
      // Math.random() vai de 0 até 0,999... Multiplicando por 6 e
      // arredondando para baixo, sai de 0 a 5 — por isso o + 1.
      const sorteado = Math.floor(Math.random() * 6) + 1;
      visor.innerText = sorteado;
    });

  }
});
