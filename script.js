function construirTablero() {
  const tablero = document.getElementById("tablero");

  // Vamos a construir las cajitas
  for (let i = 0; i < 5; i += 1) {
    let fila = document.createElement("div"); //<div></div>
    fila.className = "fila"; //<div class="fila"></div>

    for (let j = 0; j < 5; j += 1) {
      let cajita = document.createElement("div"); //<div></div>
      cajita.className = "caja"; //<div class="caja"></div>
      fila.appendChild(cajita); // <div class="fila"><div class="caja"></div></div>
    }

    tablero.appendChild(fila);
  }
}

function construirTeclado() {
  //pass
}

construirTablero();
construirTeclado();
