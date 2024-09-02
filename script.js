function sortearTimes() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultadoDiv = document.getElementById('resultado');

  if (isNaN(numero) || numero < 1) {
      resultadoDiv.innerHTML = "<p>Por favor, digite um número válido maior que 0.</p>";
      return;
  }

  // Gera números de 1 a n e os embaralha
  const jogadores = Array.from({length: numero}, (_, i) => i + 1).sort(() => Math.random() - 0.5);
  const times = [];

  // Divide em times de 6
  while (jogadores.length) {
      times.push(jogadores.splice(0, 6));
  }

  // Exibe os times
  resultadoDiv.innerHTML = '';
  times.forEach((time, index) => {
      resultadoDiv.innerHTML += `<p>Time ${index + 1}: ${time.join(', ')}</p>`;
  });
}
