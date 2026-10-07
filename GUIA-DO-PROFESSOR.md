# Guia do Professor — Painel 301

Documento de gestão da atividade. **Não compartilhe com a turma** (ou mantenha, se preferir
transparência total — não há gabarito aqui, só logística).

---

## 1. Antes da primeira aula

### No GitHub (10 minutos)

- [ ] Publicar este repositório como **público** (fork exige repo visível).
- [ ] **Settings → Pages →** Source: `Deploy from a branch`, branch `main`, pasta `/ (root)`.
- [ ] **Settings → Branches → Add rule** para `main`:
      marcar *Require a pull request before merging*.
      Isso impede que alguém empurre direto na main — inclusive você, por engano.
- [ ] Criar as **9 issues** (uma por feature). Há um script pronto na seção 6.
- [ ] Criar as labels: `feature`, `equipe-01`…`equipe-09`, `precisa-ajuste`, `aprovado`.

### No laboratório (confirme antes!)

- [ ] Git instalado nas máquinas: `git --version`
- [ ] Cada aluno consegue entrar na própria conta do GitHub
- [ ] A rede não bloqueia `github.com`

> ⚠️ **O maior risco desta atividade é o login.** Aluno sem conta criada, ou com senha
> esquecida, trava os 45 minutos inteiros. Peça na aula anterior que todos confirmem o
> acesso — e tenha um plano B (dupla trabalha na conta de um só).

### Sobre autenticação

Desde 2021 o GitHub não aceita mais senha no `git push`. As opções:

| Opção | Como | Recomendação |
|---|---|---|
| **Personal Access Token** | Settings → Developer settings → Tokens (classic) → escopo `repo` | ✅ Mais simples no laboratório |
| GitHub CLI | `gh auth login` | Bom se o `gh` já estiver instalado |
| SSH | Gerar chave por aluno | Demorado demais para 45 min |

Oriente a turma a gerar o token **na aula anterior** e guardá-lo. No `git push`,
o token é colado no lugar da senha.

---

## 2. Plano das 3 aulas (45 min cada)

### Aula 1 — Do fork ao primeiro pull request

| Tempo | O quê |
|---|---|
| 0–8 | Abrir o site no ar e mostrar o painel vazio. Explicar: *"no fim, cada card aqui é de uma equipe de vocês"*. Formar duplas/trios. |
| 8–13 | Cada equipe escolhe a feature e comenta `eu quero` na issue. Você atribui ali mesmo. |
| 13–25 | **Fork → clone → branch.** Momento mais crítico. Circule pela sala. |
| 25–38 | Abrir `features/equipe-NN/feature.js`, rodar o site, trocar nome da equipe e título. Fazer o **primeiro commit e push**. |
| 38–45 | **Abrir o Pull Request como rascunho (draft).** Fechar a aula com todos os PRs visíveis na sua tela, projetados. |

> 🎯 **Meta da aula 1:** nove pull requests em rascunho abertos. Mesmo que o código só tenha
> o nome da equipe trocado. O que importa é o caminho percorrido.

### Aula 2 — Desenvolver e responder à revisão

| Tempo | O quê |
|---|---|
| 0–7 | Projetar um PR e fazer uma **revisão ao vivo**: comentar em uma linha, pedir mudança. Mostrar como o aluno enxerga isso. |
| 7–30 | Equipes programam a feature, com commits a cada etapa. |
| 30–40 | Você revisa pelo computador: `Request changes` em alguns, `Approve` em outros. Equipes corrigem e dão push de novo. |
| 40–45 | Mostrar que **o mesmo PR se atualizou sozinho** — nenhum PR novo foi aberto. Conceito-chave. |

> 💡 Deixe pelo menos **um `Request changes` para cada equipe**. Receber e responder a uma
> revisão é o conteúdo central da atividade; equipe que só recebe `Approve` não aprende isso.

### Aula 3 — Merge, publicação e encerramento

| Tempo | O quê |
|---|---|
| 0–5 | Últimos ajustes. |
| 5–20 | **Merge ao vivo, um por vez, projetado.** A cada merge, recarregue o site no ar e o card novo aparece. É o momento alto da atividade. |
| 20–30 | Cada equipe sincroniza o fork e vê o trabalho dos colegas no próprio repositório. |
| 30–40 | Volta rápida: cada equipe mostra o seu card em 1 minuto. |
| 40–45 | Fechamento: o que é fork, branch, PR e review — agora com a experiência vivida. |

---

## 3. Rotina de revisão dos pull requests

Abra **Files changed** e confira nesta ordem:

1. **Quais arquivos foram tocados?** Se houver algo fora de `features/equipe-NN/`, a
   verificação automática já falhou — peça para reverter.
2. **O card aparece e funciona?** Se tiver dúvida, baixe a branch:
   ```bash
   gh pr checkout NUMERO-DO-PR
   ```
