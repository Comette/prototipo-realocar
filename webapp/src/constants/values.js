export const ETAPAS_PROCESSO_SELETIVO = {
	CANDIDATURA: {
		numero: 1,
		nome: 'Candidatura',
		descricao: 'Essa é a primeira etapa do processo seletivo interno, onde você se candidata '
			+ 'para as vagas que tem interesse e que estejam aderentes com o seu perfil técnico e '
			+ 'comportamental. A descrição do que é necessário para cada vaga está bem detalhada'
			+ ' e você pode verificar clicando em cima de cada uma delas.'
	},
	ALINHAMENTO: {
		numero: 2,
		nome: 'Alinhamento',
		descricao: 'Nessa etapa você fará o alinhamento do que está buscando com o seu atual gerente'
		+ ' para que ele possa entender suas expectativas com a candidatura e, a partir disto, também'
		+ ' avaliar a possibilidade de saná-las internamente.'
	},
	ENTREVISTA: {
		numero: 3,
		nome: 'Entrevista',
		descricao: 'A terceira etapa consiste na entrevista com o RH e, posteriormente, com o gerente'
		+ ' da oportunidade que você se candidatou. Essa conversa é necessária para avaliarmos se o '
		+ 'seu perfil está aderente com o que está sendo pedido, inclusive em casos onde teremos mais'
		+ ' de um interessado pela mesma vaga.'
	},
	RESULTADO: {
		numero: 4,
		nome: 'Resultado',
		descricao: 'Nessa última fase é onde você recebe a devolutiva do processo seletivo interno. '
		+ 'O feedback será dado à todos que participaram do processo, identificando os motivos pelos'
		+ ' quais o colaborador foi ou não selecionado.'
	}
}

