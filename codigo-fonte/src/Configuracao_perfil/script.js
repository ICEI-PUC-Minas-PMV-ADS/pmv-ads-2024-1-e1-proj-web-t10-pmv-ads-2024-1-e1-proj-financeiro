document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();

            var usuario = document.getElementById('usuario').value;
            var senhaAntiga = document.getElementById('senhaAntiga').value;
            var novaSenha = document.getElementById('novaSenha').value;

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

            var usuariosTexto = localStorage.getItem("usuarios");
            if (!usuariosTexto) {
                alert('Nenhum usuário cadastrado.');
                return;
            }

            var usuariosObjeto = JSON.parse(usuariosTexto);

            var usuarioEncontrado = usuariosObjeto.find(usuarioObj => usuarioObj.usuario === usuario);

            if (!usuarioEncontrado) {
                alert('Usuário não existente.');
                return;
            }

            if (usuarioEncontrado.senha !== senhaAntiga) {
                alert('Senha antiga incorreta.');
                return;
            }

            usuarioEncontrado.senha = novaSenha;
            localStorage.setItem("usuarios", JSON.stringify(usuariosObjeto));

            alert('A senha foi atualizada com sucesso!');
        });