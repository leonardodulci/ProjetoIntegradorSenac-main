let totalVagas2 = 50;
let vagasOcupadas2 = 0;
let vagasLivres2 = totalVagas2 - vagasOcupadas2;

// Função para atualizar os valores na tela
function atualizarVagas() {
  
   const InfoSobreVagasOcupadas = document.getElementById('vagas-ocupadas');
   InfoSobreVagasOcupadas.textContent = `Vagas Ocupadas: ${vagasOcupadas2}`;


   const InfoVagaLivre = document.getElementById('vagas-livres');
   InfoVagaLivre.textContent= `Vagas Livres: ${vagasLivres2}`;
  // ... (outras partes do seu código)
  
  console.log(vagasLivres2)
}

// Função para simular a adição de um carro
function adicionarCarro() {
  // Simula a adição de um carro (você pode implementar a lógica real aqui)
  vagasOcupadas2++;
  vagasLivres2--;

  // Atualiza os valores na tela
  atualizarVagas();
}


// Chama a função para atualizar as vagas inicialmente
atualizarVagas();
//atualizarVagas2();

// Exemplo de como chamar a função adicionarCarro ao clicar em um botão:
document.querySelector('.vagas').addEventListener('click', adicionarCarro);