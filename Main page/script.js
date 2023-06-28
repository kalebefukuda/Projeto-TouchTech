// Selecione o link "Modo Escuro" pelo ID
const darkModeLink = document.getElementById('dark-mode-toggle');           /*para fazer o light mode*/

// Adicione um evento de clique ao link
darkModeLink.addEventListener('click', function() {
  // Alterne a classe 'light' no elemento body
  document.body.classList.toggle('light');

  // Se você também deseja alternar as variáveis do CSS no elemento raiz :root
  document.documentElement.classList.toggle('light');
});

const darkModeToggle = document.getElementById('dark-mode-toggle');                 /*trocar o icone no light mode*/
let isDarkMode = false; // Exemplo de estado inicial

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {                                             
  isDarkMode = !isDarkMode;
  const icon = darkModeToggle.querySelector('ion-icon');
  const text = darkModeToggle.querySelector('br');

  if (isDarkMode) {
    icon.setAttribute('name', 'sunny');
    text.textContent = 'MODO CLARO';
    // Outras ações para o modo claro
  } else {
    icon.setAttribute('name', 'moon');
    text.textContent = 'MODO ESCURO';
    // Outras ações para o modo escuro
  }
}

