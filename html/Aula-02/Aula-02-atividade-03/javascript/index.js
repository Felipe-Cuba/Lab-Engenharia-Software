function palindromo(value) {
  let aux;
  if (value.includes('-')) {
    aux = value
      .split('-')
      .join(' ')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split('')
      .filter((value) => value !== ' ');
  } else {
    aux = value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split('')
      .filter((value) => value !== ' ');
  }
  const frase = JSON.stringify(aux);
  const fraseReversa = JSON.stringify(aux.reverse());
  return frase === fraseReversa;
}

const frase = prompt('Digite uma frase');

if (frase.length > 0) {
  const y = +frase;

  if (!isNaN(y)) {
    alert('Você digitou um número, não uma frase! 😐');
  } else {
    if (palindromo(frase)) {
      alert('Essa frase é um palíndromo! 😃');
    } else {
      alert('Essa frase não é uma palíndromo! 🙁');
    }
  }
} else {
  alert('Digite alguma coisa poxa! 😑');
}

document.write('Obrigado por visitar a página!');
