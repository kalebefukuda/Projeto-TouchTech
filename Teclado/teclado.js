// Selecione o link "Modo Escuro" pelo ID
const darkModeToggle = document.getElementById('dark-mode-toggle');
const modoTexto = document.getElementById('modo-texto');

// Verifique se há um estado armazenado para o modo claro
const isLightMode = localStorage.getItem('lightMode') === 'true';

// Defina o estado inicial do modo claro com base no valor armazenado
if (isLightMode) {
  document.body.classList.add('light');
  modoTexto.textContent = 'MODO CLARO';
} else {
  document.body.classList.remove('light');
  modoTexto.textContent = 'MODO ESCURO';
}

// Adicione um evento de clique ao link
darkModeToggle.addEventListener('click', function() {
  // Alterne a classe 'light' no elemento body
  document.body.classList.toggle('light');

  // Atualize o estado armazenado com base no novo estado do modo claro
  const isLightMode = document.body.classList.contains('light');
  localStorage.setItem('lightMode', isLightMode);

  // Alterne o texto do link entre "Modo Escuro" e "Modo Claro"
  if (isLightMode) {
    modoTexto.textContent = 'MODO CLARO';
  } else {
    modoTexto.textContent = 'MODO ESCURO';
  }
});
