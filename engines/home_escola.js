// Variáveis de controle do mês e ano atuais
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth();
let anoAtual = dataAtual.getFullYear();

const avatar = document.getElementById("avatar");
const dropdown = document.getElementById("dropdown");

avatar.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (e) => {
  if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

function gerarCalendario() {
  const tabela = document.getElementById("calendar-table");
  const titulo = document.getElementById("titulo-calendario");
  const hoje = new Date();
  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
  const ultimoDia = new Date(anoAtual, mesAtual + 1, 0).getDate();

  // Atualiza o título do calendário
  titulo.textContent = `${nomesMeses[mesAtual]} de ${anoAtual}`;

  // Limpa a tabela anterior
  tabela.innerHTML = "";

  // Cabeçalho com os dias da semana
  let header = "<tr>";
  diasSemana.forEach((dia) => {
    header += `<th>${dia}</th>`;
  });
  header += "</tr>";
  tabela.innerHTML += header;

  // Preenchendo os dias do mês
  let linha = "<tr>";
  for (let i = 0; i < primeiroDia; i++) {
    linha += "<td></td>"; // dias vazios antes do início
  }

  for (let dia = 1; dia <= ultimoDia; dia++) {
    if ((primeiroDia + dia - 1) % 7 === 0 && dia !== 1) {
      linha += "</tr><tr>"; // nova linha a cada domingo
    }

    const hojeDia = hoje.getDate();
    const hojeMes = hoje.getMonth();
    const hojeAno = hoje.getFullYear();

    const ehHoje =
      dia === hojeDia && mesAtual === hojeMes && anoAtual === hojeAno;
    const estiloHoje = ehHoje
      ? "style='background-color: #c6d62d; color: white; font-weight: bold; border-radius: 8px'"
      : "";

    linha += `<td ${estiloHoje}>${dia}</td>`;
  }

  linha += "</tr>";
  tabela.innerHTML += linha;
}

// Função para mudar de mês
function mudarMes(direcao) {
  mesAtual += direcao;

  if (mesAtual < 0) {
    mesAtual = 11;
    anoAtual--;
  } else if (mesAtual > 11) {
    mesAtual = 0;
    anoAtual++;
  }

  gerarCalendario();
}

// Chamada inicial
gerarCalendario();
