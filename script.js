// 🔊 Sons personalizados para card
const sons = {
  1: "audio/Hidratar.mp3",
  3: "audio/Ajuda.mp3",
  4: "audio/Descanso.mp3"
};

const mensagens = {
  1: "💧 Muito bem! Hidratar-se é essencial.",
  3: "🤝 Pedir ajuda é um ato de coragem.",
  4: "😴 Descansar também é se cuidar."
};

function mostrarMensagem(opcao) {
  const nome = prompt("Como você se chama?");
  const mensagem = mensagens[opcao] || "";
  const saudacao = nome ? `Olá ${nome}, ` : "";
  document.getElementById("respuesta").textContent = saudacao + mensagem;
  document.getElementById("card").classList.add("girar");

  const som = new Audio(sons[opcao]);
  som.volume = 0.3; // Volume reduzido
  som.play();
}

function girarCard() {
  document.getElementById("card").classList.remove("girar");
}

// 🎞️ Álbum motivacional
let indiceAtual = 0;
const foto = document.getElementById("fotoAlbum");
const frase = document.getElementById("fraseFoto");

const fotos = Array.from({ length: 20 }, (_, i) => `img/galeria/foto${i + 1}.png`);
const frases = [
  "Juntos construímos mais que código.",
  "Cada linha tem emoção.",
  "Errar ensina, apoiar fortalece.",
  "O bootcamp nos juntou...",
  "Codificamos com afeto.",
  "Avançamos juntos!",
  "Empatia é nosso framework.",
  "Criamos memórias.",
  "Nossas diferenças são poder.",
  "Conectados, somos fortes.",
  "Compartilhamos ideias com coração.",
  "A tecnologia nos aproximou.",
  "O código é nossa linguagem.",
  "Somos uma rede de apoio.",
  "O sucesso começa no esforço.",
  "Trabalhamos com propósito.",
  "Aprender é nosso combustível.",
  "Estamos sempre conectados.",
  "Ninguém fica pra trás.",
  "Com você é mais bonito."
];

function cambiarFoto(direcao) {
  indiceAtual = (indiceAtual + direcao + fotos.length) % fotos.length;
  foto.src = fotos[indiceAtual];
  frase.textContent = frases[indiceAtual];
}

setInterval(() => cambiarFoto(1), 20000);

// 📝 Publicações
function publicar(idCampo) {
  const conteudo = document.getElementById(idCampo).value.trim();
  if (!conteudo) return;

  const feed = document.getElementById("feedPosts");
  const novaPostagem = document.createElement("div");
  novaPostagem.className = "post";
  novaPostagem.innerHTML = `<strong>Usuário:</strong> ${conteudo}`;
  feed.prepend(novaPostagem);

  document.getElementById(idCampo).value = "";
}

function publicarResumo() {
  const titulo = document.getElementById("tituloAula").value.trim();
  const resumo = document.getElementById("resumoAula").value.trim();
  const reflexao = document.getElementById("reflexao").value.trim();
  if (!titulo || !resumo) return;

  const feed = document.getElementById("feedEstudo");
  const postagem = document.createElement("div");
  postagem.className = "post";
  postagem.innerHTML = `<h3>${titulo}</h3><p><strong>Resumo:</strong> ${resumo}</p><p><em>Reflexão:</em> ${reflexao}</p>`;
  feed.prepend(postagem);

  document.getElementById("tituloAula").value = "";
  document.getElementById("resumoAula").value = "";
  document.getElementById("reflexao").value = "";
}









window.addEventListener("DOMContentLoaded", () => {
  const musicaFundo = new Audio("audio/fundo.mp3");
  musicaFundo.loop = true;
  musicaFundo.volume = 0.1;
  musicaFundo.play();
});
