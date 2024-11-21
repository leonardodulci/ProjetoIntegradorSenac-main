document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("CadastrarFuncionario").addEventListener("click", function(event) {
        event.preventDefault();


        document.getElementById("CadastrarFuncionario").scrollIntoView({
            behavior: "smooth"
        });
    });
});

function voltarPaginaInicial() {

    window.location.href = "index.html";
}