export const VAGAS = [
	{
		idVaga: 1,
		titulo: 'Testador .NET Júnior',
		localTrabalho: 'Metropolitana, São Leopoldo - RS',
		descricao: '<strong>Requisitos Técnicos:</strong><p>Experiência em geração e execução de cenários de testes.</p>'
			+ '<br><strong>Principais Atividades:</strong><ul><li>Criação de cenários de testes;</li>'
			+ '<li>Execução de testes unitários, integrados e de regressão.</li></ul>'
	},
	{
		idVaga: 2,
		titulo: 'Desenvolvedor .Net',
		localTrabalho: 'Vila Olímpia, São Paulo - SP',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Domínio do Framework .Net, principalmente com foco em aplicações C# Web;</li>'
			+ '<li>Domínio das ferramentas de desenvolvimento e relatórios Visual Studio e Reporting Services;</li>'
			+ '<li>Conhecimento de ferramentas e frameworks acerca dos itens abaixo:</li>'
			+ '<li>HTML/CSS;</li>'
			+ '<li>Boostrap;</li>'
			+ '<li>Angular JS;</li>'
			+ '<li>MVC;</li>'
			+ '<li>Entity Framework;</li>'
			+ '<li>WebAPI;</li>'
			+ '<li>WCF;</li>'
			+ '<li>Windows services;</li>'
			+ '<li>LINQ to SQL;</li>'
			+ '<li>jQuery;</li>'
			+ '<li>Conhecimento em T-SQL/PL-SQL;</li>'
			+ '<li>Conhecimento de bancos de dados relacionais, SQL Server e Oracle;</li>'
			+ '<li>Conhecimento de técnicas de otimização de performance para SQL;</li>'
			+ '<li>Conhecimento na elaboração de especificações técnicas;</li>'
			+ '<li>Conhecimento em ferramentas de versionamento (SVN, GIT);</li></ul>'
			+ '<strong>Desejável:</strong>'
			+ '<ul><li>Experiência com integração entre diferentes bancos;</li>'
			+ '<li>Conhecimento com ferramentas de interação contínua Jenkins e Octopus;</li>'
			+ '<li>Experiência de trabalho com métodos ágeis;</li>'
			+ '<li>Noções de estimativas de softwares;</li>'
			+ '<li>Noções de programação orientada à objetos (POO);</li>'
			+ '<li>Noções em engenharia de software.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<p>Analisar e desenvolver projetos com base em .Net Framework, realizando levantamento'
			+ ' de requisitos, documentação técnica, modelagem de dados, construção de aplicações e relatórios,'
			+ ' otimização de desempenho, de acordo com as regras de negócio.</p>'
	},
	{
		idVaga: 3,
		titulo: 'Analista de Sistemas .NET Pleno',
		localTrabalho: 'Zona Norte , Porto Alegre - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Necessário experiência com Análise de Sistemas;</li>'
			+ '<li>Conhecimentos em banco de dados Oracle;</li>'
			+ '<li>Desejável conhecimento na utilização de TFS.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Realizar o levantamento de requisitos diretamente com cliente final;</li>'
			+ '<li>Levantamento e documentação de demandas de desenvolvimento;</li>'
			+ '<li>Homologação de demandas de desenvolvimento;</li>'
			+ '<li>Suporte aos usuários na utilização dos sistemas;</li>'
			+ '<li>Suporte a sistemas em demandas diárias.</li></ul>'
	},
	{
		idVaga: 4,
		titulo: 'Desenvolvedor Java Sênior',
		localTrabalho: 'Porto Alegre - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Experiência com: JAVA EE, AngularJS ou outro Framework JavaScritp '
			+ 'MVC utilizando conceito SPA, RESTful, Bootstrap, Spring, Hibernate, Banco de dados Oracle;</li>'
			+ '<li>Experiência com projetos utilizando metodologias ágeis;</li>'
			+ '<li>Desejável conhecimento em SWT, JSP e iReports.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Experiência com: JAVA EE, AngularJS ou outro Framework JavaScritp '
			+ 'MVC utilizando conceito SPA, RESTful, Bootstrap, Spring, Hibernate, Banco de dados Oracle;</li>'
			+ '<li>Experiência com projetos utilizando metodologias ágeis;</li>'
			+ '<li>Desejável conhecimento em SWT, JSP e iReports.</li></ul>'
	},
	{
		idVaga: 5,
		titulo: 'Testador Sênior',
		localTrabalho: 'Porto Alegre - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Experiência na área de qualidade de software;</li>'
			+ '<li>Vivência em projetos de desenvolvimento de software;</li>'
			+ '<li>Experiência com bancos de dados (consultas e manipulação de dados);</li>'
			+ '<li>Conhecimentos em técnicas e ferramentas de testes;</li>'
			+ '<li>Desejável conhecer lógica de programação;</li>'
			+ '<li>Desejável experiência com metodologias ágeis.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Analisar e testar os softwares conforme padrões do cliente.</li></ul>'
	},
	{
		idVaga: 6,
		titulo: 'Desenvolvedor .NET Pleno',
		localTrabalho: 'Paulista, São Paulo - SP',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Visual Studio.NET 2010, .NET Framework 4, C#, Visual Basic 6 (legado), WCF, WebServices;</li>'
			+ '<li>ASP.NET, MVC, jQuery, Crystal Reports, ADO.NET, LINQ, Entity Framework, Programação Assíncrona, '
			+ 'Thread, Tasks, Arquitetura em Camadas, Programação Orientada a Objetos;</li>'
			+ '<li>SQL Server, T-SQL, Procedures e Functions, Modelagem.</li></ul>'
			+ '<strong>Desejável:</strong>'
			+ '<ul><li>Experiência na área da saúde;</li>'
			+ '<li>Administração de servidores – Configuração de IIS;</li>'
			+ '<li>Administração de banco de dados – Geração e restauração de backups, database tunning.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Desenvolvimento de novas funcionalidades nos sistemas;</li>'
			+ '<li>Manutenção nos sistemas existentes para melhoria contínua e correções de bugs;</li>'
			+ '<li>Manutenção em componentes de bibliotecas de mapeamento de objeto relacional;</li>'
			+ '<li>Disseminação de conhecimento tecnológico entre equipe de desenvolvimento.</li></ul>'
	},
	{
		idVaga: 7,
		titulo: 'Analista De Processos',
		localTrabalho: 'Alphaville, Barueri - SP',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<p>Experiência com:</p>'
			+ '<ul><li>Mapeamento de processos;</li>'
			+ '<li>Levantamento de fluxos de processos;</li>'
			+ '<li>Regras de negócio;</li>'
			+ '<li>Inglês intermediário a Avançado (Precisa conseguir entender e explicar regras de negócios em Inglês);</li>'
			+ '<li>Conhecimento em Excel Avançado;</li>'
			+ '<li>Força de vontade (ler requerimento e aprender);</li>'
			+ '<li>Raciocino Lógico;</li></ul>'
			+ '<strong>Desejável:</strong>'
			+ '<ul><li>Análise de requerimentos de negócio;</li>'
			+ '<li>Gestão de projetos;</li>'
			+ '<li>Ferramentas Desejáveis: (Jira,Query´s (SQL).</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Entendimento, mapeamento e sugestão de melhoria de projetos.</li></ul>'
	},
	{
		idVaga: 8,
		titulo: 'Analista de Suporte EDI',
		localTrabalho: 'Porto Alegre - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Conhecimento no pacote Office;</li>'
			+ '<li>Conhecimento básico de SQL;</li></ul>'
			+ '<strong>Desejável:</strong>'
			+ '<ul><li>Inglês intermediário/fluente;</li>'
			+ '<li>Conhecimento em XSLT;</li>'
			+ '<li>Conhecimento em EDI.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Análise e rastreamento de problemas;</li>'
			+ '<li>Atendimento por telefone/e-mail;</li>'
			+ '<li>Consultar ao FTP/Portal dos clientes para verificar a disponibilidade de notas;</li>'
			+ '<li>Disponibilização de arquivos EDI para os clientes;</li>'
			+ '<li>Homologação de cadastros de Entrada, Retorno e Etiqueta.</li></ul>'
	},
	{
		idVaga: 9,
		titulo: 'Desenvolvedor .NET',
		localTrabalho: 'São Leopoldo - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Sólidos conhecimentos em C# 3.5, ASP.Net WebForms, Orientação a Objetos;</li>'
			+ '<li>Sólidos conhecimentos em Jquery, Java Script, Reporting Services;</li>'
			+ '<li>Conhecimento em métodos ágeis;</li>'
			+ '<li>Conhecimento em TFS.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Estimativas;</li>'
			+ '<li>Definições técnicas;</li>'
			+ '<li>Comunicação com a área de TI do cliente;</li>'
			+ '<li>Comunicação direta com os usuários;</li>'
			+ '<li>Acompanhamento de processos de homologação do cliente (TI e usuários).</li></ul>'
	},
	{
		idVaga: 10,
		titulo: 'Desenvolvedor .NET Sênior',
		localTrabalho: 'Zona Norte , São Paulo - SP',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Experiência com C# - Pleno/Senior;</li>'
			+ '<li>Conhecimentos com C# usando Webforms;</li>'
			+ '<li>Experiência com javascript;</li>'
			+ '<li>Experiência com Banco de Dados (preferencia SQLServer);</li>'
			+ '<li>Experiência com a utilização de Serviços;</li>'
			+ '<li>Conhecer ASP NET 3.5 ou superior;</li>'
			+ '<li>Desejável conhecimento de Java e Oracle (ou que deseje migrar para o Java futuramente);</li>'
			+ '<li>Análise de Sistemas (como Analista Desenvolvedor ou Analista de Sistemas - sem tempo determinado).</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<p>Realizar o Desenvolvimento de Funcionalidades de acordo com Especificação Técnica '
			+ 'aprovada; Trabalhar alinhado com os padrões de Arquitetura do cliente.</p>'
	},
	{
		idVaga: 11,
		titulo: 'Gerente De Projetos Pleno',
		localTrabalho: 'Porto Alegre - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Profissional com experiencia em Gestão de Projetos, liderança de equipe e com formação superior.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Status reporte semanal: Montagem do modelo atualizado para a comunicação semanal da equipe.</li>'
			+ '<li>Centralização de comunicação tática do projeto</li>'
			+ '<li>Manter atualizado o mural / kanban e atualização de status de cada DV</li>'
			+ '<li>Acompanhamento de bugs em andamento com equipe e CWI</li>'
			+ '<li>Itens que impactem nas atividades da equipe e que não façam parte das atividades core (tudo que possa'
			+ ' tirar tempo do time que não seja testes e DVs), por exemplo, recursos necessário, acessos e infraestrutura.</li>'
			+ '<li>Acompanhamento do trabalho de cada recurso da equipe e projeção de capacidade'
			+ ' para avaliação diária de andamento e riscos.</li></ul>'
	},
	{
		idVaga: 12,
		titulo: 'UX Designer',
		localTrabalho: 'Porto Alegre - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Experiência na área de criação para web com conhecimentos de Arquitetura'
			+ ' da Informação, UX Design e Usabilidade para sites e sistemas web;</li>'
			+ '<li>Desejável conhecimento em Design e usabilidade para sites e apps mobile.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Proposição de interfaces para um novo sistema sendo desenvolvido primando pela usabilidade.</li></ul>'
	},
	{
		idVaga: 13,
		titulo: 'Analista de Sistemas Sênior',
		localTrabalho: 'Porto Alegre - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Experiência com Análise de Sistemas;</li>'
			+ '<li>Experiência com escrita de User Stories;</li>'
			+ '<li>Experiência em projetos com metodologia ágil;</li>'
			+ '<li>Desejável conhecimento na utilização de TFS.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Realizar o levantamento de requisitos diretamente com cliente final;</li>'
			+ '<li>Elaborar especificações dos processos, requisitos e regras de negócio identificados;</li>'
			+ '<li>Propor/elaborar solução de negócio;</li>'
			+ '<li>Acompanhar fases de desenvolvimento, testes, homologação e produção;</li>'
			+ '<li>Participar das cerimônias com o time, sendo responsável por apresentar detalhamento dos requisitos para o time.</li></ul>'
	},
	{
		idVaga: 14,
		titulo: 'Testador',
		localTrabalho: 'São Leopoldo - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Execução e criação de cenários de testes;</li>'
			+ '<li>Entendimento de requisitos com o cliente;</li>'
			+ '<li>Experiência com métodos ágeis - utilizando Scrum (preferencialmente).</li>'
			+ '<li>É diferencial conhecimentos em automação de testes;</li>'
			+ '<li>É diferencial conhecimento com testes de aplicações mobile.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>O profissional deverá realizar o entendimento dos requisitos com o cliente;</li>'
			+ '<li>Mapeamento/criação de Test Cases;</li>'
			+ '<li>Execução dos testes e relatórios das atividades feitas;</li>'
			+ '<li>Apoiar na definição da estratégia de testes;</li></ul>'
	},
	{
		idVaga: 15,
		titulo: 'Analista de Testes Automatizados Sênior',
		localTrabalho: 'São Leopoldo - RS',
		descricao: '<strong>Requisitos Técnicos:</strong>'
			+ '<ul><li>Conhecimento em elaboração e execução de cenários de teste;</li>'
			+ '<li>Conhecimento básico em banco de dados;</li>'
			+ '<li>Conhecimento em automação de testes.</li></ul>'
			+ '<strong>Principais Atividades:</strong>'
			+ '<ul><li>Atuar em times ágeis desde, a concepção e entendimento do problema até a entrega de testes,'
			+ ' aceitação e funcionamento em produção;</li>'
			+ '<li>Entendimento de necessidades de negócios</li>'
			+ '<li>Entendimento de automação de regras de negócios.</li></ul>'
	},
]
