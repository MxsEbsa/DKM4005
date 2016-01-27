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
                             `-`
*/

'use strict';
sessionStorage.setItem('video_template_concluido', 'nao');
sessionStorage.setItem('video_para_conclusao', 'nao');
var verificar_fim_video_cnd;
var CONFIG = CONFIG,
	EbsaGame = $('.EbsaGame');

// ************** Inicia o objeto construtor **************

// Chama função videoFull somente se objeto for = video
if(CONFIG[0].infoOed.tipo == 'video'){
	$('iframe').attr('src','');
	document.querySelector(".btn_menu").style.display="inherit";
	$('#videoPrincipalOedVideo').append('<source src="media/video/video.mp4" type="video/mp4"><source src="media/video/video.webm"  type="video/webm">Seu navegador não suporta vídeo.');
	(function(window, document){
	    var seletor = function(selector,context){return(context||document).querySelector(selector)};
	    var video  = seletor("video"),
	        domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');

	    seletor(".iniciar").addEventListener("click", function(){
	        var capinha = seletor(".capa");
	        seletor('#videoPrincipalOedVideo').style.display = 'block';
	        setTimeout(function(){
	            capinha.remove();
	            animacao_saida_capa();
	            video.play();
	            $('#videoPrincipalOedVideo').on('ended', function(){
	            	window.location.href = 'index.html';
	            });
	        },1300);
	    }, false);
	    var fullscreen = function(elem) {
	        var prefix;
	        // Mozilla and webkit intialise fullscreen slightly differently
	        for ( var i = -1, len = domPrefixes.length; ++i < len; ) {
	        prefix = domPrefixes[i].toLowerCase();
	        if(elem[prefix + 'EnterFullScreen']){
	            // Webkit uses EnterFullScreen for video
	            return prefix + 'EnterFullScreen';
	            break;
	        }else if(elem[prefix + 'RequestFullScreen']){
	            // Mozilla uses RequestFullScreen for all elements and webkit uses it for non video elements
	            return prefix + 'RequestFullScreen';
	            break;
	        }
	    }
	    return false;
	    };
	    // Will return fullscreen method as a string if supported e.g. "mozRequestFullScreen" || false;
	    var fullscreenvideo = fullscreen(document.createElement("video"));

	    // Webkit uses "requestFullScreen" for non video elements
	    var fullscreenother = fullscreen(document.createElement("iframe"));

	    // Should add prefixed events for potential ms/o or unprefixed support too
	    
	    seletor(".iniciar").addEventListener("click", function(){
	        // The test returns a string so we can easily call it on a click event
	        video[fullscreenvideo]();
	        video.style.display = "block";
	    }, false);
	})(this, this.document);
}

var Game = function(){
	animacao_saida_capa();
	document.querySelector("#videoPrincipalOedVideo").style.display="inherit";
	document.querySelector(".conteudo").style.background="#ffffff";
	//toggleFullScreen();
	document.querySelector("#videoPrincipalOedVideo").play();
	verificar_video_final();
	//$('iframe').attr('src','conteudo/game.html');
};

$('.iniciar').on('click', function(){
	if(!(CONFIG[0].infoOed.tipo == 'video')){
		new Game();
		chamar_funcao_frame();
	}
});

// ************** Configuração do jogo, arquivo se encontra em js/config.js **************

//Centralizando na tela o container EbsaGame
var centralizaEbsa = function(){
	var	larguraDocumento = $(window).width()
      , alturaDocumento = $(window).height();
	EbsaGame.css({
		'left': (larguraDocumento / 2) - 1024 / 2+'px',
		'top': (alturaDocumento / 2) - 660 / 2+'px'
	});
};
centralizaEbsa();
// ************** Criando estrutura do template ***************

