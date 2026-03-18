// Diccionario de idiomas
const translations = {
  "es": {
    "nav_home": "Inicio",
    "nav_learn_remember": "Aprender y Practicar",
    "nav_learn_fun": "Aprender con diversión",
    "nav_support": "Apoyo y Motivación",
    "nav_90_days": "Plan 90 Días",
    "hub_title": "Plan de Estudio Fullstack 90 Días",
    "hub_subtitle": "Domina el desarrollo web desde cero hasta experto",
    "card_html_title": "HTML5",
    "card_html_desc": "La estructura de la web. Aprende semántica, accesibilidad y SEO.",
    "card_css_title": "CSS3",
    "card_css_desc": "Diseño y estilos. Flexbox, Grid, animaciones y diseño responsivo.",
    "card_js_title": "JavaScript",
    "card_js_desc": "Lógica y dinamismo. DOM, ES6+, asincronía y APIs.",
    "card_react_title": "React",
    "card_react_desc": "Interfaces interactivas. Componentes, estado, hooks y enrutamiento.",
    "card_fullstack_title": "Fullstack",
    "card_fullstack_desc": "Node.js, bases de datos, APIs REST y despliegue de aplicaciones.",
    "btn_start_learning": "Empezar a Aprender",
    "community_title": "🌐 Comunidad Aprenda Fullstack con Marvin",
    "community_subtitle": "Comparte tus logros, aprende de otros y crece junto a la comunidad de desarrolladores.",
    "footer_creator": "Haz click aqui conosca creador dela web",
    "creator_title": "¡Hola! Soy Marvin 👋",
    "creator_desc1": "Soy brasileño, tengo 44 años, vivo en España, estoy felizmente casado con Fernanda y soy el orgulloso padre de Fernandiño.",
    "creator_desc2": "Creé este espacio porque creo fielmente en el poder de aprender juntos. No importa tu edad, la experiencia previa o los errores de código que tengas en el camino: el mundo del desarrollo de software es un viaje que se disfruta y asimila muchísimo más en compañía de personas apoyándose mutuamente.",
    "creator_desc3": "Si yo estoy logrando mi transición al mundo Tech a esta grandiosa edad, TÚ TAMBIÉN PUEDES. Todo esfuerzo vale la pena cuando hay dedicación. ¡Bienvenidos a la familia y a seguir programando!",
    "btn_volver": "Volver al Plan de Estudio",
    "lang_es": "Español",
    "lang_en": "Inglés",
    "lang_fr": "Francés",
    "lang_pt-br": "Portugués (BR)",
    "lang_pt-pt": "Portugués (PT)",
    "footer_text": "Proyecto creado por MarcusVinicius, estudiante de FactoriaF5 Bootcamp Family en julio de 2025",
    "btn_download_pdf": "Descargar Guía en PDF"
  },
  "en": {
    "nav_home": "Home",
    "nav_learn_remember": "Learn & Practice",
    "nav_learn_fun": "Learn with Fun",
    "nav_support": "Support & Motivation",
    "nav_90_days": "90-Day Plan",
    "hub_title": "90-Day Fullstack Study Plan",
    "hub_subtitle": "Master web development from scratch to expert",
    "card_html_title": "HTML5",
    "card_html_desc": "The structure of the web. Learn semantics, accessibility, and SEO.",
    "card_css_title": "CSS3",
    "card_css_desc": "Design and styles. Flexbox, Grid, animations, and responsive design.",
    "card_js_title": "JavaScript",
    "card_js_desc": "Logic and dynamism. DOM, ES6+, async, and APIs.",
    "card_react_title": "React",
    "card_react_desc": "Interactive interfaces. Components, state, hooks, and routing.",
    "card_fullstack_title": "Fullstack",
    "card_fullstack_desc": "Node.js, databases, REST APIs, and application deployment.",
    "btn_start_learning": "Start Learning",
    "community_title": "🌐 Aprenda Fullstack con Marvin Community",
    "community_subtitle": "Share your achievements, learn from others, and grow with the developer community.",
    "footer_creator": "Click here to meet the creator of the web",
    "creator_title": "Hello! I am Marvin 👋",
    "creator_desc1": "I am Brazilian, 44 years old, living in Spain. I am happily married to Fernanda and the proud father of Fernandiño.",
    "creator_desc2": "I created this space because I truly believe in the power of learning together. It doesn't matter your age, previous experience, or the code errors you encounter along the way: the world of software development is a journey best enjoyed and absorbed alongside supportive people.",
    "creator_desc3": "If I am successfully making my transition into the Tech world at this great age, YOU CAN TOO. Every effort pays off with dedication. Welcome to the family, let's keep coding!",
    "btn_volver": "Return to Study Plan",
    "lang_es": "Spanish",
    "lang_en": "English",
    "lang_fr": "French",
    "lang_pt-br": "Portuguese (BR)",
    "lang_pt-pt": "Portuguese (PT)",
    "footer_text": "Project created by MarcusVinicius, FactoriaF5 Bootcamp Family student in July 2025",
    "btn_download_pdf": "Download PDF Guide"
  },
  "fr": {
    "nav_home": "Accueil",
    "nav_learn_remember": "Apprendre et Pratiquer",
    "nav_learn_fun": "Apprendre en s'amusant",
    "nav_support": "Soutien et Motivation",
    "nav_90_days": "Plan 90 Jours",
    "hub_title": "Plan d'Étude Fullstack de 90 Jours",
    "hub_subtitle": "Maîtrisez le développement web de zéro à expert",
    "card_html_title": "HTML5",
    "card_html_desc": "La structure du web. Apprenez la sémantique, l'accessibilité et le référencement.",
    "card_css_title": "CSS3",
    "card_css_desc": "Design et styles. Flexbox, Grid, animations et design réactif.",
    "card_js_title": "JavaScript",
    "card_js_desc": "Logique et dynamisme. DOM, ES6+, asynchrone et APIs.",
    "card_react_title": "React",
    "card_react_desc": "Interfaces interactives. Composants, état, hooks et routage.",
    "card_fullstack_title": "Fullstack",
    "card_fullstack_desc": "Node.js, bases de données, APIs REST et déploiement d'applications.",
    "btn_start_learning": "Commencer à Apprendre",
    "community_title": "🌐 Communauté Aprenda Fullstack con Marvin",
    "community_subtitle": "Partagez vos réussites, apprenez des autres et grandissez avec la communauté des développeurs.",
    "footer_creator": "Cliquez ici pour rencontrer le créateur du site",
    "creator_title": "Bonjour ! Je suis Marvin 👋",
    "creator_desc1": "Je suis brésilien, j'ai 44 ans, je vis en Espagne, je suis heureusement marié à Fernanda et l'heureux papa de Fernandiño.",
    "creator_desc2": "J'ai créé cet espace parce que je crois fermement au pouvoir d'apprendre ensemble. Peu importe votre âge, votre expérience ou les erreurs de code que vous rencontrez: le développement logiciel est une aventure qui se savoure et s'assimile bien mieux aux côtés de personnes qui s'entraident.",
    "creator_desc3": "Si je réussis ma transition vers le monde de la Tech à mon âge, VOUS LE POUVEZ AUSSI. Tout effort en vaut la peine avec de la volonté. Bienvenue dans la famille, continuons à coder !",
    "btn_volver": "Retour au Plan d'Étude",
    "lang_es": "Espagnol",
    "lang_en": "Anglais",
    "lang_fr": "Français",
    "lang_pt-br": "Portugais (BR)",
    "lang_pt-pt": "Portugais (PT)",
    "footer_text": "Projet créé par MarcusVinicius, étudiant de FactoriaF5 Bootcamp Family en juillet 2025",
    "btn_download_pdf": "Télécharger le Guide PDF"
  },
  "pt-br": {
    "nav_home": "Início",
    "nav_learn_remember": "Aprender e Praticar",
    "nav_learn_fun": "Aprender com Diversão",
    "nav_support": "Apoio e Motivação",
    "nav_90_days": "Plano 90 Dias",
    "hub_title": "Plano de Estudo Fullstack de 90 Dias",
    "hub_subtitle": "Domine o desenvolvimento web do zero ao especialista",
    "card_html_title": "HTML5",
    "card_html_desc": "A estrutura da web. Aprenda semântica, acessibilidade e SEO.",
    "card_css_title": "CSS3",
    "card_css_desc": "Design e estilos. Flexbox, Grid, animações e design responsivo.",
    "card_js_title": "JavaScript",
    "card_js_desc": "Lógica e dinamismo. DOM, ES6+, assincronismo e APIs.",
    "card_react_title": "React",
    "card_react_desc": "Interfaces interativas. Componentes, estado, hooks e roteamento.",
    "card_fullstack_title": "Fullstack",
    "card_fullstack_desc": "Node.js, bancos de dados, APIs REST e implantação de aplicativos.",
    "btn_start_learning": "Começar a Aprender",
    "community_title": "🌐 Comunidade e Recursos",
    "community_subtitle": "Compartilhe suas conquistas, aprenda com os outros e cresça com a comunidade de desenvolvedores.",
    "footer_creator": "Clique aqui para conhecer o criador do site",
    "creator_title": "Olá! Eu sou o Marvin 👋",
    "creator_desc1": "Sou brasileiro, tenho 44 anos, moro na Espanha, sou muito bem casado com a Fernanda e o orgulhoso pai do Fernandiño.",
    "creator_desc2": "Criei este espaço porque acredito fielmente no poder de aprendermos juntos. Não importa sua idade, experiência anterior ou os erros de código que encontre pelo caminho: o mundo do desenvolvimento de software é uma jornada que se aproveita e se absorve muito mais em companhia de pessoas que se apoiam mutuamente.",
    "creator_desc3": "Se eu estou conseguindo fazer minha transição para o mundo Tech nesta ótima idade, VOCÊ TAMBÉM PODE. Todo esforço vale a pena quando há dedicação. Bem-vindos à família e vamos continuar programando!",
    "btn_volver": "Voltar ao Plano de Estudo",
    "lang_es": "Espanhol",
    "lang_en": "Inglês",
    "lang_fr": "Francês",
    "lang_pt-br": "Português (BR)",
    "lang_pt-pt": "Português (PT)",
    "footer_text": "Projeto criado por MarcusVinicius, estudante da FactoriaF5 Bootcamp Family em julho de 2025",
    "btn_download_pdf": "Baixar Guia em PDF"
  },
  "pt-pt": {
    "nav_home": "Início",
    "nav_learn_remember": "Aprender e Praticar",
    "nav_learn_fun": "Aprender com Diversão",
    "nav_support": "Apoio e Motivação",
    "nav_90_days": "Plano 90 Dias",
    "hub_title": "Plano de Estudo Fullstack de 90 Dias",
    "hub_subtitle": "Domine o desenvolvimento web do zero a especialista",
    "card_html_title": "HTML5",
    "card_html_desc": "A estrutura da web. Aprenda semântica, acessibilidade e SEO.",
    "card_css_title": "CSS3",
    "card_css_desc": "Design e estilos. Flexbox, Grid, animações e design responsivo.",
    "card_js_title": "JavaScript",
    "card_js_desc": "Lógica e dinamismo. DOM, ES6+, assincronismo e APIs.",
    "card_react_title": "React",
    "card_react_desc": "Interfaces interativas. Componentes, estado, hooks e roteamento.",
    "card_fullstack_title": "Fullstack",
    "card_fullstack_desc": "Node.js, bases de dados, APIs REST e implementação de aplicações.",
    "btn_start_learning": "Começar a Aprender",
    "community_title": "🌐 Comunidade e Recursos",
    "community_subtitle": "Partilhe as suas conquistas, aprenda com os outros e cresça com a comunidade de programadores.",
    "footer_creator": "Clique aqui para conhecer o criador do site",
    "creator_title": "Olá! Sou o Marvin 👋",
    "creator_desc1": "Sou brasileiro, tenho 44 anos, vivo em Espanha, sou felizmente casado com a Fernanda e o orgulhoso pai do Fernandiño.",
    "creator_desc2": "Criei este espaço porque acredito fielmente no poder de aprendermos juntos. Não importa a tua idade, experiência anterior ou os erros de código que encontres pelo caminho: o mundo do desenvolvimento de software é uma jornada que se aproveita e se absorve muito mais em companhia de pessoas que se apoiam mutuamente.",
    "creator_desc3": "Se eu estou a conseguir a minha transição para o mundo Tech nesta fantástica idade, TU TAMBÉM PODES. Todo esforço vale a pena quando há dedicação. Bem-vindos à família e vamos continuar a programar!",
    "btn_volver": "Voltar ao Plano de Estudo",
    "lang_es": "Espanhol",
    "lang_en": "Inglês",
    "lang_fr": "Francês",
    "lang_pt-br": "Português (BR)",
    "lang_pt-pt": "Português (PT)",
    "footer_text": "Projeto criado por MarcusVinicius, estudante da FactoriaF5 Bootcamp Family em julho de 2025",
    "btn_download_pdf": "Descarregar Guia em PDF"
  }
};

