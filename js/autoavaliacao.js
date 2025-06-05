document.querySelectorAll(".options button").forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    parent.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

const perguntasDiv = document.getElementById("perguntas");
const resultadoDiv = document.getElementById("resultado");
const verResultadoBtn = document.getElementById("verResultado");
const refazerBtn = document.getElementById("refazer");

verResultadoBtn.addEventListener("click", () => {
  let simCount = 0;

  document.querySelectorAll(".options").forEach(group => {
    const selected = group.querySelector("button.selected");
    if (selected && selected.textContent === "Sim") {
      simCount++;
    }
  });

  perguntasDiv.style.display = "none";
  verResultadoBtn.style.display = "none";
  resultadoDiv.style.display = "flex";
  refazerBtn.style.display = "inline-block";

  let classe = "";
  let titulo = "";
  let texto = "";
  let botoes = "";

  if (simCount === 0) {
    classe = "ok";
    titulo = "Você parece estar bem!";
    texto = "Continue cultivando hábitos saudáveis e atento aos sinais do seu corpo e mente.";
    botoes = `<button onclick="window.location.href='pagina-autocuidado.html'">Explorar autocuidado</button>`;
  } else if (simCount === 1 || simCount === 2) {
    classe = "alerta";
    titulo = "Você pode estar enfrentando alguns desafios emocionais.";
    texto = "Considere explorar práticas de autocuidado para ajudar a melhorar seu bem-estar.";
    botoes = `<button onclick="window.location.href='pagina-autocuidado.html'">Explorar autocuidado</button>`;
  } else {
    classe = "risco";
    titulo = "Considere buscar ajuda profissional";
    texto = "Você pode estar enfrentando dificuldades significativas. Buscar ajuda é um ato de coragem e cuidado.";
    botoes = `
      <button onclick="window.location.href='buscar-ajuda.html'">Buscar ajuda</button>
      <button onclick="window.location.href='pagina-autocuidado.html'">Explorar autocuidado</button>
    `;
  }

  resultadoDiv.className = `result ${classe}`;
  document.querySelector("main").classList.add("resultado-ativo");
  document.querySelector("main").classList.remove("resultado-ativo");
  resultadoDiv.innerHTML = `
    <div class="result-texto">
      <h3>${titulo}</h3>
      <p>${texto}</p>
    </div>
    <div class="botoes-acoes">
      ${botoes}
    </div>
  `;
});

refazerBtn.addEventListener("click", () => {
  document.querySelectorAll(".options button").forEach(b => b.classList.remove("selected"));
  
  resultadoDiv.style.display = "none";
  refazerBtn.style.display = "none";

  perguntasDiv.style.display = "block";
  verResultadoBtn.style.display = "inline-block";
});
