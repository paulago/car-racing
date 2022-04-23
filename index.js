$(document).ready(function () {
  // Array para el número de participantes
  const players = [];
  // Array para las imágenes
  const imgCars = [
    "./img/car1.png",
    "./img/car2.png",
    "./img/car3.png",
    "./img/car4.png",
    "./img/car5.png",
    "./img/car6.png",
    "./img/car7.png",
    "./img/car8.png",
    "./img/car9.png",
  ];
  const divRace = $("#race");

  // Oculta el botón de reiniciar
  $("#restart").hide();

  // Función para adjuntar imagen a cada jugador
  $("#participants").change(function () {
    $("#race").empty();
    let cars = $("#participants").val();
    for (let i = 0; i < cars; i++) {
      const img = document.createElement("img");
      img.src = imgCars[i];
      divRace.append(img);
    }
  });

  // Función para hacer que los coches se muevan
  $("#start").click(function () {
    const raceWidth = $("#race").width() - 200;
    // Para mover los coches se usa el método animate
    $("img").animate(
      {
        marginLeft: raceWidth,
      },

      // Se genera de forma aleatoria valores entre 1 y 10
      Math.random() * 10
    );

    // Oculta el botón de iniciar
    $("#start").hide();
    // Muestra el botón de reiniciar
    $("#restart").show();
  });

  // Función para que los coches vuelvan a la posición inicial
  $("#restart").click(function () {
    $("img").animate(
      {
        marginLeft: "0px",
      },
      1000
    );

    // Oculta el botón de reiniciar
    $("#restart").hide();
    // Muestra el botón de iniciar
    $("#start").show();
  });
});