3. **Os `id` terminam com o número da equipe?** É o erro mais comum e o que quebra o painel
   quando duas equipes usam `id="botao"`.
4. **Os dados da equipe estão preenchidos?**

### Sugestões de comentário

Comente **na linha**, não só no geral — é o que ensina o recurso.

| Situação | Comentário sugerido |
|---|---|
| `id` sem o número | "Esse id precisa terminar com o número da equipe (`botao-03`), senão colide com o card de outra equipe quando os dois estiverem no ar juntos." |
| Código sem identação | "Alinhe as linhas de dentro do bloco. Código mal alinhado é difícil de revisar — e revisão é o que estamos praticando." |
| `integrantes` não preenchido | "Coloquem os nomes de vocês aqui — é a assinatura do card no site." |
| Funciona, mas dá para melhorar | "Funciona! Agora um extra opcional: e se o número não pudesse ficar negativo?" |
| Tudo certo | "Aprovado. Commits bem divididos e feature funcionando. 👏" |

---

## 4. Problemas que vão aparecer

| Sintoma | Causa | Solução |
|---|---|---|
| `Permission denied` no push | Clonou o repo do professor, não o fork | `git remote set-url origin https://github.com/ALUNO/painel-301.git` |
| PR aponta para o repo errado | Base errada no formulário | Fechar e abrir de novo, conferindo a seta |
| "This branch has conflicts" | Raro aqui (arquivos separados), mas pode ocorrer na `main` do fork | Equipe sincroniza o fork (Etapa 10 do CONTRIBUTING) |
| Push recusado após sincronizar | Histórico divergiu | `git pull --rebase` e depois `git push` |
| Aluno mexeu na `main` | Esqueceu a branch | `git stash` → `git checkout -b equipe-NN/x` → `git stash pop` |
| Card não aparece no site | Erro de JavaScript | F12 → Console. O motor isola o erro: só aquele card quebra. |
| Dois cards se atrapalham | `id` repetido entre equipes | Renomear com o sufixo da equipe |

---

## 5. Avaliação sugerida

A nota vem do **processo**, não do tamanho do código.

| Critério | Peso | O que observar |
|---|---|---|
| Fluxo do GitHub | 40% | Fork, branch nomeada corretamente, PR aberto na base certa |
| Qualidade dos commits | 20% | Vários commits pequenos, mensagens descritivas |
| Resposta à revisão | 25% | Corrigiu o que foi pedido, respondeu os comentários |
| Feature funcionando | 15% | Entrega o que a issue pedia |

> Repare que **85% da nota não depende do código funcionar perfeitamente.** Deixe isso claro
> para a turma na aula 1: tira a pressão de quem está enferrujado e coloca o foco no que
> está sendo ensinado.

---

## 6. Script para criar as 9 issues de uma vez

Com o [GitHub CLI](https://cli.github.com/) autenticado, rode na pasta do repositório:

```bash
gh label create feature --color 0E8A16 --description "Feature do catálogo" 2>/dev/null

criar() { gh issue create --title "[FEATURE] $1" --body "$2" --label feature; }

criar "Contador regressivo"        "Número começa em 10 e cai a cada clique. Em zero, mostra mensagem.⭐"
criar "Saudação pelo horário"      "Mostra Bom dia / Boa tarde / Boa noite conforme a hora. ⭐"
criar "Sorteador de nomes"         "Campo para digitar nomes e botão que sorteia um. ⭐"
criar "Dado de RPG"                "Botão que sorteia de 1 a 6 (ou 1 a 20). ⭐"
criar "Alternador de tema do card" "Botão que troca o card entre claro e escuro. ⭐"
criar "Mural de frases"            "Lista de frases; o botão mostra a próxima. ⭐⭐"
criar "Lista de recados"           "Campo + botão que acrescenta itens numa lista. ⭐⭐"
criar "Cronômetro"                 "Iniciar, parar e zerar, com segundos correndo. ⭐⭐"
criar "Conversor de unidades"      "Converte real/dólar, °C/°F ou km/milhas. ⭐⭐"
criar "Busca de Pokémon"           "Busca na PokeAPI e mostra imagem e tipo. 🔥 desafio"
```

---

## 7. Comandos úteis durante as aulas

```bash
gh pr list                      # todos os PRs abertos
gh pr checkout 7                # baixar o PR 7 para testar
gh pr diff 7                    # ver o que mudou, sem sair do terminal
gh pr review 7 --approve        # aprovar
gh pr review 7 --request-changes --body "Ajuste os ids"
gh pr merge 7 --squash          # merge juntando os commits em um
```

> **Use `--squash`.** Assim cada feature entra na `main` como um commit único e o histórico
> do projeto fica legível — bom momento para explicar à turma por que isso importa.
