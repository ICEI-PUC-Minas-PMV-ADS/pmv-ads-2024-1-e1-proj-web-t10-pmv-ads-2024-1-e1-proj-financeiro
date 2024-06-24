# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/documentos/02-Especifica%C3%A7%C3%A3o_do_Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/documentos/04-Projeto_de_Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:

<ul>
<li>Aplicação publicada na internet.</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
<li>Criar um login.</li>
</ul>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o cadastro de usuários.</td>
  <td>
   <ul>
    <li>RF-08:	O site deve permitir ao usuário cadastrar uma conta.</li>
   </ul>
  </td>
  <td>Verificar se o cadastro está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Login.</li>
    <li>Clicar no botão "Criar conta".</li>
    <li>Preencher o formulário e clicar em “Registrar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Registrar", deve aparecer a mensagem "Usuário registrado com sucesso!"</td>
  <td>Yasmin Maia</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar a tela de login</td>
  <td>
   <ul>
    <li>RF-08:	O site deve permitir ao usuário cadastrar uma conta.</li>
    <li>RF-09:  A aplicação deverá permitir ao usuário fazer login com sua conta.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo efetuado corretamente, e informar o usuário caso não.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Login.</li>
    <li>Preencher campos de usuário e senha.</li>
    <li>Criar uma nova conta, caso nao haja uma.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário. Caso as credenciais estiverem corretas, informar ao usuário e prosseguir para a tela principal. Caso não houver nenhum usuário registrado, informar ao usuário. Caso as credenciais estiverem incorretas, informar ao usuário.</td>
  <td>Lucas Silva</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar a tela principal.</td>
  <td>
   <ul>
    <li>RF-01: A aplicação deverá permitir ao usuário inserir seus registros de transações financeiras.</li>
    <li>RF-02: A aplicação deve apresentar registro de transações financeiras, incluindo despesas/receitas.</li>
    <li>RF-03:A aplicação deve permitir ao usuário classificar as transações em categorias relevantes como, alimentação, moradia, transporte, etc. </li>
    <li>RF-04:A aplicação deve mostrar ao usuário claramente suas despesas separadas por meses. </li>
    <li>RF-05 A aplicação deve mostrar ao usuário categorias que tiveram maiores gastos nos últimos 30 dias.</li>
    <li>RF-06 A Aplicação deve mostrar ao usuário informações detalhadas sobre cada transações ocorridas como: data, hora, valor, para quem e quem foi efetuado a transação </li>
    <li> RF-10 A aplicação deverá permitir ao usuário deletar seus registros financeiros.</li>
   </ul>
  </td>
  <td>Verificar todas as funcionalidades da tela principal. </td>
  <td>
   <ol>
    <li>Fazer login.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Login.</li>
    <li>Clicar no botão "adicionar".</li>
    <li>Preencher os campos necessários.</li>
    <li>Clicar em "incluir".</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Incluir", deve aparecer  suas transações incluidas na tela.</td>
  <td>Ana Carolina</td>
 </tr>
</table>

