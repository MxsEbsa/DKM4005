/*!
 * Copyright 2015 By Editora do Brasil
 * By: Tiago Juvenal de Lima, tiago.jlima.developer@gmail.com

 * Foca no Código

        .---.
       /o   o\
    __(=  "  =)__
     //\'-=-'/\\
        )   (_
       /      `"=-._
      /       \     ``"=.
     /  /   \  \         `=..--.
 ___/  /     \  \___      _,  , `\
`-----' `""""`'-----``"""`  \  \_/

*/

var CONFIG = [
	{
		// INFORMAÇÕES PRINCIPAIS DO OED
		infoOed: {
			// Tipo do OED: objeto ou video
			tipo: 'objeto', 
			// Template do OED: akpalo, jimboe, apoema 
			template: 'akpalo', 
			// Disciplina do OED | portugues, matematica, historia, geografia, ciencias
			disciplina: 'matematica', 
			// Ano 
			ano: 4, 
			// Título do OED  
			titulo: 'Os primos de Eratóstenes', 
			// Texto de Instruções do OED 
			instrucoes: 'Assista ao vídeo até o final para iniciar o jogo.',
			// Texto de Navegação do OED
			navegacao: '',  
			// Texto Título do Crédito, PROJETO OU COLEÇÃO
			tituloCredito: 'Coleção Akpalô Matemática' 
		},

		// INFORMAÇÕES DO CRÉDITO
		infoCreditos: [
			// Cada inserção de credito, favor separar por virgula no fim ex: "TEXTO CRÉDITO", 
			// Descartar a ultima linha q está comentado como "NÃO MEXER"

			// INICIO
			"<strong>Supervisão de arte, editoração e produção digital</strong><br/>Adelaide Carolina Cerutti",
			"<strong>Coordenação de produção digital</strong><br/>Daniel Cilli",
			"<strong>Web design</strong><br/>Max Salvado, Thiago Hille e Tiago Lima",
			"<strong>Assistência de design digital</strong><br/>Emília Akemi",
			"<strong>Assistência de arte</strong><br/>Livia Danielli",
			"<strong>Roteiro</strong><br/>Rafael Volner",
			"<strong>Revisão</strong><br/>Equipe Revisão",
			"<strong>Ilustrações</strong><br/>Hélio Senatore",
			"<strong>Locução</strong><br/>Cidade 300",
			"<strong>Áudio</strong><br />AudioJungle, Soundsnap",
			"<strong>Controle de processos editoriais</strong><br/> Equipe CPE",			
			// FIM
			
			// Fim dos Créditos, favor não mexer, se tirar essas aspas vai dar bug ;)
			" "		
		]
	}
];