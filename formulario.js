
const formulario = document.getElementById("form-contato");
const feedback = document.getElementById("feedback");

if (formulario) {

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome.length < 2 || email === "" || mensagem.length < 10) {
            feedback.textContent = "Preencha todos os campos corretamente.";
            feedback.className = "feedback erro";
            return;
        }

        const novaMensagem = {
            nome: nome,
            email: email,
            mensagem: mensagem,
            data: new Date().toLocaleString("pt-BR")
        };

        let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

        mensagens.push(novaMensagem);

        localStorage.setItem("mensagens", JSON.stringify(mensagens));

        feedback.textContent = "Mensagem salva com sucesso!";
        feedback.className = "feedback ok";

        formulario.reset();

        console.log("Mensagens salvas:", mensagens);
    });

}
