// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");




// Array de objetos que contiene cada línea y su tiempo de aparición en segundos

var lyricsData = [
  { text: "🌟 Yo no me dejo llevar de nadie", time: 1 },
  { text: "😄 Yo solo me dejo llevar de tu sonrisa", time: 3 },
  { text: "💋 Y del lunar cerquita de tu boca", time: 6 },
  { text: "🌀 Si yo estoy loco, tú estás loquita", time: 9 },
  { text: "✨ Pero, baby, como tú no hay otra, no", time: 12 },
  { text: "🌻 Quiero regalarte girasoles 🌻", time: 16 },
  { text: "🏖️ Ir pa' la playa y buscarte caracoles 🐚", time: 18 },
  { text: "💑 Estando aquí contigo no miro errores", time: 21 },
  { text: "🎶 Vamos a bailar doscientas canciones 🎶", time: 25 },
  { text: "Nadie me pone como tú me pones 😈!!", time: 28 },
  { text: "🙏 Yo le hablo a Dios, y tú eres su respuesta", time: 43 },
  { text: "🌈 Aprendí que los momentos lindos nunca cuestan", time: 46 },
  { text: "😍 Como cuando me regalas tu mirada", time: 49 },
  { text: "☀️ Y el sol responde", time: 52 },
  { text: "🔥 Cuando estoy encima de ti, de ti", time: 55 },
  { text: "😜 Mami, ya me olvido de to', de to'", time: 57 },
  { text: "🫂 No hace falta nadie aquí", time: 1.01 },
  { text: "Solamente tú y yo 💛", time: 1.04 },
  { text: "Antes de que salga el sol 🌅", time: 1.07 },
  { text: "🚗 Pisa el acelerador", time: 1.09 },
  { text: "Me vaya sin freno y pierda el control 💨", time: 1.10 },
  { text: "Nada más seremos dos 👫", time: 1.13 },
  { text: "Tú y yo acariciándonos 🤲", time: 1.15 },
  { text: "En medio del tiempo, sin decir adiós ⏳", time: 1.16 },
  { text: "Y solo mírame 👀", time: 1.19 },
  { text: "Con esos ojitos lindos 🥺", time: 1.22 },
  { text: "Que con eso yo estoy bien 💫", time: 1.24 },
  { text: "Hoy he vuelto a nacer 🎇", time: 1.27 },
  { text: "Y solo mírame 👀", time: 1.31 },
  { text: "Con esos ojitos lindos 🥺", time: 1.33 },
  { text: "Que con eso yo estoy bien ✨", time: 1.36 },
  { text: "Hoy he vuelto a nacer 🎇", time: 1.39 }
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100); //cada 0.1 segundos

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

