function pegarHoras() {
  const data = new Date();
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const segundos = data.getSeconds();
  const hora = horas < 10 ? `0${horas}` : horas;
  const minuto = minutos < 10 ? `0${minutos}` : minutos;
  const segundo = segundos < 10 ? `0${segundos}` : segundos;

  const relogio = `${hora}:${minuto}:${segundo}`;
  document.getElementById('relogio').innerHTML = relogio;
}

setInterval(() => {
  pegarHoras();
}, 1000);
