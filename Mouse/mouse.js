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
// Selecione todos os links da página com a classe "page-link"
const pageLinks = document.querySelectorAll('.page-link');

// Adicione um evento de clique a cada link
pageLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevenir o comportamento padrão do link
    event.preventDefault();

    // Adicionar a classe 'fade-out' ao body
    document.body.classList.add('fade-out');

    // Aguardar um breve período de tempo para permitir a transição
    setTimeout(() => {
      // Navegar para a nova página
      window.location.href = link.href;
    }, 200); // Ajuste esse valor se necessário
  });
});
// Quando a página terminar de carregar
window.addEventListener('load', () => {
  // Remover a classe 'fade-out' do body
  document.body.classList.add('fade-in');
});