// Función para cambiar el idioma
function setLanguage(lang) {
  localStorage.setItem('selected_language', lang);
  
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.type === 'submit') {
        el.value = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Sync with Google Translate for general content
  let gtLang = lang.startsWith('pt') ? 'pt' : lang;
  
  if (lang === 'es') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
    if (document.documentElement.classList.contains('translated-ltr')) {
      window.location.reload();
    }
  } else {
    const triggerTranslation = () => {
      const gtSelect = document.querySelector('.goog-te-combo');
      if (gtSelect) {
        if (gtSelect.value !== gtLang) {
          gtSelect.value = gtLang;
          gtSelect.dispatchEvent(new Event('change'));
        }
      } else {
        setTimeout(triggerTranslation, 300);
      }
    };
    triggerTranslation();
  }

  // Actualizar el estilo del selector activo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if(btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// Inicializar el idioma al cargar
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selected_language') || 'es';
  setLanguage(savedLang);
  
  // Asignar eventos de clic a los botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  const style = document.createElement('style');
  style.innerHTML = `
    .language-switcher { display: none !important; }
    .lang-dropdown-container { position: relative; display: inline-block; cursor: pointer; }
    .lang-dropdown-menu { display: none; position: absolute; background: #222; border-radius: 8px; top: 100%; right: 0; min-width: 160px; box-shadow: 0 4px 10px rgba(0,0,0,0.5); overflow: hidden; z-index: 1000; flex-direction: column; }
    .lang-dropdown-btn { background: transparent; color: white; border: none; padding: 12px; text-align: left; cursor: pointer; transition: 0.3s; width: 100%; font-size: 16px; display: flex; align-items: center; gap: 10px; font-family: Arial, sans-serif; }
    .lang-dropdown-btn:hover { background: #00ff66; color: black; }
    .navbar ul { align-items: center; }
  `;
  document.head.appendChild(style);

  const navbarUl = document.querySelector('.navbar ul');
  if (navbarUl) {
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    li.innerHTML = `
      <div class="lang-dropdown-container" id="nav-lang-dropdown">
        <a style="display: flex; align-items: center; gap: 8px; color: rgb(247, 245, 245); text-decoration: none; font-weight: bold; font-size: 26px; padding: 6px 12px; transition: background-color 0.3s ease; border-radius: 6px;">
          <i class="fas fa-globe" style="font-size: 24px;"></i> <span style="font-size:18px;">▾</span>
        </a>
        <div class="lang-dropdown-menu" id="nav-lang-menu">
          <button class="lang-dropdown-btn" data-lang="es">🇪🇸 Español</button>
          <button class="lang-dropdown-btn" data-lang="en">🇬🇧 English</button>
          <button class="lang-dropdown-btn" data-lang="fr">🇫🇷 Français</button>
          <button class="lang-dropdown-btn" data-lang="pt-br">🇧🇷 Português (BR)</button>
          <button class="lang-dropdown-btn" data-lang="pt-pt">🇵🇹 Português (PT)</button>
        </div>
      </div>
    `;
    navbarUl.appendChild(li);

    const dropdown = document.getElementById('nav-lang-dropdown');
    const menu = document.getElementById('nav-lang-menu');

    dropdown.addEventListener('click', (e) => {
      if(e.target.closest('.lang-dropdown-btn')) return;
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        menu.style.display = 'none';
      }
    });

    li.querySelectorAll('.lang-dropdown-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetLang = e.currentTarget.getAttribute('data-lang');
        setLanguage(targetLang);
        menu.style.display = 'none';
      });
    });
  }

  // --- GOOGLE TRANSLATE INJECTION ---
  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
      pageLanguage: 'es',
      includedLanguages: 'es,en,fr,pt',
      autoDisplay: false
    }, 'google_translate_wrapper');
  };

  const gtScript = document.createElement('script');
  gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(gtScript);

  const gtDiv = document.createElement('div');
  gtDiv.id = 'google_translate_wrapper';
  gtDiv.style.cssText = 'position: absolute; top: -9999px; left: -9999px; visibility: hidden;';
  document.body.appendChild(gtDiv);

  const gtHideStyle = document.createElement('style');
  gtHideStyle.innerHTML = `
    .goog-te-banner-frame.skiptranslate { display: none !important; }
    body { top: 0px !important; }
    .goog-tooltip { display: none !important; }
    .goog-tooltip:hover { display: none !important; }
    .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
    font { background: transparent !important; }
  `;
  document.head.appendChild(gtHideStyle);
});
