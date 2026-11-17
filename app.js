// Genealogia Cordeiro Maciel & Machado

// Filhos de Antônio (Toniquinho) e Matildes, com netos quando registrados
const FILHOS_ANTONIO = [
  { nome: "Deusdede Cordeiro Machado", sexo: "M", nascimento: "22/10/1947", conjuges: ["Nadir Ferreira Machado", "Thaize Danielle de Oliveira"] },
  { nome: "Delma Maria de Campos Machado", sexo: "F", nascimento: "09/04/1948", conjuges: ["Sebastião José Gonçalves"] },
  { nome: "José Eustáquio Cordeiro Machado", apelido: "Taquinho", sexo: "M", nascimento: "01/02/1950", conjuges: ["Cleusa Maria Cordeiro"],
    filhos: [{ nome: "Jorge Eustáquio Cordeiro Machado", nascimento: "22/01/1982", conjuges: ["Olívia Santos Torres Vieira"] }] },
  { nome: "Vândel Cordeiro Machado", sexo: "M", nascimento: "03/12/1952" },
  { nome: "Rosemar Cordeiro Machado Siqueira", sexo: "F", nascimento: "16/01/1954", observacao: "Gêmea. Viúva de Wânder Siqueira de Oliveira." },
  { nome: "Rosimeire Cordeiro Machado", sexo: "F", nascimento: "16/01/1954", observacao: "Gêmea. Falecida em criança." },
  { nome: "José Romilson Cordeiro Machado", sexo: "M", nascimento: "16/11/1956", conjuges: ["Doralice Lana Cordeiro Machado"],
    filhos: [
      { nome: "Desirée Silva Lana Cordeiro Machado", nascimento: "28/08/1983" },
      { nome: "José Romilson Cordeiro Machado Filho", nascimento: "21/02/1986" }
    ] },
  { nome: "Francisco Radilson Cordeiro Machado", sexo: "M", nascimento: "30/07/1958", conjuges: ["Márcia Mendes Ferreira Machado"],
    filhos: [
      { nome: "Camila Mendes Ferreira Cordeiro Machado", nascimento: "06/07/1991" },
      { nome: "Gabriela Mendes Ferreira Cordeiro Machado", nascimento: "20/02/1993" },
      { nome: "Priscila Mendes Ferreira Cordeiro Machado", nascimento: "15/01/1997" }
    ] },
  { nome: "Maria Elite Cordeiro Machado", sexo: "F", nascimento: "02/10/1960", conjuges: ["José Virgílio Bastos Pereira"],
    filhos: [{ nome: "Ana Raquel Cordeiro Bastos Pereira", nascimento: "23/02/1998" }] },
  { nome: "Inês Aparecida Cordeiro Machado Ullmann", sexo: "F", nascimento: "10/10/1963", conjuges: ["Klaus Dieter Ullmann"],
    filhos: [
      { nome: "Stephanie Machado Ullmann", nascimento: "13/02/1993" },
      { nome: "Saskia Machado Ullmann", nascimento: "14/09/1995" }
    ] },
  { nome: "Rosa Mônica Cordeiro Machado Rangel", sexo: "F", nascimento: "16/05/1965", conjuges: ["Antônio Roberto Rangel"],
    filhos: [
      { nome: "Nara Cordeiro Rangel", nascimento: "08/02/1990" },
      { nome: "Milene Cordeiro Rangel", nascimento: "31/07/1991" },
      { nome: "Marcelo Cordeiro Rangel", nascimento: "25/07/2000" },
      { nome: "Marina Cordeiro Rangel", nascimento: "28/11/2001" }
    ] },
  { nome: "Vicente Cordeiro Machado", sexo: "M", nascimento: "01/01/1966" },
  { nome: "Lafaiete Cordeiro Machado", sexo: "M", nascimento: "16/03/1968", conjuges: ["Masuleide Aparecida Rocha de Queiroz"],
    filhos: [
      { nome: "Hiago Henrique Queiroz Cordeiro Machado", nascimento: "11/05/1995" },
      { nome: "Igor Lafaiete Queiroz Machado", nascimento: "23/03/1997" }
    ] }
];

// Filhos de Jorge Cordeiro Maciel e Joaquina Bernarda de Castro Machado
const FILHOS_JORGE = [
  { nome: "América Cordeiro da Silva", apelido: "Fia", sexo: "F", nascimento: "03/04/1934", conjuges: ["José Francisco da Silva"],
    filhos: [{ nome: "Milton Francisco da Silva", nascimento: "28/06/1951", conjuges: ["Neuza Maria da Silva"] }] },
  { nome: "José Naíde Cordeiro Maciel", sexo: "M", nascimento: "03/02/1937", conjuges: ["Maria das Dores Batista Maciel"],
    filhos: [
      { nome: "Marlene Batista Maciel", nascimento: "04/07/1959", conjuges: ["Antônio de Almeida Duarte"] },
      { nome: "Flávio Batista Maciel", nascimento: "28/01/1968", conjuges: ["Maria Aparecida Maciel"] },
      { nome: "Maria Gorethe Maciel Duarte", nascimento: "05/01/1963", conjuges: ["Carlos César Gonçalves Duarte"] },
      { nome: "Elias Batista Maciel", nascimento: "28/10/1964", conjuges: ["Neuza Barbosa Souza Maciel"] },
      { nome: "Reginaldo Batista Maciel", nascimento: "04/11/1966", conjuges: ["Vanderléia Cristina Martins Maciel"] },
      { nome: "Suzana Batista Maciel", nascimento: "22/09/1968", conjuges: ["João Nogueira Sobrinho"] },
      { nome: "Cláudio Alan Batista Maciel", nascimento: "07/07/1977" }
    ] },
  { nome: "Sebastião Cordeiro Maciel", sexo: "M", nascimento: "20/01/1940", conjuges: ["Elza Ribeiro Maciel"],
    filhos: [
      { nome: "Hudson dos Passos Cordeiro Maciel", nascimento: "15/03/1964" },
      { nome: "Tânia Maria Ribeiro Maciel de Jesus", nascimento: "14/03/1966", conjuges: ["Wilson Afonso de Jesus"] },
      { nome: "Arleth Ribeiro Maciel Neves", nascimento: "12/04/1968", conjuges: ["Marcos Ferreira das Neves"] },
      { nome: "Edson dos Passos Cordeiro Maciel", nascimento: "03/05/1971" },
      { nome: "Emerson Cordeiro Maciel", nascimento: "27/08/1975", conjuges: ["Nilda Socorro da Silva"] }
    ] },
  { nome: "Cleusa Maria Cordeiro", sexo: "F", nascimento: "15/07/1942", conjuges: ["José Eustáquio Cordeiro Machado (Taquinho)"],
    observacao: "Ver a descendência de Taquinho em Antônio & Matildes." }
];

