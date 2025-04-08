function loginUser() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("password").value.trim(); // Corrigido aqui

  if (!email || !senha) {
    alert("Preencha seu e-mail e senha.");
    return;
  }

  const primeiraEntrada = localStorage.getItem("primeiraEntrada");

  document.body.classList.add("fade-out");

  setTimeout(() => {
    if (primeiraEntrada === null || primeiraEntrada === "true") {
      localStorage.setItem("primeiraEntrada", "false");
      window.location.href = "../Logins/primeira_vez.html";
    } else {
      window.location.href = "painel-aluno.html";
    }
  }, 600);
}

document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    loginUser();
  });
