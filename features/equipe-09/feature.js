/* =====================================================================
   EQUIPE 09
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -09
   (exemplo: id="botao-09"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({

  // ---- 1. Identificação (troque pelos dados da sua equipe) ----
  equipe: "09",
  titulo: "Contador de Cliques",
  integrantes: ["Nome do aluno 1", "Nome do aluno 2"],
  icone: "fa-solid fa-star",   // procure outro em fontawesome.com/icons

  // ---- 2. O que aparece dentro do card ----
  montar(area) {

    // 2.1 — O HTML do seu card.
    area.innerHTML = `
      <p>Clique no botão e veja o número subir.</p>
      <p class="visor" id="visor-09">0</p>
      <button class="btn" id="botao-09">Clicar</button>
    `;

    // 2.2 — Pegando os elementos que acabamos de criar.
    const visor = document.getElementById("visor-09");
    const botao = document.getElementById("botao-09");

    // 2.3 — Uma variável para guardar o estado.
    let contador = 0;

    // 2.4 — O que acontece quando o usuário clica.
    botao.addEventListener("click", function () {
      contador = contador + 1;
      visor.innerText = contador;
    });

  }
});
