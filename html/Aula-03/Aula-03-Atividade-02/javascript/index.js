function formatarMoeda(valor) {
  // Remove todos os caracteres que não são números
  valor = valor.replace(/\D/g, "");

  // Adiciona um zero à esquerda, caso o valor esteja vazio
  if (valor.length === 0) {
    valor = "0";
  }

  // Transforma o valor em número e divide por 100 para obter os centavos
  valor = parseFloat(valor) / 100;

  // Formata o valor como moeda brasileira
  valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  // Retorna o valor formatado
  return valor;
}

function desformatarMoeda(valor) {
  // Remove todos os caracteres que não são números
  valor = valor.replace(/\D/g, "");

  // Divide o valor por 100 para obter o valor em reais e centavos
  valor = parseFloat(valor) / 100;

  // Retorna o valor desformatado
  return valor;
}

function formatarQuilometragem(valor) {
  // Divide o valor por 1000 para obter o valor em quilômetros
  valor = valor / 1000;

  // Formata o valor com um separador de milhar e duas casas decimais
  valor = valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  // Retorna o valor formatado com a unidade de medida
  return valor + " km";
}

valor_fipe.addEventListener("keyup", function (e) {
  e.target.value = formatarMoeda(e.target.value);
});

const carro = {
  marca: "",
  modelo: "",
  ano: 0,
  quilometragem: "",
  valor_fipe: "",

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

    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  },
};

function calcular() {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = parseInt(document.getElementById("ano").value);
  const cor = document.getElementById("cor").value;
  const quilometragem = parseFloat(document.getElementById("km").value);
  const valor_fipe = desformatarMoeda(
    document.getElementById("valor_fipe").value
  );

  console.log(valor_fipe);

  carro.marca = marca;
  carro.modelo = modelo;
  carro.ano = ano;
  carro.cor = cor;
  carro.quilometragem = quilometragem;
  carro.valor_fipe = valor_fipe;

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `<h2>Informações sobre o carro</h2>
  <p><strong>Marca:</strong> ${carro.marca}</p>
  <p><strong>Modelo:</strong> ${carro.modelo}</p>
  <p><strong>Ano:</strong> ${carro.ano}</p>
  <p><strong>Cor:</strong> ${carro.cor}</p>
  <p><strong>Quilometragem:</strong> ${formatarQuilometragem(
    carro.quilometragem
  )}</p>
  <p><strong>Valor Fipe:</strong> R$ ${carro.valor_fipe.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  )}</p>
  <p><strong>Anos de utilização:</strong> ${carro.anosUtilizacao()}</p>
  <p><strong>Valor de mercado:</strong>${carro.valorMercado()}</p>`;
}
