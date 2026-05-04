// Selecionando elementos
const modal = document.getElementById("modalInscricao");
const btnAbrirModal = document.querySelector(".cta-button");
const btnFecharModal = document.querySelector(".close-button");
const form = document.getElementById("formSustentavel");
const btnContatoNav = document.querySelector(".btn-contato");

// 1. Abrir modal ao clicar no botão da seção Hero
btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

// 2. Abrir modal ao clicar em "Fale Conosco" no menu
btnContatoNav.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

// 3. Fechar modal no 'X'
btnFecharModal.onclick = () => modal.style.display = "none";

// 4. Fechar modal se clicar fora dele
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// 5. Funcionamento do Formulário (Simulação de envio)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    
    // Feedback para o usuário
    alert(`Obrigado, ${nome}! Seus dados foram enviados com sucesso para nossa base sustentável.`);
    
    // Limpa e fecha
    form.reset();
    modal.style.display = "none";
});

// Mantendo a rolagem suave do código anterior
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if(this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
