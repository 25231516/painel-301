/* =====================================================================
   EQUIPE 06
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -06
   (exemplo: id="botao-06"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({

  // ---- 1. Identificação (troque pelos dados da sua equipe) ----
  equipe: "06",
  titulo: "mural de frase",
  integrantes: ["João Marcos", "Maria Gabrieli"],
    icone: "fa-solid fa-star",   // procure outro em fontawesome.com/icons
  // ---- 2. O que aparece dentro do card ----
  montar(area) { 

    // 2.1 — O HTML do seu card.
    area.innerHTML = `
      <p>Clique no botão e uma nova frase será adicionada ao mural.</p>
      <p class="visor" id="visor-06">...</p>      <button class="btn" id="botao-06">Nova Frase</button>
      `;
    // 2.2 — Pegando os elementos que acabamos de criar.
    const visor = document.getElementById("visor-06");    
    const botao = document.getElementById("botao-06");
  
    // 2.3 — O que acontece quando o usuário clica.
    //a cada clique uma frase diferente é adicionada ao visor.
    botao.onclick = () => {
      const frases = [
        "O sábio se cala, pois esqueceu o que ia dizer.",
        "No céu tem pão?",
        "Euclides farmador de aura.",
        "Euclides disse que ia dar nota extra pra todo mundo.",
        "Pra quê jogar a bola na Mavie?...Arrogante",
        "O Euclides é o melhor pai do mundo",
        "Euclides pai da 301",
        "O Matheus usa hack na aula do Euclides",
      ];
      const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
      visor.textContent = fraseAleatoria;
    };

  }

});

