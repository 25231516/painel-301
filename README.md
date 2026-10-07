# 🧩 Painel 301

Projeto colaborativo da **Turma 301 — Programação de Aplicativos**.

Um painel único, construído por toda a turma: cada equipe entrega **um card**, e todos
os cards aprovados aparecem juntos no site da turma.

🔗 **Site no ar:** https://euclidespaim.github.io/painel-301/

---

## O que esta atividade treina

O código aqui é pequeno de propósito. O que estamos praticando é o **fluxo de trabalho
real de equipes de desenvolvimento**:

| Recurso do GitHub | Onde você usa |
|---|---|
| **Fork** | Criar a sua cópia do projeto |
| **Branch** | Isolar o seu trabalho do resto |
| **Commit** | Registrar o progresso em etapas |
| **Pull Request** | Pedir que o seu trabalho entre no projeto |
| **Code Review** | Receber e responder a avaliação do professor |
| **Issues** | Reivindicar a sua feature |
| **Actions (CI)** | Conferência automática a cada envio |
| **Pages** | Publicação automática do site |

---

## O ciclo da atividade

📊 **[Veja o diagrama do ciclo](https://euclidespaim.github.io/painel-301/ciclo.html)** — da issue
aberta até o seu card no ar.

> ⚠️ As **issues ficam só no repositório do professor**. O seu fork não as copia e nem tem a
> aba *Issues*. Para escolher a sua feature, volte ao repositório original.

## Por onde começar

1. Leia o **[CONTRIBUTING.md](CONTRIBUTING.md)** — é o roteiro passo a passo, com os comandos prontos.
2. Escolha a sua feature no **[FEATURES.md](FEATURES.md)** e reivindique na issue correspondente.
3. Mexa **apenas** nos arquivos da sua equipe:
   ```
   features/equipe-NN/feature.js
   features/equipe-NN/style.css
   ```

---

## Como rodar no seu computador

Não precisa instalar nada. Clique duas vezes no `index.html` e ele abre no navegador.

Para ver as alterações, salve o arquivo e aperte **F5** na página.

---

## Estrutura do projeto

```
painel-301/
├── index.html              ← a página (NÃO MEXER)
├── css/base.css            ← estilo da base e peças prontas (NÃO MEXER)
├── js/app.js               ← motor do painel (NÃO MEXER)
└── features/
    ├── equipe-01/
    │   ├── feature.js      ← SEU CÓDIGO
    │   └── style.css       ← SEU ESTILO
    ├── equipe-02/
    └── ... até equipe-09
```

Por que existe essa separação? Porque 9 equipes trabalhando no mesmo arquivo gerariam
conflito a cada envio. Com uma pasta por equipe, cada um trabalha em paz — e é assim
que projetos de verdade se organizam.

---

## Peças de estilo já prontas

Use estas classes no seu HTML e o card já sai combinando com o resto do site:

| Classe | Para que serve |
|---|---|
| `.btn` | Botão |
| `.campo` | Campo de texto (input) |
| `.visor` | Número ou resultado em destaque |
| `.lista` | Lista de itens |

---

## Regras

1. Trabalhe sempre em uma **branch**, nunca na `main`.
2. Altere **somente** a pasta da sua equipe. A verificação automática recusa o contrário.
3. Todo `id` termina com o número da equipe: `id="botao-03"`.
4. Commits pequenos e com mensagem que explica o que mudou.

---

*Prof. Euclides Paim · Escola Elfrida Cristino Silva*
