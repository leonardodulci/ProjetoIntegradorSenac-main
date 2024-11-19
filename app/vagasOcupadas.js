
let totalVagas2 = 50;
let vagasOcupadas2 = 0;
let vagasLivres2 = totalVagas2 - vagasOcupadas2;

// Função para atualizar os valores na tela
function atualizarVagas() {
    var totalVagasElement = document.getElementById('total-vagas'); // Substitua 'total-vagas' pelo ID correto
    var vagasOcupadasElement = document.getElementById('vagas-ocupadas');
    var vagasLivresElement = document.getElementById('vagas-livres')



   const resultadoContagem = document.querySelector('span.quadroContagem')

   resultadoContagem.textContent = `Total de vagas: ${totalVagasElement}`;
   
   const dadosVagaString = localStorage.getItem('dadosVaga');
   const dadosVaga = JSON.parse(dadosVagaString);

   // Exibe os dados na página (ajuste de acordo com sua estrutura HTML)
   document.getElementsByClassName('DigitePlaca').textContent = `Placa: ${dadosVaga.placa}, Hora de Entrada: ${dadosVaga.horaEntrada}`;

   
 console.log(`total de vagas: ${totalVagasElement} 
    Vagas ocupadas: ${vagasOcupadasElement} 
  Vagas livres:${vagasLivresElement}`);


var infovagasquantidade = document.querySelector('span.QuantidadeDeVagas');

infovagasquantidade.textContent = `Total de vagas:${totalVagasElement} 

 Vagas Ocupadas: ${vagasOcupadasElement}
 Vagas Livres: ${vagasLivresElement}
`;

console.log(`total de vagas2: ${totalVagasElement.textContent} Vagas ocupadas: ${vagasOcupadasElement.textContent} 
  Vagas livres:${vagasLivresElement.textContent}`);

}
atualizarVagas();