// Ancestrais de Antônio (Toniquinho)
const ANCESTRAIS_ANTONIO = [
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

// Ancestrais de Matildes
const ANCESTRAIS_MATILDES = [
  { depth: 0, nome: "Matildes Cordeiro Maciel", datas: "1926 – 1997" },
  { depth: 1, nome: "José Pedro Duarte Maciel (Zé da Iá)", datas: "1890 – 1950" },
  { depth: 2, nome: "Moises Duarte Maciel", datas: "antes de 1858" },
  { depth: 3, nome: "Joaquim José Duarte Silva", datas: "≈1834" },
  { depth: 3, nome: "Lucia Vieira Maciel", datas: "1834 – 1877" },
  { depth: 2, nome: "Maria Bernarda de Castro Maciel", datas: "" },
  { depth: 1, nome: "Inês Cordeiro Maciel", datas: "1891 – 1955" },
  { depth: 2, nome: "Jorge Cordeiro Valadares", datas: "1860 – 1910" },
  { depth: 2, nome: "Joaquina Bernarda de Castro Machado", datas: "1865 – 1920" }
];

// Ancestrais de Jorge Cordeiro Maciel
const ANCESTRAIS_JORGE = [
  { depth: 0, nome: "Jorge Cordeiro Maciel", datas: "1907 – 1980" },
  { depth: 1, nome: "José Firmino Cordeiro Maciel (Juca da Invejosa)", datas: "1832 – 1900" },
  { depth: 2, nome: "Antônio Julião Dias Maciel", datas: "1800 – 1850" },
  { depth: 2, nome: "Joana Amélia da Silva Cordeiro", datas: "1810 – 1890" },
  { depth: 1, nome: "Matilde Cordeiro Valadares", datas: "" },
  { depth: 2, nome: "Ana Joaquina de Campos", datas: "1783 – " },
  { depth: 2, nome: "João Cordeiro Valadares", datas: "1777 – 1867" }
];

// Ancestrais de Joaquina Bernarda de Castro Machado
const ANCESTRAIS_JOAQUINA = [
  { depth: 0, nome: "Joaquina Bernarda de Castro Machado", datas: "1905 – 1981" },
  { depth: 1, nome: "Gustavo da Cunha e Castro", datas: "" },
  { depth: 1, nome: "América de Castro Machado", datas: "" }
];

function renderFilhos(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = lista.map(f => {
    const sexoClass = f.sexo === "M" ? "male" : "female";
    const apelido = f.apelido ? ` <em>(${f.apelido})</em>` : "";
    const conjuges = f.conjuges && f.conjuges.length
      ? `<div class="spouse"><strong>Cônjuge:</strong> ${f.conjuges.join(" / ")}</div>` : "";
    const obs = f.observacao ? `<div class="meta">${f.observacao}</div>` : "";
    const netos = f.filhos && f.filhos.length
      ? `<div class="netos"><strong>Filhos:</strong><ul style="margin:0.3rem 0 0 1rem;padding:0">` +
        f.filhos.map(n => {
          const c = n.conjuges ? ` · c.c. ${n.conjuges.join(", ")}` : "";
          return `<li>${n.nome}${n.nascimento ? ` (${n.nascimento})` : ""}${c}</li>`;
        }).join("") + `</ul></div>`
      : "";

    return `
      <article class="child-card ${sexoClass}">
        <h4>${f.nome}${apelido}</h4>
        <div class="meta">${f.nascimento || "?"}</div>
        ${obs}
        ${conjuges}
        ${netos}
      </article>`;
  }).join("");
}

function renderAncestrais(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = list.map(item => `
      <div class="tree-item" style="--depth: ${item.depth}" data-depth="${item.depth}">
        <span class="nome">${item.nome}</span>
        ${item.datas ? `<span class="datas"> · ${item.datas}</span>` : ""}
      </div>`).join("");
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

function setupNav() {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  function updateActive() {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute("id");
    });
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", updateActive);
  updateActive();
}

document.addEventListener("DOMContentLoaded", () => {
  renderFilhos(FILHOS_ANTONIO, "filhos-antonio");
  renderFilhos(FILHOS_JORGE, "filhos-jorge");
  renderAncestrais(ANCESTRAIS_ANTONIO, "ancestrais-antonio");
  renderAncestrais(ANCESTRAIS_MATILDES, "ancestrais-matildes");
  renderAncestrais(ANCESTRAIS_JORGE, "ancestrais-jorge");
  renderAncestrais(ANCESTRAIS_JOAQUINA, "ancestrais-joaquina");
  setupNav();
});