//Configurações do OED
(function(){
	//Configuração das disciplinas
	var infoOed = CONFIG[0].infoOed,
		infoCreditos = CONFIG[0].infoCreditos,
	    infoTemplate = infoOed.template,
	    disciplina = infoOed.disciplina,
		ano = infoOed.ano,
	    trocaCor = EbsaGame.find('.trocaCor'),
	    trocaAno = EbsaGame.find('.trocaAno'),
	    textoInstrucoes = EbsaGame.children('.InstrucoesPrincipal').find('.texto_instrucoes'),
	    textoNavegacao = EbsaGame.children('.InstrucoesPrincipal').find('.texto_navegabilidade'),
	    tituloPrincipal = $('title'),
	    titulosOED = $('.titulo_objeto, .tituloCapa'),
	    tituloCredito = $('.quadroCreditos'),
	    creditos = $('.creditos'),
	    fullCreditos = infoCreditos.join('<br /><br />'),
	    nomeDisciplinaCapa = $('.capaNomeDisciplina');

    // Aqui insere as classes(cores) das discplinas de acordo com o template
    // Botoes e Titulos
	for(var i = 0; i < trocaCor.length; i++){
		// var selfClass = $(trocaCor[i]).attr('class').replace('akpalo_','').replace(' trocaCor','');
		var selfClass = $(trocaCor[i]).attr('data-cor');
		$(trocaCor[i]).addClass(infoTemplate+'_'+selfClass+'_'+disciplina);
		$(trocaCor[i]).removeClass('trocaCor');
	}

	// Função troca ano
	var selfClassAno = $(trocaAno).attr('class').replace('akpalo_','').replace('_contagem','').replace(' trocaAno','');

	$(trocaAno).addClass(infoTemplate+'_'+selfClassAno+'_'+ano+'_'+disciplina);
	$(trocaAno).removeClass('trocaAno');

	// Função para inserir texto de instrução e texto de navegação
	textoInstrucoes.html(infoOed.instrucoes);
	textoNavegacao.html(infoOed.navegacao);

	// Senão tiver nenhum texto em navegação, não irá aparecer o mesmo.
	if(!(infoOed.navegacao.length > 1)){
		$('.instrucoes_aba_navegabilidade').hide();
	}

	// Títulos
	titulosOED.html(infoOed.titulo);
	tituloPrincipal.text($('.titulo_objeto').text());
	// PROJETO OU COLEÇÃO
	tituloCredito.html(infoOed.tituloCredito);
	// Nome da disciplina
	nomeDisciplinaCapa.html(infoOed.disciplina);

	// Inserindo assentuação no titulo disciplina
	if(disciplina == 'portugues'){
		$('.capaNomeDisciplina').text('Lingua Português');
		$('body').addClass("akpalo_fundo_portugues");
	}else if(disciplina == 'matematica'){
		$('.capaNomeDisciplina').text('Matemática');
		$('body').addClass("akpalo_fundo_matematica");
	}else if(disciplina == 'geografia'){
		$('.capaNomeDisciplina').text('Geografia');
		$('body').addClass("akpalo_fundo_geografia");		
	}else if(disciplina == 'historia'){
		$('.capaNomeDisciplina').text('História');
		$('body').addClass("akpalo_fundo_historia");		
	}else if(disciplina == 'ciencias'){
		$('.capaNomeDisciplina').text('Ciências');
		$('body').addClass("akpalo_fundo_ciencias");		
	}
		
	// Inserindo Creditos
	creditos.append(fullCreditos);
	
	// switch(disciplina){
	// 	case 'portugues':
			
	// 		break;
	// 	case 'matematica':

	// 		break;
	// 	case 'geografia':

	// 		break;
	// 	case 'historia':

	// 		break;
	// 	case 'ciencias':

	// 		break;			
	// }
})();

// ************** Redimensiona Elemento ***************
function redimensionaElemento() {
	var elemento = EbsaGame;

    var larguraJanela = $(window).width();
    var alturaJanela = $(window).height();
    var larguraInicialElemento = 1024;
    var alturaInicialElemento = 660;

    var relacaoAspecto = larguraInicialElemento / alturaInicialElemento;

	if(alturaJanela <= larguraJanela) {
		var alturaRedimensionada = alturaJanela;
		var larguraRedimensionada = alturaRedimensionada * relacaoAspecto;
		if (larguraJanela < larguraRedimensionada) {
			var larguraRedimensionada = larguraJanela;
			var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
		}
	}else {
		var larguraRedimensionada = larguraJanela;
		var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
	}
	
	var escalaLargura = ((larguraRedimensionada / larguraInicialElemento) * 100) / 100.1;
	var escalaAltura = ((alturaRedimensionada / alturaInicialElemento) * 100) / 100.1;
	if(escalaLargura <= 1){
		elemento.css({
			'-webkit-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-moz-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-ms-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'-o-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
			'transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')'
		});
	}else{
		elemento.css({
			/*'-webkit-transform': 'scale(1.1))',
			'-moz-transform': 'scale(1.1)',
			'-ms-transform': 'scale(1.1)',
			'-o-transform': 'scale(1.1)',
			'transform': 'scale(1.1)'*/
			'-webkit-transform': 'scale(1))',
			'-moz-transform': 'scale(1)',
			'-ms-transform': 'scale(1)',
			'-o-transform': 'scale(1)',
			'transform': 'scale(1)'
		});
	}
};
redimensionaElemento();

$(window).resize(function(){
	centralizaEbsa();
	redimensionaElemento();
});



	/*Fullscreen para vídeo */
  var videoElement = document.getElementById("videoPrincipalOedVideo");
  function toggleFullScreen() {
    if (!document.mozFullScreen && !document.webkitFullScreen) {
      if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else {
        videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else {
        document.webkitCancelFullScreen();
      }
    }
  }
  
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      //toggleFullScreen();
    }
  }, false);
  
function iniciar_video_fullscreen(){
	videoElement.play();
	toggleFullScreen();
}
function fechar_video_template(){
	sessionStorage.setItem('video_template_concluido', 'sim');
	document.querySelector("#videoPrincipalOedVideo").className=("animacao fadeOut");
	console.log(sessionStorage.getItem('video_template_concluido'));
	setTimeout(function(){
			document.querySelector("#videoPrincipalOedVideo").style.display="none";
			//
			document.webkitCancelFullScreen();
			document.mozCancelFullScreen();
			//
	}, 1000);
	if(window.sessionStorage.getItem('video_para_conclusao')=='sim'){
		document.querySelector("#videoPrincipalOedVideo").className=("animacao fadeOut");
	setTimeout(function(){
		location.reload();

	}, 1000);		
		
	}
}

	function verificar_video_final(){
	  verificar_fim_video_cnd = setInterval(function(){
		console.log(sessionStorage.getItem('video_template_concluido'));
	  if(window.sessionStorage.getItem('video_para_conclusao')=='sim'){
		document.querySelector("#videoPrincipalOedVideo").src="./conteudo/media/video/video_final.mp4"
		document.querySelector("#videoPrincipalOedVideo").currentTime=0;
		document.querySelector("#videoPrincipalOedVideo").play();
		document.querySelector("#videoPrincipalOedVideo").style.display="inherit";
		  document.querySelector("#videoPrincipalOedVideo").className=("animacao fadeIn");
	      clearInterval(verificar_fim_video_cnd);
	    }
	  }, 1000);
	}