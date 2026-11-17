# Genealogia Cordeiro Maciel & Machado

Site estático com a genealogia da família, focado na descendência e ancestrais de **Antônio de Assis Machado Neto (Toniquinho)** e **Matildes Cordeiro Maciel**.

## Conteúdo

- Casal central (Toniquinho + Matildes)
- Os 13 filhos do casal
- Os dois casais Jorge Cordeiro + Joaquina Bernarda de Castro Machado
- Ancestrais de ambos os lados
- Formulário de sugestões de correção/acréscimo

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `genealogia-cordeiro-machado`)
2. Faça upload de todos os arquivos desta pasta
3. Vá em **Settings → Pages**
4. Em **Source**, escolha a branch `main` (ou `master`) e a pasta `/ (root)`
5. Salve e aguarde alguns minutos
6. O site ficará disponível em:  
   `https://seu-usuario.github.io/genealogia-cordeiro-machado/`

## Personalizar o e-mail de sugestões

No arquivo `js/app.js`, localize a linha:

```js
const email = "seu-email@exemplo.com";
```

Substitua pelo e-mail real da pessoa responsável pela genealogia.

## Estrutura de arquivos

```
genealogia-cordeiro-machado/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   └── familia.json
└── README.md
```

## Fonte dos dados

Os dados foram organizados a partir de exportação genealógica (CSV) e registros familiares.
