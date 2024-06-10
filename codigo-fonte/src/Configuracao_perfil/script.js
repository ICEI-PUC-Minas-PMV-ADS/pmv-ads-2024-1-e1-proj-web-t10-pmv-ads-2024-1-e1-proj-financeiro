     document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var usuario =
    document.getElementById('usuario').value;
    var senhaAntiga = 
    document.getElementById('senhaAntiga').value;
    var novaSenha =
    document.getElementById('novaSenha').value;
    if (!usuario) {
    alert('Preencha este campo');
    return;}
    if (!senhaAntiga) {
    alert('Preencha com sua senha antiga corretamente');
    return;}
    if (!novaSenha) {
    alert('Crie uma nova senha');
    return; }
    if (senhaAntiga === novaSenha) {
    alert('As senhas devem ser diferentes');
    return; }
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('senhaAntiga', senhaAntiga);
    localStorage.setItem('novaSenha', novaSenha);
    alert('A senha foi atualizada com sucesso!');
    });