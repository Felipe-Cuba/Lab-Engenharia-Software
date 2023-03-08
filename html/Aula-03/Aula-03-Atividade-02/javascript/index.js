const carro = {
  marca: '',
  modelo: '',
  ano: 0,
  quilometragem: '',
  valor_fipe: '',

  anosUtilizacao() {
    const dateNow = new Date();
    const year = dateNow.getFullYear();

    return year - this.ano;
  },

  valorMercado() {
    const anosUtilizados = this.anosUtilizacao();

    const kmPorAno = this.quilometragem / anosUtilizados;

    let valor;
    if (kmPorAno <= 30000) {
      valor = this.valor_fipe * 1.1;
    } else if (kmPorAno > 30000 && kmPorAno <= 50000) {
      valor = this.valor_fipe;
    } else {
      valor = this.valor_fipe * 0.9;
    }

    return valor.toFixed(2);
  },
};

function calcular() {
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const ano = parseInt(document.getElementById('ano').value);
  const cor = document.getElementById('cor').value;
  const quilometragem = parseFloat(document.getElementById('km').value);
  const valor_fipe = parseFloat(document.getElementById('valor_fipe').value);

  carro.marca = marca;
  carro.modelo = modelo;
  carro.ano = ano;
  carro.cor = cor;
  carro.quilometragem = quilometragem;
  carro.valor_fipe = valor_fipe;

  const resultado = document.getElementById('resultado');

  resultado.innerHTML = `<h2>Informações sobre o carro</h2>
  <p><strong>Marca:</strong> ${carro.marca}</p>
  <p><strong>Modelo:</strong> ${carro.modelo}</p>
  <p><strong>Ano:</strong> ${carro.ano}</p>
  <p><strong>Cor:</strong> ${carro.cor}</p>
  <p><strong>Quilometragem:</strong> ${carro.quilometragem} km</p>
  <p><strong>Valor Fipe:</strong> R$ ${carro.valor_fipe.toFixed(2)}</p>
  <p><strong>Anos de utilização:</strong> ${carro.anosUtilizacao()}</p>
  <p><strong>Valor de mercado:</strong> R$ ${carro.valorMercado()}</p>`;
}
