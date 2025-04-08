document
  .getElementById("revealFeaturesBtn")
  .addEventListener("click", function () {
    const features = document.getElementById("hiddenFeatures");
    if (features.classList.contains("hidden")) {
      features.classList.remove("hidden");
      this.textContent = "Esconder poderes do Edukar";
    } else {
      features.classList.add("hidden");
      this.textContent = "Descobrir os poderes do Edukar";
    }
  });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio tradicional do formulário

  // Obter os valores do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Expressão regular para validar e-mails com domínios específicos
  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@(gmail\.com|icloud\.com|outlook\.com|hotmail\.com|yahoo\.com)$/;

  // Verificar se o email segue o padrão
  if (!emailPattern.test(email)) {
    const feedback = document.getElementById("formFeedback");
    feedback.textContent =
      "Por favor, insira um e-mail válido (ex: exemplo@gmail.com).";
    feedback.classList.add("error");
    feedback.style.visibility = "visible";
    feedback.style.opacity = 1;
    return; // Não envia o formulário se o email for inválido
  }

  // Se os campos estão preenchidos corretamente
  if (name && email && message) {
    // Exibe um feedback de sucesso
    const feedback = document.getElementById("formFeedback");
    feedback.textContent =
      "Mensagem enviada com sucesso! Entraremos em contato em breve.";
    feedback.classList.remove("error");
    feedback.style.visibility = "visible";
    feedback.style.opacity = 1;

    // Limpa o formulário
    document.getElementById("contactForm").reset();
  } else {
    // Exibe um erro caso algum campo esteja vazio
    const feedback = document.getElementById("formFeedback");
    feedback.textContent = "Por favor, preencha todos os campos.";
    feedback.classList.add("error");
    feedback.style.visibility = "visible";
    feedback.style.opacity = 1;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");

  // Função para movimentar aleatoriamente os círculos
  function moveCircles() {
    circles.forEach((circle) => {
      const randomX = Math.random() * window.innerWidth; // Posição aleatória na tela
      const randomY = Math.random() * window.innerHeight;
      const randomDuration = Math.random() * (15 - 10) + 10; // Aleatoriza o tempo de animação

      // Aplica o movimento e a duração aleatória
      circle.style.animation = `moveCircle ${randomDuration}s infinite ease-in-out`;
      circle.style.left = `${randomX}px`;
      circle.style.top = `${randomY}px`;
    });
  }

  // Chama a função para começar a animação
  moveCircles();
});
