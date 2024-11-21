// Seleciona todas as vagas
const vagas = document.querySelectorAll('.vaga');

let vagasOcupadas = JSON.parse(localStorage.getItem('vagasOcupadas')) || []; // Carrega do localStorage ou inicia um novo array


// Função para marcar uma vaga como ocupada e coletar dados
function marcarVaga(vaga) {
  // Marca a vaga como ocupada (você pode personalizar a classe)
  vaga.classList.add('ocupada');

  // Coleta os dados da vaga
  const placa = prompt('Digite a placa do veículo:') ;
  const horaEntrada = prompt('Digite a hora de entrada:');

  // Armazena os dados (exemplo usando um array, você pode usar localStorage ou um banco de dados)
  const dadosVaga = {
    placa,
    horaEntrada
  };
  // Convertendo o objeto para uma string JSON
    const dadosVagaString = JSON.stringify(dadosVaga);

// Armazenando no localStorage
    localStorage.setItem('dadosVaga', dadosVagaString);

    
  // Adiciona os dados a um array (ajuste para sua lógica de armazenamento)
  vagasOcupadas.push(dadosVaga);
  localStorage.setItem('vagasOcupadas', JSON.stringify(vagasOcupadas));


    const infoVaga = document.querySelector('.info-vaga');

  // Exibe os dados da vaga
  const mensagem = dadosVaga;
  console.log(dadosVaga)

  // Exibe as informações da vaga ocupada (opcional)

  console.log(`Vaga ${vaga.textContent} ocupada por ${placa} às ${horaEntrada} horas`);

  const resultadoElement = document.querySelector('span.info-vaga');

  resultadoElement.textContent = `Vaga ${vaga.textContent} ocupada por ${placa} às ${horaEntrada} horas`;
}



// Adiciona o event listener a cada vaga
vagas.forEach(vaga => {
  vaga.addEventListener('click', () => {
    marcarVaga(vaga);
  });
});

// Array para armazenar as informações das vagas ocupadas (ajuste conforme sua necessidade)

function buscarVaga(placa) {
  const vagaEncontrada = vagasOcupadas.find(vaga => vaga.placa === placa);

  if (vagaEncontrada) {
      const inputChegada = document.querySelector('.Chegada');
      const inputSaida = document.querySelector('.saída');

      inputChegada.value = vagaEncontrada.horaEntrada;
      inputSaida.value = new Date().toLocaleTimeString(); // Hora atual

      // ... (outras ações, se necessário)
  } else {
      alert('Placa não encontrada.');
  }
}

// Adiciona o event listener ao campo da placa
const inputPlaca = document.querySelector('input[type="text"]');
inputPlaca.addEventListener('input', () => {
  buscarVaga(inputPlaca.value);
});