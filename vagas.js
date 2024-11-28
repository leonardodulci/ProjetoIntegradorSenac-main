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

  // Armazena os dados (exemplo usando um array, pode usar localStorage ou um banco de dados)
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
    const resultadoTempo = document.querySelector('.tempoGASTO');
    const resultadoValorGasto = document.querySelector('.valorGasto')

    inputChegada.value = vagaEncontrada.horaEntrada;
    inputSaida.value = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` // Hora atual

  const horaAtual = new Date().getHours();
  const minutoAtual = new Date().getMinutes();
  const horaEntrada = inputChegada.value;

  console.log(horaEntrada)
  console.log(`${horaAtual}:${minutoAtual}:${new Date().getMinutes()}`)

  const horaEntradaString = inputChegada.value; // Assumindo que está no formato HH:MM
  const [horaEntradaH, horaEntradaM] = horaEntradaString.split(':').map(Number);
  const horaEntradaDate = new Date();
  horaEntradaDate.setHours(horaEntradaH);
  horaEntradaDate.setMinutes(horaEntradaM);


  // Calculando a diferença em milissegundos
  const diferencaEmMilisegundos = new Date() -  horaEntradaDate ;

  console.log(diferencaEmMilisegundos)

  // Convertendo para minutos e horas
  const diferencaEmMinutos = Math.round(diferencaEmMilisegundos / 60000);
  const horas = Math.floor(diferencaEmMinutos / 60);
  const minutos = diferencaEmMinutos % 60;
  const horaEminuto = `${horas}:${minutos}`;
  const valorMinuto =  0.2
  const res = diferencaEmMinutos * valorMinuto


  console.log(diferencaEmMinutos)
  console.log(`${horas}:${minutos}`)
  console.log(minutos)
  console.log(res)


  resultadoTempo.textContent = (`Tempo gasto: ${horas} horas e ${minutos} minutos`);
  resultadoValorGasto.textContent = (`O valor total ficou: R$ ${res.toFixed(2)}`)
     
  } else {
      alert('Placa não encontrada.');
  }  

}

console.log(vagasOcupadas)


// Adiciona o event listener ao campo da placa
const inputPlaca = document.querySelector('input[type="text"]');
inputPlaca.addEventListener('input', () => {
  buscarVaga(inputPlaca.value);
});

const botoesPagamento = document.querySelectorAll('.btn-pagamento');

botoesPagamento.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remove a classe 'btn-pagamento--ativo' de todos os botões
    botoesPagamento.forEach(btn => btn.classList.remove('btn-pagamento--ativo'));

    // Adiciona a classe 'btn-pagamento--ativo' ao botão clicado
    botao.classList.add('btn-pagamento--ativo');
  });
});



