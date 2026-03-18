function abrirModal(src) {
  document.getElementById("imagenModal").src = src;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

const imagenes = [
  { src: "/img/galeria/fundocomcodigos.png", texto: "Nuestro inicio lleno de códigos 🌟" },
  { src: "/img/fundonaranjatodosjuntos.png", texto: "Todos juntos, creando algo increíble 💛" },
  { src: "/img/galeria/mifundoperfecto.png", texto: "Mi fondo perfecto con toque personal ✨" },
  { src: "/img/galeria/marcusfundonegro.png", texto: "Mi estilo, mi esencia 🖤" },
  { src: "/img/coders.png", texto: "La energía de los coders 🚀" },
  { src: "/img/fundobege.png", texto: "Colores suaves, ideas fuertes 🎨" },
  { src: "/img/galeria/babyfactoriafamily.png", texto: "La baby familia en su esplendor 👶🧡" },
  { src: "/img/galeria/bycalero.png", texto: "Creaciones con toque especial por Calero 🧑‍🎨" },
  { src: "/img/galeria/fotoscalero.png", texto: "Momentos capturados con cariño 📸" },
  { src: "/img/galeria/fundoredondobegefactoriaf5.png", texto: "Diseño redondo, corazón completo 💻💛" },
  { src: "/img/galeria/fundoprojectocards.png", texto: "Nuestro proyecto con cartas llenas de código 🃏" },
  { src: "/img/galeria/inicioprojectocardfigma.png", texto: "El inicio en Figma, ¡todo un viaje! 🖌️" },
  { src: "/img/galeria/fundofigmawebcards.png", texto: "Diseño web, pasión y colaboración 🌐" },
  { src: "/img/galeria/figmaprojecto.png", texto: "El proyecto toma forma en Figma 💡" },
  { src: "/img/galeria/fundoestudiandojava.png", texto: "Java + café + sueños ☕👨‍💻" },
  { src: "/img/galeria/fundogithubjuntos.png", texto: "Unidos por el código en GitHub 🤝" },
  { src: "/img/galeria/cachopoking.png", texto: "¡El rey del cachopo! 👑🥩" },
  { src: "/21diasconjava/cumpleañoscalero.png", texto: "Feliz cumpleaños, Calero 🎂🎉" },
  { src: "/21diasconjava/cardmensage.png", texto: "Mensajes con corazón 💌" },
  { src: "/img/galeria/fundocoloridobootcampfamily.png", texto: "Familia Bootcamp, color y emoción 🌈❤️" },
  { src: "/img/fundonochecolorido.png", texto: "La noche se llena de creatividad 🌙🎨" },
  { src: "/img/fundodiacolorido.png", texto: "El día brilla con colaboración ☀️👨‍👩‍👧‍👦" },
  { src: "/img/galeria/fundojavacolorido.png", texto: "Aprendiendo Java con mucho estilo 🧠🧡" },
  { src: "/img/galeria/fundolenguagescolorido.png", texto: "Los lenguajes que nos unen 💻🌐" },
  { src: "/img/galeria/fundofamilynaestrada.png", texto: "Nuestra familia en la ruta 🚶‍♀️❤️" }
];

  // ...añade el resto aquí con su texto respectivo

let indexActual = 0;
let intervalo;

function abrirModal(src) {
  indexActual = imagenes.findIndex(img => img.src === src);
  mostrarImagen();
  document.getElementById("modal").style.display = "block";
  autoplay(); // Quita esta línea si no quieres que se reproduzca automáticamente
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
  clearInterval(intervalo);
}

function mostrarImagen() {
  const imagenActual = imagenes[indexActual];
  const imagenElemento = document.getElementById("imagenModal");
  imagenElemento.style.opacity = 0;
  setTimeout(() => {
    imagenElemento.src = imagenActual.src;
    document.getElementById("textoImagen").innerText = imagenActual.texto;
    imagenElemento.style.opacity = 1;
  }, 200);
}

function imagenSiguiente() {
  indexActual = (indexActual + 1) % imagenes.length;
  mostrarImagen();
}

function imagenAnterior() {
  indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
}

function autoplay() {
  intervalo = setInterval(imagenSiguiente, 15000); // cambia cada 5 segundos
}

window.addEventListener("DOMContentLoaded", () => {
  const musicaFundo = new Audio("audio/fundo.mp3");
  musicaFundo.loop = true;
  musicaFundo.volume = 0.1;
  musicaFundo.play();

  const controleVolume = document.getElementById("controleVolume");
  controleVolume.addEventListener("input", () => {
    musicaFundo.volume = parseFloat(controleVolume.value);
  });
});
document.getElementById("botaoVolume").addEventListener("click", () => {
  document.getElementById("controleVolume").style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  const musicaFundo = document.getElementById("musicaFundo");
  const controleVolume = document.getElementById("controleVolume");
  const botaoVolume = document.getElementById("botaoVolume");

  if (musicaFundo && controleVolume && botaoVolume) {
    botaoVolume.addEventListener("click", () => {
      controleVolume.style.display = "block";
    });

    controleVolume.addEventListener("input", () => {
      musicaFundo.volume = parseFloat(controleVolume.value);
    });
  }
});


