const formulario = document.getElementById('form-contato');

if (formulario) {
  const feedback = document.getElementById('feedback');

  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome.length < 2 || !email || mensagem.length < 10) {
      feedback.textContent = 'Confira os campos: informe nome, e-mail válido e mensagem com pelo menos 10 caracteres.';
      feedback.className = 'feedback erro';
      return;
    }

    feedback.textContent = `Obrigado, ${nome}! Sua mensagem foi validada neste formulário demonstrativo.`;
    feedback.className = 'feedback ok';
    formulario.reset();
  });
}
