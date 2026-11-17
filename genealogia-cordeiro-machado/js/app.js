// Genealogia Cordeiro Maciel & Machado

const FILHOS = [
  {
    id: "IG775CWD",
    nome: "Deusdede Cordeiro Machado",
    sexo: "Masculino",
    nascimento: "22/10/1947",
    conjuges: ["Thaize Danielle de Oliveira", "Nadir Ferreira Machado"]
  },
  {
    id: "IG7756JJ",
    nome: "Delma Maria de Campos Machado",
    sexo: "Feminino",
    nascimento: "09/04/1948",
    conjuges: ["Sebastião José Gonsalves"]
  },
  {
    id: "IG77NZ16",
    nome: "José Eustáquio Cordeiro Machado",
    apelido: "Taquinho",
    sexo: "Masculino",
    nascimento: "01/02/1950",
    falecimento: "04/04/2019",
    conjuges: ["Cleusa Maria Cordeiro Machado"],
    filhos: [
      {
        nome: "Jorge Eustáquio Cordeiro Machado",
        nascimento: "22/01/1982",
        conjuges: ["Olivia Santos Torres Vieira"]
      }
    ]
  },
  {
    id: "IG775GR6",
    nome: "Vândel Cordeiro Machado",
    sexo: "Masculino",
    nascimento: "03/12/1952"
  },
  {
    id: "IG775BZV",
    nome: "Rosemar Cordeiro Machado",
    sexo: "Feminino",
    nascimento: "16/01/1954"
  },
  {
    id: "IG77523Q",
    nome: "Rosimeire Cordeiro Machado",
    sexo: "Feminino",
    nascimento: "16/01/1954"
  },
  {
    id: "IG775DX6",
    nome: "José Romilson Cordeiro Machado",
    sexo: "Masculino",
    nascimento: "16/11/1956",
    conjuges: ["Doralice Lana Cordeiro Machado"]
  },
  {
    id: "IG775LP7",
    nome: "Francisco Radilson Cordeiro Machado",
    sexo: "Masculino",
    nascimento: "30/07/1958",
    conjuges: ["Márcia Mendes Ferreira Machado"]
  },
  {
    id: "IG775P1X",
    nome: "Maria Elite Cordeiro Machado",
    sexo: "Feminino",
    nascimento: "02/10/1960",
    conjuges: ["José Virgílio Bastos Pereira"]
  },
  {
    id: "IG775NCR",
    nome: "Inês Aparecida Cordeiro Machado",
    sexo: "Feminino",
    nascimento: "10/10/1963",
    conjuges: ["Klaus Dieter Ullmann"]
  },
  {
    id: "IG7758B7",
    nome: "Rosa Mônica Cordeiro Machado",
    sexo: "Feminino",
    nascimento: "16/05/1965",
    conjuges: ["Antônio Roberto Rangel"]
  },
  {
    id: "IG775TLP",
    nome: "Vicente Cordeiro Machado",
    sexo: "Masculino",
    nascimento: "01/01/1966"
  },
  {
    id: "IG775GZS",
    nome: "Lafaiete Cordeiro Machado",
    sexo: "Masculino",
    nascimento: "16/03/1968",
    conjuges: ["Masuleide Aparecida Rocha de Queiroz"]
  }
];

const ANCESTRAIS_TONIQUINHO = [
  { depth: 0, nome: "Antônio de Assis Machado Neto (Toniquinho)", datas: "1924 – 1993" },
  { depth: 1, nome: "Lafaiete Cordeiro Filho", datas: "1896 – 1954" },
  { depth: 2, nome: "Lafaiete Cordeiro Valadares", datas: "" },
  { depth: 3, nome: "José Cordeiro Valadares", datas: "1804 – 1900" },
  { depth: 3, nome: "Ana Leopoldina Rocha Moreira", datas: "1805 – 1868" },
  { depth: 2, nome: "Teresa de Campos Cordeiro", datas: "≈1876" },
  { depth: 3, nome: "Belchior de Campos Cordeiro", datas: "1834" },
  { depth: 3, nome: "Isabel Jacinta de Campos Cordeiro", datas: "≈1836" },
  { depth: 1, nome: "Maria Rosa de Campos Machado", datas: "" },
  { depth: 2, nome: "Antônio de Assis Machado", datas: "1873" },
  { depth: 3, nome: "Luis Joaquim de Souza Machado", datas: "1847 – 1920" },
  { depth: 3, nome: "Josefina de Oliveira Machado", datas: "" },
  { depth: 2, nome: "Antônia de Campos Cordeiro", datas: "1873 – 1973" },
  { depth: 3, nome: "Higino de Campos Cordeiro Valadares", datas: "1839 – 1911" },
  { depth: 3, nome: "Maria Joaquina de Campos Cordeiro Valadares", datas: "1853 – 1945" }
];

