document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o formulário existe no DOM
    var form = document.getElementById('form');
    if (form) {
        // Adiciona o event listener para o evento submit no formulário
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obtém os valores dos campos
            var usuario = document.getElementById('usuario').value;
            var senhaAntiga = document.getElementById('senhaAntiga').value;
            var novaSenha = document.getElementById('novaSenha').value;

            // Validações dos campos
            if (!usuario) {
                alert('Preencha o campo de usuário');
                return;
            }
            if (!senhaAntiga) {
                alert('Preencha o campo de senha antiga corretamente');
                return;
            }
            if (!novaSenha) {
                alert('Crie uma nova senha');
                return;
            }
            if (senhaAntiga === novaSenha) {
                alert('As senhas devem ser diferentes');
                return;
            }

            // Obtém os usuários do localStorage
            var usuariosTexto = localStorage.getItem("usuarios");
            if (!usuariosTexto) {
                alert('Nenhum usuário cadastrado.');
                return;
            }

            // Converte para objeto JavaScript
            var usuariosObjeto = JSON.parse(usuariosTexto);

            // Procura pelo usuário no array de usuários
            var usuarioEncontrado = usuariosObjeto.find(usuarioObj => usuarioObj.usuario === usuario);

            // Verifica se o usuário foi encontrado
            if (!usuarioEncontrado) {
                alert('Usuário não existente.');
                return;
            }

            // Verifica se a senha antiga coincide com a senha do usuário encontrado
            if (usuarioEncontrado.senha !== senhaAntiga) {
                alert('Senha antiga incorreta.');
                return;
            }

            // Atualiza a senha do usuário encontrando com a nova senha
            usuarioEncontrado.senha = novaSenha;

            // Salva os usuários atualizados de volta no localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuariosObjeto));

            // Exibe mensagem de sucesso
            alert('A senha foi atualizada com sucesso!');
        });
    }
});