# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/documentos/02-Especifica%C3%A7%C3%A3o_do_Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/documentos/03-Metodologia.md"> Metodologia</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/documentos/04-Projeto_de_Interface.md"> Projeto de Interface</a>

### Tela de Cadastro (RF-08)

Responsável: Yasmin Maia

O acesso a tela de cadastro poderá ser feito através do botão “Cadastre-se” , na tela de login. As estruturas de dados foram baseadas em HTML, CSS e JS.

Exemplo da tela de cadastro:

<figure> 
  <img src="/documentos/img/Tela_cadastro_final.png">
  <figcaption> 
</figure>

#### Requisito atendido

RF-08: A aplicação deverá permitir ao usuário cadastrar uma conta.

#### Artefatos da funcionalidade

●cadastro.html

●style.css

●cadastro.js

#### Estrutura de Dados

<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/codigo-fonte/src/Cadastro/cadastro.html">Cadastro.html</a>

#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: http://127.0.0.1:5501/codigo-fonte/src/Page_login/login.html

2. Ao clicar em “Cadastre-se” na tela de login, o usuário será direcionado para a página de cadastro.

3. Insira seus dados preenchendo os campos indicados e clique em "Registrar".

4. Após o cadastro, clique no botão "Entrar" e será redirecionado a página de login

5. Informe seu nome de usuário e senha cadastrados e terá acesso a página principal.


### Tela de Login (RF-09)

Responsável: Lucas Silva

Na tela de login, além dos campos de usuário e senha, haverão os botões "Entrar" e "Criar conta". As estruturas de dados foram baseadas em HTML, CSS e JS.

Exemplo da tela de login:

<figure> 
  <img src="/documentos/img/Tela_login2.png">
  <figcaption> 
</figure>

#### Requisito atendido

RF-09: A aplicação deverá permitir ao usuário fazer login com sua conta

#### Artefatos da funcionalidade

●login.html

●style.css

●login.js

#### Estrutura de Dados

<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/codigo-fonte/src/Page_login/login.html">login.html</a>

#### Instruções de acesso

1. Abra um navegador de Internet e informe a seguinte URL: http://127.0.0.1:5501/codigo-fonte/src/Page_login/login.html

2. Ao clicar em “Cadastre-se” na tela de login, o usuário será direcionado para a página de cadastro.

3. Insira seus dados preenchendo os campos indicados e clique em "Registrar".

4. Após o cadastro, clique no botão "Entrar" e será redirecionado a página de login

5. Informe seu nome de usuário e senha cadastrados e terá acesso a página principal.


### Tela Principal

Responsável: Elenice Aparecida, Rafael Martins, Angélica Nunes

A tela principal abrange mais de uma funcionalidade, havendo a possibilidade para o usuário de inserir seus registros de transações financeiras, incluindo despesas e receitas. Há um campo de descrição para cada transação financeira, permitindo ao usuário classificar que tipo de transação foi feita. Há também a possibilidade de registrar qual a data em que a transação foi efetuada. Há a possibilidade do usuário deletar seus registros financeiros.

Com o gráfico, é permitido ao usuário consultar qual categoria teve o maior gasto.

#### Requisitos atendidos

RF-01 A aplicação deverá permitir ao usuário inserir seus registros de transações financeiras.

RF-02 A aplicação deve apresentar registro de transações financeiras, incluindo despesas/receitas.

RF-03 A aplicação deve permitir ao usuário classificar as transações em categorias relevantes como, alimentação, moradia, transporte, etc.

RF-04 A aplicação deve mostrar ao usuário claramente suas despesas separadas por meses. 

RF-05 A aplicação deve mostrar ao usuário categorias que tiveram maiores gastos nos últimos 30 dias.

RF-10 A aplicação deverá permitir ao usuário deletar seus registros financeiros.

#### Requisitos parcialmente atendidos

RF-06 A Aplicação deve mostrar ao usuário informações detalhadas sobre cada transações ocorridas como: data, hora, valor, para quem e quem foi efetuado a transação.

#### Artefatos da funcionalidade

●index.html

●style.css

●script.js

#### Estrutura de Dados

<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/codigo-fonte/src/Tela_Principal2/index.html">index.html</a>

### Tela de configuração de perfil

Responsável: Ana Carolina Alves

O acesso para a tela de configuração de perfil poderá ser feito através do menu lateral. Que pdoerá ser aberto ao clicar ícone do usuário.

Exemplo da tela de configuração de perfil:

<figure> 
  <img src="/documentos/img/Tela_Funcionalidade_Config_Perfil.png">
  <figcaption> 
</figure>

#### Requisito parcialmente atendido

RF-11 A aplicação deve permitir ao usuário verificar suas informações de cadastro na página de perfil, após seu login.

#### Artefatos da funcionalidade

●Config_perfil.html

●index.css.css

●script.js

#### Estrutura de Dados

<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t10-pmv-ads-2024-1-e1-proj-financeiro/blob/main/codigo-fonte/src/Configuracao_perfil/Config_perfil.html">Config_perfil.html</a>