const teste = "abc";
function palindromo(value) {
  let frase;
  if (value.includes("-")) {
    frase = value.split("-").join(" ").toLowerCase().split("");
  } else {
    frase = value.toLowerCase().split("");
  }

  frase = frase.filter((item) => item !== " ");
  const aux = frase;
  const fraseReversa = frase.reverse();

  console.log(frase);
  console.log(fraseReversa);

  return JSON.stringify(frase) === JSON.stringify(fraseReversa);
}

const result = palindromo(teste);
console.log(result);
