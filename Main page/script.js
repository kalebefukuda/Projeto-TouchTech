// Selecione o link "Modo Escuro" pelo ID
const darkModeLink = document.getElementById('dark-mode-toggle');           /*para fazer o light mode*/

// Adicione um evento de clique ao link
darkModeLink.addEventListener('click', function() {
  // Alterne a classe 'light' no elemento body
  document.body.classList.toggle('light');

  // Se você também deseja alternar as variáveis do CSS no elemento raiz :root
  document.documentElement.classList.toggle('light');
});

const modoTexto = document.getElementById('modo-texto');
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('light')) {                /*para mudar o texto de modo escuro para modo claro */
    modoTexto.textContent = 'MODO CLARO';
  } else {
    modoTexto.textContent = 'MODO ESCURO';
  }
});


