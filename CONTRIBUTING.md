# Como contribuir com o Painel 301

Este guia é o **roteiro oficial da atividade**. Siga na ordem.
Cada passo tem o comando pronto para copiar.

> Legenda: `SEU-USUARIO` = seu nome de usuário no GitHub. `NN` = o número da sua equipe (01, 02, ...).

> 💻 **Você vai usar o VS Code já logado na sua conta do GitHub.** Isso significa que o
> push funciona sem senha e sem token. Antes de começar, confira o **ícone de conta no canto
> inferior esquerdo** do VS Code: ele precisa mostrar *o seu* usuário, não o do colega que
> usou a máquina antes.
>
> Cada etapa abaixo mostra **o comando no terminal** e **o caminho pelo VS Code**. Use o que
> você preferir — o resultado é o mesmo.

---

## Etapa 1 — Fazer o fork

O fork é a **sua cópia** do projeto, dentro da sua conta.
Você não tem permissão de escrever no repositório do professor — e é assim que deve ser.

1. Abra o repositório do professor no GitHub.
2. Clique no botão **Fork**, no canto superior direito.
3. Confirme em **Create fork**.

Ao terminar, a barra de endereço mostra `github.com/SEU-USUARIO/painel-301`.
Repare na frase *"forked from euclidespaim/painel-301"* embaixo do título: é ela que prova que o fork deu certo.

> ⚠️ **O fork copia só o código.** Issues, pull requests e labels **não** vão junto — o seu
> fork nem tem a aba *Issues*. Sempre que precisar ver ou comentar numa issue, volte ao
> repositório do professor.

---

## Etapa 2 — Clonar para o computador do laboratório

```bash
git clone https://github.com/SEU-USUARIO/painel-301.git
cd painel-301
```

**Pelo VS Code:** `Ctrl+Shift+P` → digite *Git: Clone* → cole a URL do **seu fork** →
escolha a pasta → *Open*.

Confira se você clonou **o seu fork**, e não o original:

```bash
git remote -v
```

Deve aparecer `SEU-USUARIO/painel-301`. Se aparecer `euclidespaim`, você clonou o repositório errado — apague a pasta e refaça a Etapa 1.

---

## Etapa 3 — Criar a sua branch

Nunca trabalhe na `main`. Crie uma branch com o nome da sua equipe e da sua feature:

```bash
git checkout -b equipe-NN/nome-da-feature
```

Exemplo real: `git checkout -b equipe-03/sorteador-de-nomes`

**Pelo VS Code:** clique no **nome da branch** (canto inferior esquerdo, provavelmente diz
`main`) → *Create new branch* → digite o nome.

Para confirmar em qual branch você está:

```bash
git branch
```

O asterisco `*` marca a branch atual.

---

## Etapa 4 — Programar

Mexa **apenas** nestes dois arquivos:

```
features/equipe-NN/feature.js
features/equipe-NN/style.css
```

Para ver o site, abra o `index.html` no navegador (clique duas vezes no arquivo).

> Se você alterar qualquer arquivo fora da sua pasta, o pull request será recusado.
> Isso não é implicância: é o que impede que 9 equipes se atropelem no mesmo projeto.

---

## Etapa 5 — Salvar o trabalho (commit)

```bash
git status                       # mostra o que mudou
git add features/equipe-NN/      # seleciona só a sua pasta
git commit -m "feat: adiciona sorteador de nomes da equipe 03"
```

**Faça vários commits pequenos**, um por etapa concluída. Um commit gigante no fim da aula é difícil de revisar e vale menos.

Mensagem de commit boa descreve o que passou a existir:

| Ruim | Boa |
|---|---|
| `alteracoes` | `feat: cria o botão de sortear` |
| `teste` | `fix: corrige o visor que não zerava` |
| `aula de hoje` | `style: deixa o card com borda verde` |

**Pelo VS Code:** aba **Source Control** (`Ctrl+Shift+G`) → passe o mouse sobre a sua pasta
e clique no **+** para selecioná-la → escreva a mensagem na caixa de cima → clique no **✓**.

---

## Etapa 6 — Enviar para o GitHub (push)

```bash
git push -u origin equipe-NN/nome-da-feature
```

**Pelo VS Code:** clique em **Publish Branch** (ou *Sync Changes*, se a branch já existir
no GitHub). Como o VS Code está logado na sua conta, não vai pedir senha.

---

## Etapa 7 — Abrir o Pull Request

1. Abra o **seu fork** no GitHub. Vai aparecer uma faixa amarela com **Compare & pull request**. Clique nela.
2. Confira a direção da seta no topo:
   `euclidespaim/painel-301 : main` ⬅️ `SEU-USUARIO/painel-301 : equipe-NN/...`
   A base é sempre o repositório **do professor**.
3. Preencha o formulário que já aparece preenchido com o modelo.
4. Se a feature ainda não está pronta, escolha **Create draft pull request**. Um rascunho mostra o seu progresso sem pedir avaliação.
5. Quando estiver pronta, clique em **Ready for review**.

---

## Etapa 8 — Receber a revisão

O professor vai ler o seu código e responder de uma destas formas:

| Resposta | O que significa | O que você faz |
|---|---|---|
| ✅ **Approve** | Aprovado | Nada. Aguarde o merge. |
| 💬 **Comment** | Observação, sem bloquear | Leia e responda o comentário. |
| 🔁 **Request changes** | Precisa de ajuste | Corrija e envie de novo (Etapa 9). |

Comentários podem vir **em cima de uma linha específica** do seu código. Clique em **Files changed** no pull request para enxergá-los no contexto.

---

## Etapa 9 — Corrigir o que foi pedido

Você **não abre um novo pull request**. O mesmo PR se atualiza sozinho:

```bash
# continue na mesma branch
git add features/equipe-NN/
git commit -m "fix: ajusta o que foi pedido na revisão"
git push
```

Atualize a página do pull request: o commit novo já está lá.
Responda cada comentário e clique em **Resolve conversation** no que já foi resolvido.

---

## Etapa 10 — Depois do merge

Quando o professor fizer o merge, a sua feature entra no site oficial da turma.

Atualize o seu fork para receber o trabalho das outras equipes:

```bash
git checkout main
git pull https://github.com/euclidespaim/painel-301.git main
git push origin main
```

Agora o seu fork tem as features de todo mundo.

---

## Guia rápido de emergência

| Situação | Comando |
|---|---|
| Em que branch eu estou? | `git branch` |
| O que eu mudei? | `git status` |
| Quero desfazer tudo que não commitei | `git restore .` |
| Esqueci de criar a branch e mexi na main | `git stash` → `git checkout -b equipe-NN/feature` → `git stash pop` |
| Meu push foi recusado | `git pull --rebase` e depois `git push` |
| Quero ver o histórico | `git log --oneline` |
