/* =====================================================================
   MOTOR DO PAINEL
   Este arquivo é da base do projeto. As equipes não precisam alterá-lo.

   Ele oferece uma única função para as equipes: registrarCard().
   ===================================================================== */

// Guarda os cards que as equipes registrarem.
const cardsRegistrados = [];

/**
 * Cada equipe chama esta função uma vez, no seu próprio arquivo.
 *
 * registrarCard({
 *   equipe: "01",
 *   titulo: "Nome da feature",
 *   integrantes: ["Fulano", "Ciclano"],
 *   icone: "fa-solid fa-star",
 *   montar(area) { ... }
 * });
 */
function registrarCard(config) {
  if (!config || typeof config.montar !== "function") {
    console.error("registrarCard: faltou a função montar()", config);
    return;
  }
  cardsRegistrados.push(config);
}

/** Desenha na tela todos os cards registrados. Chamada no fim do index.html. */
function iniciarPainel() {
  const grade = document.getElementById("grade-de-cards");
  const aviso = document.getElementById("aviso-vazio");

  // Mostra na ordem do número da equipe.
  cardsRegistrados.sort((a, b) => String(a.equipe).localeCompare(String(b.equipe)));

  if (cardsRegistrados.length === 0) {
    aviso.style.display = "block";
    return;
  }
  aviso.style.display = "none";

  cardsRegistrados.forEach(function (config) {
    const card = document.createElement("section");
    card.className = "card";
    card.id = "card-equipe-" + config.equipe;

    const icone = config.icone || "fa-solid fa-code";
    const integrantes = (config.integrantes || []).join(", ") || "equipe sem nome";

    card.innerHTML =
      '<header class="card-topo">' +
        '<h2><i class="' + icone + '"></i> ' + (config.titulo || "Sem título") + '</h2>' +
        '<span class="etiqueta">Equipe ' + config.equipe + '</span>' +
      '</header>' +
      '<div class="card-area"></div>' +
      '<footer class="card-rodape">' + integrantes + '</footer>';

    grade.appendChild(card);

    // Entrega para a equipe apenas a área interna do card.
    const area = card.querySelector(".card-area");
    try {
      config.montar(area);
    } catch (erro) {
      // Se a feature de uma equipe quebrar, as outras continuam funcionando.
      area.innerHTML = '<p class="erro">Esta feature apresentou um erro. Veja o console (F12).</p>';
      console.error("Erro na feature da equipe " + config.equipe + ":", erro);
    }
  });
}
