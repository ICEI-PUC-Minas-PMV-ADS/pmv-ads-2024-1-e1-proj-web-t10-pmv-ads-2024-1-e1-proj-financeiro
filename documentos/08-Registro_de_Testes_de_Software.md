# Registro de testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/documentos/07-Plano_de_Testes_de_Software.md"> Plano de testes de Software</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/documentos/04-Projeto_de_Interface.md"> Projeto de Interface</a>

Os testes funcionais realizados na aplicação web são descritos a seguir.

<ol>
  <li>CT-01: Verificar o cadastro de usuários.

Responsável: Yasmin Maia.

<p>Usuário preenche os campos "Senha" e "Confirmaçāo de Senha" com valores diferentes.</p>

<figure> 
  <img src="/documentos/img/Validação_senha.png">
  <figcaption> 
</figure>

<p>Verificar se o registro do usuário foi bem sucedido.</p>
<figure> 
  <img src="/documentos/img/Validação_registro.png">
  <figcaption> 
</figure>

<p>Informações armazenadas no LocalStorage após usuário se cadastrar.</p>
<figure> 
  <img src="/documentos/img/localStorage_Cadastro.png">
  <figcaption> 
</figure>

<p>Tentativa de login sem usuário cadastrado.</p>
<figure> 
  <img src="./img/tentativaLogin.jpg">
  <figcaption> 
</figure>

<p>Login realizado com sucesso após o cadasro do usuário.</p>
<figure> 
  <img src="./img/tela-login-teste.jpg">
  <figcaption> 
</figure>
</li>
