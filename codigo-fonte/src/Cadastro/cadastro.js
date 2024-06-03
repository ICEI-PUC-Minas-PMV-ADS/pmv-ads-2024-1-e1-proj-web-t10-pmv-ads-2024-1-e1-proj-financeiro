//código a ser executado ao entrar na página
//verifica se já existem usuários no armazenamento local
//se não existem, é criada uma variável vazia
let usuariosTexto = localStorage.getItem("usuarios");
let usuariosObjeto;

if (usuariosTexto == null) {
  usuariosObjeto = [];
  localStorage.setItem("usuarios", JSON.stringify(usuariosObjeto));
} else {
  usuariosObjeto = JSON.parse(usuariosTexto);
}

function registrar() {
  let primeiroNomeDigitado = document.getElementById("primeironome").value;
  let sobrenomeDigitado = document.getElementById("sobrenome").value;
  let emailDigitado = document.getElementById("email").value;
  let usuarioDigitado = document.getElementById("usuario").value;
  let senhaDigitada = document.getElementById("senha").value;
  let confirmacaoDaSenhaDigitada =
    document.getElementById("confirmacaoDaSenha").value;

  if (senhaDigitada != confirmacaoDaSenhaDigitada) {
    alert("As senhas não coincidem.");
    return;
  }
  if (primeiroNomeDigitado == "") {
    alert("É necessário especificar o primeiro nome.");
    return;
  }

  if (sobrenomeDigitado == "") {
    alert("É necessário especificar o sobrenome.");
    return;
  }

  if (emailDigitado == "") {
    alert("É necessário especificar o e-mail.");
    return;
  }

  if (usuarioDigitado == "") {
    alert("É necessário especificar o usuário.");
    return;
  }

  if (senhaDigitada == "") {
    alert("É necessário especificar a senha.");
    return;
  }

  if (confirmacaoDaSenhaDigitada == "") {
    alert("É necessário especificar a confirmação da senha.");
    return;
  }

  for (let usuario of usuariosObjeto) {
    if (usuarioDigitado == usuario.usuario) {
      alert("Usuário já cadastrado.");
      return;
    }
    if (emailDigitado == usuario.email) {
      alert("E-mail já cadastrado.");
      return;
    }
  }

  usuariosObjeto.push({
    usuario: usuarioDigitado,
    email: emailDigitado,
    primeiroNome: primeiroNomeDigitado,
    sobrenome: sobrenomeDigitado,
    senha: senhaDigitada,
  });

  localStorage.setItem("usuarios", JSON.stringify(usuariosObjeto));
  alert("Usuário registrado com sucesso!");
}
