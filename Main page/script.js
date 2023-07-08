// Selecione o link "Modo Escuro" pelo ID
const darkModeToggle = document.getElementById('dark-mode-toggle');
const modoTexto = document.getElementById('modo-texto');
const modoIcon = darkModeToggle.querySelector('ion-icon');

// Verifique se há um estado armazenado para o modo claro
const isLightMode = localStorage.getItem('lightMode') === 'true';

// Defina o estado inicial do modo claro com base no valor armazenado
if (isLightMode) {
  document.body.classList.add('light');
  modoTexto.textContent = 'MODO CLARO';
  modoIcon.setAttribute('name', 'sunny');
} else {
  document.body.classList.remove('light');
  modoTexto.textContent = 'MODO ESCURO';
  modoIcon.setAttribute('name', 'moon');
}

// Adicione um evento de clique ao link
darkModeToggle.addEventListener('click', function(event) {
  event.preventDefault(); // Prevenir o comportamento padrão do link

  // Salvar a posição atual da página
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  // Alterne a classe 'light' no elemento body
  document.body.classList.toggle('light');

  // Atualize o estado armazenado com base no novo estado do modo claro
  const isLightMode = document.body.classList.contains('light');
  localStorage.setItem('lightMode', isLightMode);

  // Alterne o texto do link entre "Modo Escuro" e "Modo Claro"
  if (isLightMode) {
    modoTexto.textContent = 'MODO CLARO';
    modoIcon.setAttribute('name', 'sunny');
  } else {
    modoTexto.textContent = 'MODO ESCURO';
    modoIcon.setAttribute('name', 'moon');
  }

  // Restaurar a posição da página após um pequeno atraso
  setTimeout(() => {
    window.scrollTo(0, currentPosition);
  }, 10);
});

// Restaurar a posição da página após o carregamento completo da página
window.addEventListener('load', () => {
  const currentPosition = localStorage.getItem('scrollPosition');
  if (currentPosition) {
    setTimeout(() => {
      window.scrollTo(0, currentPosition);
    }, 10);
  }

  document.body.classList.add('fade-in');
});

// Salvar a posição da página antes de navegar para uma nova página
const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    document.body.classList.add('fade-out');
    localStorage.setItem('scrollPosition', window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);

    setTimeout(() => {
      window.location.href = link.href;
    }, 200);
  });
});

// Limpar a posição da página ao sair da página
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('scrollPosition');
});
