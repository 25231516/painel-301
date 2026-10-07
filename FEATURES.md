# Catálogo de Features

Cada equipe escolhe **uma** feature desta lista. A escolha é por ordem de chegada:
abra a *issue* correspondente no GitHub e comente `eu quero` — a primeira equipe a comentar fica com ela.

> As features são propositalmente pequenas. O foco da atividade é o **fluxo do GitHub**,
> não a complexidade do código. Se sobrar tempo, melhore o visual ou acrescente um extra.

Todas mexem apenas em `features/equipe-NN/feature.js` e `features/equipe-NN/style.css`.

---

### 1. Contador regressivo ⭐
Um número começa em 10 e cai a cada clique. Ao chegar em zero, mostra uma mensagem.
**Usa:** variável, clique, `if`.

### 2. Saudação pelo horário ⭐
Mostra "Bom dia", "Boa tarde" ou "Boa noite" conforme a hora do computador.
**Usa:** `new Date().getHours()`, `if / else`.

### 3. Sorteador de nomes ⭐
Um campo para digitar nomes e um botão que sorteia um deles.
**Usa:** array, `push`, `Math.random()`.

### 4. Dado de RPG ⭐
Botão que sorteia um número de 1 a 6 (ou de 1 a 20) e mostra bem grande.
**Usa:** `Math.random()`, `Math.floor()`.

### 5. Alternador de tema do card ⭐
Um botão que troca o card entre claro e escuro.
**Usa:** `classList.toggle()`, CSS.

### 6. Mural de frases ⭐⭐
Uma lista de frases motivacionais; o botão mostra a próxima.
**Usa:** array, índice que avança, `%`.

### 7. Lista de recados ⭐⭐
Campo de texto + botão que vai acrescentando itens numa lista na tela.
**Usa:** array, `push`, montar HTML dentro de um laço.

### 8. Cronômetro ⭐⭐
Botões de iniciar, parar e zerar, com os segundos correndo na tela.
**Usa:** `setInterval()`, `clearInterval()`.

### 9. Conversor de unidades ⭐⭐
Digita um valor em uma unidade e vê o resultado na outra (real↔dólar, °C↔°F, km↔milhas).
**Usa:** `input`, conta matemática, `toFixed()`.

### 10. Busca de Pokémon 🔥 *(desafio opcional)*
Digita o nome de um Pokémon e o card mostra a imagem e o tipo dele.
**Usa:** `fetch()` na PokeAPI — vocês já fizeram isso na aula 2.

---

## Legenda

| | |
|---|---|
| ⭐ | Mais simples — boa para quem está destravando |
| ⭐⭐ | Intermediária |
| 🔥 | Desafio, só se a equipe quiser |

## Regras de entrega

Uma feature é considerada pronta quando:

- [ ] Funciona ao abrir o `index.html`
- [ ] Os dados da equipe estão preenchidos (`titulo`, `integrantes`)
- [ ] Todos os `id` terminam com o número da equipe
- [ ] Nenhum arquivo fora de `features/equipe-NN/` foi alterado
- [ ] O console do navegador (F12) não acusa erro
