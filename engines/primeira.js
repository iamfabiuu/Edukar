const slides = document.querySelectorAll(".slide");
let slideAtual = 0;
const respostas = {};

const avancarSlide = () => {
  slides[slideAtual].classList.remove("ativo");
  slideAtual++;
  slides[slideAtual].classList.add("ativo");
};

const botoesNext = document.querySelectorAll(".next-btn");
botoesNext.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = slides[slideAtual].querySelector("input");
    if (input && input.value.trim() === "")
      return alert("Por favor, preencha o campo!");
    if (input) respostas[input.name] = input.value;

    if (slideAtual === slides.length - 2) {
      avancarSlide();
      setTimeout(() => {
        console.log("Respostas:", respostas);
        alert("Tudo pronto! Vamos começar 🎉");
        // window.location.href = "/home.html";
      }, 3000);
    } else {
      avancarSlide();
    }
  });
});

const botoesTema = document.querySelectorAll(".theme-btn");
botoesTema.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tema = btn.getAttribute("data-tema");
    document.documentElement.setAttribute("data-tema", tema);
    avancarSlide();
  });
});