const ANCESTRAIS_MATILDES = [
  { depth: 0, nome: "Matildes Cordeiro Maciel", datas: "" },
  { depth: 1, nome: "José Pedro Duarte Maciel", datas: "1890 – 1950" },
  { depth: 2, nome: "Moises Duarte Maciel", datas: "antes de 1858" },
  { depth: 3, nome: "Joaquim José Duarte Silva", datas: "≈1834" },
  { depth: 3, nome: "Lucia Vieira Maciel", datas: "1834 – 1877" },
  { depth: 2, nome: "Maria Bernarda de Castro Maciel", datas: "" },
  { depth: 1, nome: "Inês Cordeiro Maciel", datas: "1891 – 1955" },
  { depth: 2, nome: "Jorge Cordeiro Valadares", datas: "1860 – 1910" },
  { depth: 2, nome: "Joaquina Bernarda de Castro Machado", datas: "1865 – 1920" }
];

function formatDate(d) {
  if (!d) return "";
  // Já está formatado na maioria dos casos
  return d;
}

function renderFilhos() {
  const container = document.getElementById("filhos-container");
  if (!container) return;

  container.innerHTML = FILHOS.map(f => {
    const sexoClass = f.sexo === "Masculino" ? "male" : "female";
    const conjuges = f.conjuges && f.conjuges.length
      ? `<div class="spouse"><strong>Cônjuge:</strong> ${f.conjuges.join(" / ")}</div>`
      : "";
    
    let netosHtml = "";
    if (f.filhos && f.filhos.length) {
      netosHtml = `<div class="netos"><strong>Filhos:</strong><ul style="margin:0.3rem 0 0 1rem;padding:0">` +
        f.filhos.map(n => {
          const c = n.conjuges ? ` · c.c. ${n.conjuges.join(", ")}` : "";
          return `<li>${n.nome}${n.nascimento ? ` (${n.nascimento})` : ""}${c}</li>`;
        }).join("") +
        `</ul></div>`;
    }

    const apelido = f.apelido ? ` <em>(${f.apelido})</em>` : "";
    const falec = f.falecimento ? ` – ${f.falecimento}` : "";

    return `
      <article class="child-card ${sexoClass}">
        <h4>${f.nome}${apelido}</h4>
        <div class="meta">${f.nascimento || "?"}${falec}</div>
        ${conjuges}
        ${netosHtml}
      </article>
    `;
  }).join("");
}

function renderAncestrais(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list.map(item => {
    return `
      <div class="tree-item" style="--depth: ${item.depth}" data-depth="${item.depth}">
        <span class="nome">${item.nome}</span>
        ${item.datas ? `<span class="datas"> · ${item.datas}</span>` : ""}
      </div>
    `;
  }).join("");
}

function enviarSugestao(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    tipo: form.tipo.value,
    pessoa: form.pessoa.value,
    campo: form.campo.value,
    comoConsta: form["como-consta"].value,
    sugestao: form.sugestao.value,
    fonte: form.fonte.value,
    observacoes: form.observacoes.value,
    nome: form["seu-nome"].value,
    parentesco: form.parentesco.value,
    contato: form.contato.value
  };

  const corpo = `
Tipo: ${data.tipo}
Pessoa relacionada: ${data.pessoa}
Campo: ${data.campo}
Como consta hoje: ${data.comoConsta}
Sugestão: ${data.sugestao}
Fonte: ${data.fonte}
Observações: ${data.observacoes}

Enviado por: ${data.nome}
Parentesco: ${data.parentesco}
Contato: ${data.contato}
  `.trim();

  const assunto = encodeURIComponent("Sugestão de genealogia - Cordeiro Maciel & Machado");
  const body = encodeURIComponent(corpo);

  // Substitua pelo e-mail real da pessoa responsável
  const email = "samuelcernunnos@mail.com";
  window.location.href = `mailto:${email}?subject=${assunto}&body=${body}`;

  return false;
}

// Navegação ativa
function setupNav() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  function updateActive() {
    let current = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) {
        current = sec.getAttribute("id");
      }
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", updateActive);
  updateActive();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilhos();
  renderAncestrais(ANCESTRAIS_TONIQUINHO, "ancestrais-toniquinho");
  renderAncestrais(ANCESTRAIS_MATILDES, "ancestrais-matildes");
  setupNav();
});
