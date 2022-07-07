$(document).ready(function () {
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

  // Array para los jugadores seleccionados
  let players = [];

  // El div de la carrera
  const divRace = $("#race");

  // Para la meta
  const raceWidth = divRace.width() - 200;

  // Oculta el botón de reiniciar
  $("#restart").hide();

  // Función para adjuntar imagen a cada jugador
  $("#participants").change(function () {
    divRace.empty();
    let cars = $("#participants").val();
    players = new Array(parseInt(cars));
    for (let i = 0; i < players.length; i++) {
      const img = document.createElement("img");
      img.setAttribute("id", `player${i + 1}`);
      img.src = imgCars[i];
      divRace.append(img);
    }
  });

  // Función para hacer que los coches se muevan
  $("#start").click(function () {
    // Oculta el botón de iniciar
    $("#start").hide();
    // Muestra el botón de reiniciar
    $("#restart").show();

    let positions = 1;

    for (let i = 1; i <= players.length; i++) {
      // Para mover los coches se usa el método animate
      $("#player" + i).animate(
        {
          marginLeft: raceWidth,
        },

        Math.random() * 5000,
        function () {
          $("#classificationTable").append(
            "<tr><td>" + positions++ + "º" + "</td><td>" + i + "</td></tr>"
          );
        }
      );
    }
  });

  // Función para que los coches vuelvan a la posición inicial
  $("#restart").click(function () {
    for (let i = 1; i <= players.length; i++) {
      $("#player" + i).css("marginLeft", "0px");
      $("#classificationTable").find("tr:gt(0)").remove();
    }
    // Oculta el botón de reiniciar
    $("#restart").hide();
    // Muestra el botón de iniciar
    $("#start").show();
  });
});
