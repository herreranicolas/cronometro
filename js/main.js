let hora = 0;
minutos = 0;
segundos = 0;
let intervalID;

hora = verificarTiempo(hora);
minutos = verificarTiempo(minutos);
segundos = verificarTiempo(segundos);

let tiempo = document.getElementById("tiempo");
btnComenzar = document.getElementById("btnComenzar");
btnComenzar.addEventListener("click", comenzarCronometro);
btnPausar = document.getElementById("btnPausar");
btnPausar.addEventListener("click", pausarCronometro);
btnResetear = document.getElementById("btnResetear");
btnResetear.addEventListener("click", resetearCronometro);

tiempo.innerHTML = `${hora}:${minutos}:${segundos}`;

function verificarTiempo(tiempo) {
  if (tiempo !== "00" && tiempo < 10) {
    tiempo = "0" + tiempo;
  }
  return tiempo;
}

function comenzarCronometro() {
  intervalID = setInterval(() => {
    if (segundos < 59) {
      segundos++;
      tiempo.innerHTML = `${verificarTiempo(hora)}:${verificarTiempo(
        minutos
      )}:${verificarTiempo(segundos)}`;
    } else {
      segundos = 0;
      minutos++;
      tiempo.innerHTML = `${verificarTiempo(hora)}:${verificarTiempo(
        minutos
      )}:${verificarTiempo(segundos)}`;
    }
    if (minutos > 59) {
      minutos = 0;
      hora++;
      tiempo.innerHTML = `${verificarTiempo(hora)}:${verificarTiempo(
        minutos
      )}:${verificarTiempo(segundos)}`;
    }
  }, 1000);
  btnComenzar.classList.add("d-none")
}

function pausarCronometro() {
  clearInterval(intervalID);
  btnComenzar.classList.remove("d-none");
}

function resetearCronometro() {
  let hora = 0;
  minutos = 0;
  segundos = 0;
  tiempo.innerHTML = `${verificarTiempo(hora)}:${verificarTiempo(
    minutos
  )}:${verificarTiempo(segundos)}`;
  clearInterval(intervalID);
  intervalID = undefined;
  btnComenzar.classList.remove("d-none");
}
