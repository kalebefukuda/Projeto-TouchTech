// Selecione o link "Modo Escuro" pelo ID
const darkModeLink = document.getElementById('dark-mode');

// Adicione um evento de clique ao link
darkModeLink.addEventListener('click', function() {
  // Alterne a classe 'light' no elemento body
  document.body.classList.toggle('light');

  // Se você também deseja alternar as variáveis do CSS no elemento raiz :root
  document.documentElement.classList.toggle('light');
});
