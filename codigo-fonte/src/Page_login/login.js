document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.querySelector('.btn-login');
    const btnCreateAcc = document.querySelector('.btn-create-acc');

    if (btnLogin) {
        btnLogin.addEventListener('click', realizarLogin);
    }

    if (btnCreateAcc) {
        btnCreateAcc.addEventListener('click', () => {
            window.location.href = 'cadastro.html';
        });
    }
});

function realizarLogin() {
    let usuarioElement = document.getElementById('usuario');
    let senhaElement = document.getElementById('senha');
    let usuarioDigitado = usuarioElement.value;
    let senhaDigitada = senhaElement.value;
    let usuariosTexto = localStorage.getItem("usuarios");
    if (usuariosTexto == null) {
        alert("Nenhum usuário cadastrado.");
        console.log('Nenhum usuário cadastrado.');
        return;
    }

    let usuariosObjeto = JSON.parse(usuariosTexto);
    console.log('Usuários cadastrados:', usuariosObjeto);

    let usuarioEncontrado = usuariosObjeto.find(usuario => usuario.usuario === usuarioDigitado);

    if (!usuarioEncontrado) {
        alert("Usuário não existente.");
        console.log('Usuário não existente');
        return;
    }

    if (usuarioEncontrado.senha === senhaDigitada) {
        alert("Login realizado com sucesso!");
        console.log('Login realizado com sucesso');
        window.location.href = 'pagina_inicial.html';
    } else {
        alert("Usuário ou senha incorretos.");
        console.log('Usuário ou senha incorretos');
    }
}
