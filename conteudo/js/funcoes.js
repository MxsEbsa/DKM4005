/*		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_1";
		}, 10);	*/

// *********** PARA TROCAR INSTRUÇÕES CHAME A FUNÇÃO: TrocaInstrucao('INSTRUÇÃO NOVA');  ******************
// * ********* PARA TROCAR NAVEGABILIDADE CHAME A FUNÇÃO: TrocaNavegacao('NAVEGABILIDADE NOVA'); **********
'use strict';
var verificar_inicio_video_cnd;
/* Configurações de áudio para Howler js*/
var audio_trilha_sonora = new Howl({urls: ['media/audio/audio_trilha_sonora.mp3'],loop:true, volume: 0.3, onend: function() { tocar_audio_trilha_sonora();}});
var audio_clique_numero = new Howl({urls: ['media/audio/audio_clique_numero.mp3'],volume: 0.2});
//Comandos
var audio_comando_1 = new Howl({urls: ['media/audio/audio_comando_1.mp3'],volume: 0.6, sprite:{audio_comando_1_corte: [3900, 20000], audio_comando_1_corte1: [3900, 20000],}});
var audio_comando_2 = new Howl({urls: ['media/audio/audio_comando_2.mp3'],volume: 0.6, sprite:{audio_comando_2_corte: [2900, 20000],audio_comando_2_corte1: [3900, 20000],}});
var audio_comando_3 = new Howl({urls: ['media/audio/audio_comando_3.mp3'],volume: 0.6, sprite:{audio_comando_3_corte: [2900, 23000], audio_comando_3_corte1: [3900, 23000],}});
var audio_comando_4 = new Howl({urls: ['media/audio/audio_comando_4.mp3'],volume: 0.6, sprite:{audio_comando_4_corte: [2900, 20000], audio_comando_4_corte1: [3900, 20000],}});
var audio_comando_5 = new Howl({urls: ['media/audio/audio_comando_5.mp3'],volume: 0.6, sprite:{audio_comando_5_corte: [2900, 20000], audio_comando_5_corte1: [3900, 20000],}});
var audio_comando_6 = new Howl({urls: ['media/audio/audio_comando_6.mp3'],volume: 0.6, sprite:{audio_comando_6_corte: [2900, 20000], audio_comando_6_corte1: [3900, 20000],}});
var audio_comando_7 = new Howl({urls: ['media/audio/audio_comando_7.mp3'],volume: 0.6, sprite:{audio_comando_7_corte: [2900, 20000], audio_comando_7_corte1: [3900, 20000],}});
var audio_comando_8 = new Howl({urls: ['media/audio/audio_comando_8.mp3'],volume: 0.6, sprite:{audio_comando_8_corte: [2900, 20000], audio_comando_8_corte1: [3900, 20000],}});
var audio_comando_9 = new Howl({urls: ['media/audio/audio_comando_9.mp3'],volume: 0.6, sprite:{audio_comando_9_corte: [2900, 20000], audio_comando_9_corte1: [3900, 20000],}});
var audio_comando_10 = new Howl({urls: ['media/audio/audio_comando_10.mp3'],volume: 0.6, sprite:{audio_comando_10_corte: [2900, 20000], audio_comando_10_corte1: [3900, 20000],}});
//Erros
var audio_erro_3 = new Howl({urls: ['media/audio/audio_erro_3.mp3'],volume: 0.6, sprite:{audio_erro_3_corte: [4900, 20000],}});
var audio_erro_5 = new Howl({urls: ['media/audio/audio_erro_5.mp3'],volume: 0.6, sprite:{audio_erro_5_corte: [4900, 20000],}});
var audio_erro_7 = new Howl({urls: ['media/audio/audio_erro_7.mp3'],volume: 0.6, sprite:{audio_erro_7_corte: [4900, 20000],}});
var audio_erro_9 = new Howl({urls: ['media/audio/audio_erro_9.mp3'],volume: 0.6, sprite:{audio_erro_9_corte: [4900, 20000],}});
//
var etapa_objeto;
etapa_objeto=0;
var tipo_mensagem;
tipo_mensagem="escolha_cor";
var video_inicial_visto;
video_inicial_visto=1;
//
//Condições para concluir cada do objeto
var fim_etapa_3=["n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n","n"];
var fim_etapa_5=["n","n","n","n","n","n","n"];
var fim_etapa_7=["n","n"];
var fim_etapa_10=["n","n","n","n","n","n","n","n","n","n","n"];
//
function tocar_audio_trilha_sonora(){
	audio_trilha_sonora.stop();
	audio_trilha_sonora.play();
}


var startGame = {

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
		//iniciar_video_fullscreen();
		verificar_video_inicial();
		TrocaInstrucao('Assista ao vídeo até o final para iniciar o jogo.');
		//iniciar_jogo();
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_1";
		}, 10);	
	}
};
function fechar_video(){
	document.querySelector("#video_palco").pause();
	//document.querySelector("#video_area_btn_video").className="animacao bounceOutDown";
	video_inicial_visto++;
	iniciar_jogo();
	//document.webkitCancelFullScreen();
	//document.mozCancelFullScreen();
	setTimeout(function(){
		document.querySelector("#video_area_btn_video").className="nada";
		document.querySelector("#video_palco").currentTime=0;
	}, 1000);	
}


	
	function verificar_video_inicial(){
		//alert(123);
	  verificar_inicio_video_cnd = setInterval(function(){
		console.log(sessionStorage.getItem('video_template_concluido'));
	  if(window.sessionStorage.getItem('video_template_concluido')=='sim'){
	      iniciar_jogo();
	      clearInterval(verificar_inicio_video_cnd);
		  //alert(123);
	    }
	  }, 1000);
	}



function iniciar_jogo(){
	console.log(video_inicial_visto);
	if(video_inicial_visto==1){
		movimento_saida_cores();
		desativar_botoes_tabela();
		//movimento_saida_comandos();
		//FUNÇÃO PARA INICIAR JOGO
		document.querySelector("#area_video").className="animacao fadeOut";
		TrocaInstrucao('Comece pintando o número 1 de vermelho. Ele não é um dos números primos.');
		document.querySelector("#jogo_area").style.display="none";
		movimento_entrada_comandos();
		//desativar_botoes_tabela();
		parar_todos_audios();
		
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_1";
		}, 10);	
		
		audio_trilha_sonora.play();
		audio_comando_1.play("audio_comando_1_corte");
		document.querySelector("#jogo_area").style.display="inherit";
		document.querySelector("#jogo_area").className="animacao fadeIn";
		setTimeout(function(){
			document.querySelector("#jogo_area").className="nada";
			document.querySelector("#area_video").className="nada";
			document.querySelector("#area_video").style.display="none";
		}, 1000);
		
	
		
		
		
	}else{
		//FUNÇÃO PARA INICIAR JOGO
		movimento_saida_cores();
		document.querySelector("#area_video").className="animacao fadeOut";
		//TrocaInstrucao('Comece pintando o número 1 de vermelho. Ele não é um dos números primos.');
		document.querySelector("#jogo_area").style.display="none";
		movimento_saida_comandos();
		//desativar_botoes_tabela();
		parar_todos_audios();
		audio_trilha_sonora.play();
		//audio_comando_1.play("audio_comando_1_corte");
		document.querySelector("#jogo_area").style.display="inherit";
		document.querySelector("#jogo_area").className="animacao fadeIn";
		movimento_entrada_cores();
		setTimeout(function(){
			document.querySelector("#jogo_area").className="nada";
			document.querySelector("#area_video").className="nada";
			document.querySelector("#area_video").style.display="none";
		}, 1000);		
		
	}
	

		
		
		
		
		
		
		
		
		
		
		
}
function assistir_video(){
		alert("5");
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			//document.querySelector("#video_palco").currentTime=0;
			//document.querySelector("#video_palco").play();
		}else{
			document.querySelector("#video_palco").currentTime=0;
			document.querySelector("#video_palco").play();
			parar_todos_audios();
			audio_trilha_sonora.stop();
		}
		//
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		document.querySelector("#video_area_btn_video").className="animacao bounceInUp";

		
		document.querySelector("#area_video").className="animacao fadeIn";
		document.querySelector("#area_video").style.display="inherit";
		//
		setTimeout(function(){
			document.querySelector("#area_video").className="nada";
			document.querySelector("#video_area_btn_video").className="nada";
		}, 1000);	
}


function concluir_jogo(){
		sessionStorage.setItem('video_para_conclusao', 'sim');
		etapa_objeto="Final";
		TrocaInstrucao('Clique no botão Home para reiniciar o objeto.');
		parar_todos_audios();
		audio_trilha_sonora.stop();
		/*document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
		document.querySelector("#video_palco").className="nada";
		document.querySelector("#video_palco").src="./media/video/video_final.mp4";
		document.querySelector("#video_palco").currentTime=0;
		document.querySelector("#area_video").style.display="inherit";
		document.querySelector("#area_video").className="animacao fadeIn";
		document.querySelector("#video_palco").play();*/
		setTimeout(function(){
			//document.querySelector("#area_video").className="nada";
			document.querySelector("#jogo_area").style.display="none";
		}, 2000);	
}


function marcar_verde(escolha_verde){
	audio_clique_numero.play();
	document.querySelector("#"+escolha_verde).style.backgroundImage= "url('./img/jogo_area_tabela_marca_verde.jpg')";
	document.querySelector("#"+escolha_verde).className="jogo_area_tabela_ponto_selecao animacao_500ms vanishIn";
	document.querySelector("#"+escolha_verde).style.zIndex= "1";
}

function marcar_vermelho(escolha_vermelho){
	audio_clique_numero.play();
	document.querySelector("#"+escolha_vermelho).style.backgroundImage= "url('./img/jogo_area_tabela_marca_vermelha.jpg')";
	document.querySelector("#"+escolha_vermelho).className="jogo_area_tabela_ponto_selecao animacao_500ms vanishIn";
	document.querySelector("#"+escolha_vermelho).style.zIndex= "1";
}

function fechar_comando(){
	//parar_todos_audios();
	movimento_saida_comandos();
	movimento_entrada_cores();
}

function chamar_comando_1(){
	
	
	
}

function desativar_botoes_tabela(){
	$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_3, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_5, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_7, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_9, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_11, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_13, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_15, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_17, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_19, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_21, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_23, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_25, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_27, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_29, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_31, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_33, #jogo_area_tabela_ponto_selecao_34, #jogo_area_tabela_ponto_selecao_35, #jogo_area_tabela_ponto_selecao_36, #jogo_area_tabela_ponto_selecao_37, #jogo_area_tabela_ponto_selecao_38, #jogo_area_tabela_ponto_selecao_39, #jogo_area_tabela_ponto_selecao_40, #jogo_area_tabela_ponto_selecao_41, #jogo_area_tabela_ponto_selecao_42, #jogo_area_tabela_ponto_selecao_43, #jogo_area_tabela_ponto_selecao_44, #jogo_area_tabela_ponto_selecao_45, #jogo_area_tabela_ponto_selecao_46, #jogo_area_tabela_ponto_selecao_47, #jogo_area_tabela_ponto_selecao_48, #jogo_area_tabela_ponto_selecao_49").css( "display","none" );
}

function parar_todos_audios(){
	audio_comando_1.stop();
	audio_comando_2.stop();
	audio_comando_3.stop();
	audio_comando_4.stop();
	audio_comando_5.stop();
	audio_comando_6.stop();
	audio_comando_7.stop();
	audio_comando_8.stop();
	audio_comando_9.stop();
	audio_comando_10.stop();
	audio_erro_3.stop();
	audio_erro_5.stop();
	audio_erro_7.stop();
	audio_erro_9.stop();
}


/* Funções de animações e movimentos */
function movimento_entrada_cores(){
	document.querySelector("#jogo_area_bloco_cores").style.display="inherit";	
	document.querySelector("#jogo_area_bloco_cores").className="animacao spaceInRight";	
}


function movimento_saida_cores(){
	document.querySelector("#jogo_area_bloco_cores").className="animacao spaceOutRight";	
}

function movimento_entrada_comandos(){
	document.querySelector("#jogo_area_area_textos_comando").className="animacao zoomInUp";	
	document.querySelector("#jogo_area_bloco_textos_btn_ok").className="animacao zoomInUp";
	setTimeout(function(){
		document.querySelector("#jogo_area_area_textos_comando").className="nada";	
		document.querySelector("#jogo_area_bloco_textos_btn_ok").className="nada";
	}, 1000);	
}

function movimento_saida_comandos(){
	document.querySelector("#jogo_area_area_textos_comando").className="animacao zoomOutRight";	
	document.querySelector("#jogo_area_bloco_textos_btn_ok").className="animacao zoomOutRight";
	setTimeout(function(){
		$("#jogo_area_bloco_textos_comando_fase1, #jogo_area_bloco_textos_comando_fase2, #jogo_area_bloco_textos_comando_fase3, #jogo_area_bloco_textos_comando_fase3erro, #jogo_area_bloco_textos_comando_fase4, #jogo_area_bloco_textos_comando_fase5, #jogo_area_bloco_textos_comando_fase5erro, #jogo_area_bloco_textos_comando_fase6, #jogo_area_bloco_textos_comando_fase7, #jogo_area_bloco_textos_comando_fase7erro, #jogo_area_bloco_textos_comando_fase8, #jogo_area_bloco_textos_comando_fase9, #jogo_area_bloco_textos_comando_fase9erro, #jogo_area_bloco_textos_comando_fase10").css( "display","none" );
	}, 1000);
}

function esconder_coberturas_colunas(){
	$("#jogo_area_tabela_ponto_selecao_1_cobertura_coluna, #jogo_area_tabela_ponto_selecao_2_cobertura_coluna, #jogo_area_tabela_ponto_selecao_3_cobertura_coluna, #jogo_area_tabela_ponto_selecao_4_cobertura_coluna, #jogo_area_tabela_ponto_selecao_5_cobertura_coluna, #jogo_area_tabela_ponto_selecao_6_cobertura_coluna, #jogo_area_tabela_ponto_selecao_7_cobertura_coluna").css( "display","none" );
}

function exibir_coberturas_numeros(){
	setTimeout(function(){	
		//$("#jogo_area_tabela_ponto_selecao_1_cobertura, #jogo_area_tabela_ponto_selecao_2_cobertura, #jogo_area_tabela_ponto_selecao_3_cobertura, #jogo_area_tabela_ponto_selecao_4_cobertura, #jogo_area_tabela_ponto_selecao_5_cobertura, #jogo_area_tabela_ponto_selecao_6_cobertura, #jogo_area_tabela_ponto_selecao_7_cobertura, #jogo_area_tabela_ponto_selecao_8_cobertura, #jogo_area_tabela_ponto_selecao_9_cobertura, #jogo_area_tabela_ponto_selecao_10_cobertura, #jogo_area_tabela_ponto_selecao_11_cobertura, #jogo_area_tabela_ponto_selecao_12_cobertura, #jogo_area_tabela_ponto_selecao_13_cobertura, #jogo_area_tabela_ponto_selecao_14_cobertura, #jogo_area_tabela_ponto_selecao_15_cobertura, #jogo_area_tabela_ponto_selecao_16_cobertura, #jogo_area_tabela_ponto_selecao_17_cobertura, #jogo_area_tabela_ponto_selecao_18_cobertura, #jogo_area_tabela_ponto_selecao_19_cobertura, #jogo_area_tabela_ponto_selecao_20_cobertura, #jogo_area_tabela_ponto_selecao_21_cobertura, #jogo_area_tabela_ponto_selecao_22_cobertura, #jogo_area_tabela_ponto_selecao_23_cobertura, #jogo_area_tabela_ponto_selecao_24_cobertura, #jogo_area_tabela_ponto_selecao_25_cobertura, #jogo_area_tabela_ponto_selecao_26_cobertura, #jogo_area_tabela_ponto_selecao_27_cobertura, #jogo_area_tabela_ponto_selecao_28_cobertura, #jogo_area_tabela_ponto_selecao_29_cobertura, #jogo_area_tabela_ponto_selecao_30_cobertura, #jogo_area_tabela_ponto_selecao_31_cobertura, #jogo_area_tabela_ponto_selecao_32_cobertura, #jogo_area_tabela_ponto_selecao_33_cobertura, #jogo_area_tabela_ponto_selecao_34_cobertura, #jogo_area_tabela_ponto_selecao_35_cobertura, #jogo_area_tabela_ponto_selecao_36_cobertura, #jogo_area_tabela_ponto_selecao_37_cobertura, #jogo_area_tabela_ponto_selecao_38_cobertura, #jogo_area_tabela_ponto_selecao_39_cobertura, #jogo_area_tabela_ponto_selecao_40_cobertura, #jogo_area_tabela_ponto_selecao_41_cobertura, #jogo_area_tabela_ponto_selecao_42_cobertura, #jogo_area_tabela_ponto_selecao_43_cobertura, #jogo_area_tabela_ponto_selecao_44_cobertura, #jogo_area_tabela_ponto_selecao_45_cobertura, #jogo_area_tabela_ponto_selecao_46_cobertura, #jogo_area_tabela_ponto_selecao_47_cobertura, #jogo_area_tabela_ponto_selecao_48_cobertura, #jogo_area_tabela_ponto_selecao_49_cobertura").css( "display","inherit");
	}, 1000);
}


/* Configurações de cliques e interações */

    //Gota verde
    $("#jogo_area_bloco_primo_btn").click(function(){
		/*--- ETAPA #1 ---*/
		if(etapa_objeto==1 || etapa_objeto==0){
			parar_todos_audios();
			audio_comando_1.play("audio_comando_1_corte");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_1";
		}, 10);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase1").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #2 ---*/
		if(etapa_objeto==2){
			document.querySelector("#jogo_area_tabela_ponto_selecao_2").style.display="inherit";
			document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_primo_btn").className="animacao jello";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
				document.querySelector("#jogo_area_bloco_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #3 ---*/
		if(etapa_objeto==3){
			parar_todos_audios();
			audio_comando_3.play("audio_comando_3_corte1");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_3";
		}, 1000);				
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase3").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #4 ---*/
		if(etapa_objeto==4){
			esconder_coberturas_colunas();
			document.querySelector("#jogo_area_tabela_ponto_selecao_3").style.display="inherit";
			document.querySelector("#jogo_area_tabela_ponto_selecao_4").style.display="inherit";
			document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_primo_btn").className="animacao jello";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
				document.querySelector("#jogo_area_bloco_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #5 ---*/
		if(etapa_objeto==5){
			esconder_coberturas_colunas();
			parar_todos_audios();
			audio_comando_5.play("audio_comando_5_corte1");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase5").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}		
		/*--- ETAPA #6 ---*/
		if(etapa_objeto==6){
			esconder_coberturas_colunas();
			document.querySelector("#jogo_area_tabela_ponto_selecao_5").style.display="inherit";
			document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_primo_btn").className="animacao jello";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
				document.querySelector("#jogo_area_bloco_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #7 ---*/
		if(etapa_objeto==7){
			esconder_coberturas_colunas();
			parar_todos_audios();
			audio_comando_7.play("audio_comando_7_corte1");
								document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 1000);
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase7").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #8 ---*/
		if(etapa_objeto==8){
			esconder_coberturas_colunas();
			document.querySelector("#jogo_area_tabela_ponto_selecao_7").style.display="inherit";
			document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_primo_btn").className="animacao jello";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
				document.querySelector("#jogo_area_bloco_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #9 ---*/
		if(etapa_objeto==9){
			esconder_coberturas_colunas();
			parar_todos_audios();
			audio_comando_9.play("audio_comando_9_corte1");
								document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_9";
		}, 1000);
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase9").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #10 ---*/
		if(etapa_objeto==10){
		esconder_coberturas_colunas();	
		$("#jogo_area_tabela_ponto_selecao_11, #jogo_area_tabela_ponto_selecao_13, #jogo_area_tabela_ponto_selecao_17, #jogo_area_tabela_ponto_selecao_19, #jogo_area_tabela_ponto_selecao_23, #jogo_area_tabela_ponto_selecao_29, #jogo_area_tabela_ponto_selecao_31, #jogo_area_tabela_ponto_selecao_37, #jogo_area_tabela_ponto_selecao_41, #jogo_area_tabela_ponto_selecao_43, #jogo_area_tabela_ponto_selecao_47").css( "display","inherit" );
			document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_primo_btn").className="animacao jello";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
				document.querySelector("#jogo_area_bloco_primo_btn").className="nada";
			}, 1000);			
		}		
    });

    //Gota vermelha
	$("#jogo_area_bloco_nao_primo_btn").click(function(){
		//etapa_objeto=1;
		/*--- ETAPA #1 ---*/
		if(etapa_objeto==1 || etapa_objeto==0){
			document.querySelector("#jogo_area_tabela_ponto_selecao_1").style.display="inherit";
			document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_nao_primo_btn").className="animacao jello";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
				document.querySelector("#jogo_area_bloco_nao_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #2 ---*/
		if(etapa_objeto==2){
			parar_todos_audios();
			audio_comando_2.play("audio_comando_2_corte1");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 1000);			
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase2").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();			
		}
		/*--- ETAPA #3 ---*/
		if(etapa_objeto==3){
			tipo_mensagem="escolha_numeros";
			//
			esconder_coberturas_colunas();
			$("#jogo_area_tabela_ponto_selecao_2_cobertura_coluna").css( "display","inherit" );		
			//			
			$("#jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48").css( "display","inherit" );
			document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_nao_primo_btn").className="animacao rubberBand";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			 document.querySelector("#jogo_area_tabela_ponto_selecao_2_cobertura_coluna").style.cursor="default";
			setTimeout(function(){
					document.querySelector("#jogo_area_bloco_nao_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #4 ---*/
		if(etapa_objeto==4){
			esconder_coberturas_colunas();
			parar_todos_audios();
			audio_comando_4.play("audio_comando_4_corte1");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_4";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase4").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();			
		}
		/*--- ETAPA #5 ---*/
		if(etapa_objeto==5){
			tipo_mensagem="escolha_numeros";
			esconder_coberturas_colunas();
			$("#jogo_area_tabela_ponto_selecao_3_cobertura_coluna").css( "display","inherit" );
			$("#jogo_area_tabela_ponto_selecao_9, #jogo_area_tabela_ponto_selecao_15, #jogo_area_tabela_ponto_selecao_21, #jogo_area_tabela_ponto_selecao_27, #jogo_area_tabela_ponto_selecao_33, #jogo_area_tabela_ponto_selecao_39, #jogo_area_tabela_ponto_selecao_45").css( "display","inherit" );
			document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_nao_primo_btn").className="animacao rubberBand";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
					document.querySelector("#jogo_area_bloco_nao_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #6 ---*/
		if(etapa_objeto==6){
			esconder_coberturas_colunas();
			parar_todos_audios();
			audio_comando_6.play("audio_comando_6_corte1");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_6";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase6").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();			
		}
		/*--- ETAPA #7 ---*/
		if(etapa_objeto==7){
			tipo_mensagem="escolha_numeros";
			esconder_coberturas_colunas();
			$("#jogo_area_tabela_ponto_selecao_5_cobertura_coluna").css( "display","inherit" );
			$("#jogo_area_tabela_ponto_selecao_25, #jogo_area_tabela_ponto_selecao_35").css( "display","inherit" );
			document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_nao_primo_btn").className="animacao rubberBand";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
					document.querySelector("#jogo_area_bloco_nao_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #8 ---*/
		if(etapa_objeto==8){
			esconder_coberturas_colunas();
			parar_todos_audios();
			audio_comando_8.play("audio_comando_8_corte1");
								document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_8";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase8").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();			
		}
		/*--- ETAPA #9 ---*/
		if(etapa_objeto==9){
			tipo_mensagem="escolha_numeros";
			esconder_coberturas_colunas();
			$("#jogo_area_tabela_ponto_selecao_7_cobertura_coluna").css( "display","inherit" );
			$("#jogo_area_tabela_ponto_selecao_49").css( "display","inherit" );
			document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn2.png')";
			document.querySelector("#jogo_area_bloco_nao_primo_btn").className="animacao rubberBand";
			document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="inherit";
			setTimeout(function(){
					document.querySelector("#jogo_area_bloco_nao_primo_btn").className="nada";
			}, 1000);			
		}
		/*--- ETAPA #10 ---*/
		if(etapa_objeto==10){
			esconder_coberturas_colunas();
			parar_todos_audios();
			audio_comando_10.play("audio_comando_10_corte1");
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_10";
		}, 1000);
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase10").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();			
		}		
    });	

    $("#jogo_area_tabela_ponto_selecao_1_cobertura, #jogo_area_tabela_ponto_selecao_2_cobertura, #jogo_area_tabela_ponto_selecao_3_cobertura, #jogo_area_tabela_ponto_selecao_4_cobertura, #jogo_area_tabela_ponto_selecao_5_cobertura, #jogo_area_tabela_ponto_selecao_6_cobertura, #jogo_area_tabela_ponto_selecao_7_cobertura, #jogo_area_tabela_ponto_selecao_8_cobertura, #jogo_area_tabela_ponto_selecao_9_cobertura, #jogo_area_tabela_ponto_selecao_10_cobertura, #jogo_area_tabela_ponto_selecao_11_cobertura, #jogo_area_tabela_ponto_selecao_12_cobertura, #jogo_area_tabela_ponto_selecao_13_cobertura, #jogo_area_tabela_ponto_selecao_14_cobertura, #jogo_area_tabela_ponto_selecao_15_cobertura, #jogo_area_tabela_ponto_selecao_16_cobertura, #jogo_area_tabela_ponto_selecao_17_cobertura, #jogo_area_tabela_ponto_selecao_18_cobertura, #jogo_area_tabela_ponto_selecao_19_cobertura, #jogo_area_tabela_ponto_selecao_20_cobertura, #jogo_area_tabela_ponto_selecao_21_cobertura, #jogo_area_tabela_ponto_selecao_22_cobertura, #jogo_area_tabela_ponto_selecao_23_cobertura, #jogo_area_tabela_ponto_selecao_24_cobertura, #jogo_area_tabela_ponto_selecao_25_cobertura, #jogo_area_tabela_ponto_selecao_26_cobertura, #jogo_area_tabela_ponto_selecao_27_cobertura, #jogo_area_tabela_ponto_selecao_28_cobertura, #jogo_area_tabela_ponto_selecao_29_cobertura, #jogo_area_tabela_ponto_selecao_30_cobertura, #jogo_area_tabela_ponto_selecao_31_cobertura, #jogo_area_tabela_ponto_selecao_32_cobertura, #jogo_area_tabela_ponto_selecao_33_cobertura, #jogo_area_tabela_ponto_selecao_34_cobertura, #jogo_area_tabela_ponto_selecao_35_cobertura, #jogo_area_tabela_ponto_selecao_36_cobertura, #jogo_area_tabela_ponto_selecao_37_cobertura, #jogo_area_tabela_ponto_selecao_38_cobertura, #jogo_area_tabela_ponto_selecao_39_cobertura, #jogo_area_tabela_ponto_selecao_40_cobertura, #jogo_area_tabela_ponto_selecao_41_cobertura, #jogo_area_tabela_ponto_selecao_42_cobertura, #jogo_area_tabela_ponto_selecao_43_cobertura, #jogo_area_tabela_ponto_selecao_44_cobertura, #jogo_area_tabela_ponto_selecao_45_cobertura, #jogo_area_tabela_ponto_selecao_46_cobertura, #jogo_area_tabela_ponto_selecao_47_cobertura, #jogo_area_tabela_ponto_selecao_48_cobertura, #jogo_area_tabela_ponto_selecao_49_cobertura").click(function(){
		/*--- ETAPA #1 ---*/
		if(etapa_objeto==1 || etapa_objeto==0){
			parar_todos_audios();
			audio_comando_1.play("audio_comando_1_corte1");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_1";
		}, 10);	
		//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase1").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #2 ---*/
		if(etapa_objeto==2){
			parar_todos_audios();
			audio_comando_2.play("audio_comando_2_corte1");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase2").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #3 ---*/
		if(etapa_objeto==3 && tipo_mensagem=="escolha_cor"){
			parar_todos_audios();
			audio_comando_3.play("audio_comando_3_corte1");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_3";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase3").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();		
		}		
		if(etapa_objeto==3 && tipo_mensagem=="escolha_numeros"){
			parar_todos_audios();
			audio_erro_3.play("audio_erro_3_corte");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_erro2";
		}, 10);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase3erro").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #4 ---*/
		if(etapa_objeto==4){
			parar_todos_audios();
			audio_comando_4.play("audio_comando_4_corte1");
				document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_4";
		}, 1000);		
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase4").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #5 ---*/
		if(etapa_objeto==5 && tipo_mensagem=="escolha_cor"){
			parar_todos_audios();
			audio_comando_5.play("audio_comando_5_corte1");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase5").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();		
		}		
		if(etapa_objeto==5 && tipo_mensagem=="escolha_numeros"){
			parar_todos_audios();
			audio_erro_5.play("audio_erro_5_corte");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_erro";
		}, 10);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase5erro").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #6 ---*/
		if(etapa_objeto==6){
			parar_todos_audios();
			audio_comando_6.play("audio_comando_6_corte1");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_6";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase6").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #7 ---*/
		if(etapa_objeto==7 && tipo_mensagem=="escolha_cor"){
			parar_todos_audios();
			audio_comando_7.play("audio_comando_7_corte1");
								document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 1000);
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase7").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();		
		}		
		if(etapa_objeto==7 && tipo_mensagem=="escolha_numeros"){
			parar_todos_audios();
			audio_erro_7.play("audio_erro_7_corte");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_erro";
		}, 10);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase7erro").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #8 ---*/
		if(etapa_objeto==8){
			parar_todos_audios();
			audio_comando_8.play("audio_comando_8_corte1");
								document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_8";
		}, 1000);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase8").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #9 ---*/
		if(etapa_objeto==9 && tipo_mensagem=="escolha_cor"){
			parar_todos_audios();
			audio_comando_9.play("audio_comando_9_corte1");
								document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_9";
		}, 1000);
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase9").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();		
		}		
		if(etapa_objeto==9 && tipo_mensagem=="escolha_numeros"){
			parar_todos_audios();
			audio_erro_9.play("audio_erro_9_corte");
					document.querySelector("#jogo_area_eratostenes_boca_aberta").className="nada";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_erro";
		}, 10);	
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase9erro").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}
		/*--- ETAPA #10 ---*/
		if(etapa_objeto==10){
			parar_todos_audios();
			audio_comando_10.play("audio_comando_10_corte1");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_10";
		}, 1000);
			//Áudio
			document.querySelector("#jogo_area_bloco_textos_comando_fase10").style.display="inherit";	
			movimento_saida_cores();
			movimento_entrada_comandos();
		}		
    });
	
 
function verificar_fim_fase3(){
	//console.log(fim_etapa_3);
	if(fim_etapa_3=="p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p"){
		/* Passagem para etapa 2 */
		etapa_objeto=4;
		TrocaInstrucao('Agora que terminamos de excluir os múltiplos de 2, vamos destacar o próximo número não pintado:<br />o número 3. Ele é um número primo.');
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_4.play("audio_comando_4_corte");
				document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_4";
		}, 2000);	
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48").css( "display","inherit" );
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase4").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			
	}
}

function verificar_fim_fase5(){
	if(fim_etapa_5=="p,p,p,p,p,p,p"){
		/* Passagem para etapa 6 */
		etapa_objeto=6;
		TrocaInstrucao('Agora que terminamos de excluir os múltiplos de 3, vamos destacar o próximo número não pintado:<br />o número 5. Ele é um número primo.');
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_6.play("audio_comando_6_corte");
				document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_6";
		}, 2000);	
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_3, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48").css( "display","inherit" );
		$("#jogo_area_tabela_ponto_selecao_9, #jogo_area_tabela_ponto_selecao_15, #jogo_area_tabela_ponto_selecao_21, #jogo_area_tabela_ponto_selecao_27, #jogo_area_tabela_ponto_selecao_33, #jogo_area_tabela_ponto_selecao_39, #jogo_area_tabela_ponto_selecao_45").css( "display","inherit" );
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase6").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			
	}
}


function verificar_fim_fase7(){
	if(fim_etapa_7=="p,p"){
		/* Passagem para etapa 6 */
		etapa_objeto=8;
		TrocaInstrucao('Agora que terminamos de excluir os múltiplos de 5, vamos destacar o próximo número não pintado:<br />o número 7. Ele é um número primo.');
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_8.play("audio_comando_8_corte");
							document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_8";
		}, 2000);	
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		// Múltiplos de 2, número 1, 3 e 5
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_3, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_5, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48").css( "display","inherit" );
		// Múltiplos de 3
		$("#jogo_area_tabela_ponto_selecao_9, #jogo_area_tabela_ponto_selecao_15, #jogo_area_tabela_ponto_selecao_21, #jogo_area_tabela_ponto_selecao_27, #jogo_area_tabela_ponto_selecao_33, #jogo_area_tabela_ponto_selecao_39, #jogo_area_tabela_ponto_selecao_45").css( "display","inherit" );
		// Múltiplos de 5
		$("#jogo_area_tabela_ponto_selecao_25, #jogo_area_tabela_ponto_selecao_35").css( "display","inherit" );		
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase8").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			
	}
}



function verificar_fim_fase10(){
	if(fim_etapa_10=="p,p,p,p,p,p,p,p,p,p,p"){
		//alert("Executar vídeo de conclusão!")
		//document.querySelector("#jogo_area").className="animacao_4s vanishOut";
		concluir_jogo();
	}
}



/*-- Configuração de cliques para casos em botões na tabela */
   $("#jogo_area_tabela_ponto_selecao_1").click(function(){
	   document.querySelector("#jogo_area_tabela_ponto_selecao_1_cobertura").style.cursor="default";
		/* Passagem para etapa 2 */
		etapa_objeto=2;
		TrocaInstrucao('Pinte de verde o número 2.');
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_2.play("audio_comando_2_corte");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 2000);	
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		document.querySelector("#jogo_area_tabela_ponto_selecao_1").style.display="inherit";
		//document.querySelector("#jogo_area_tabela_ponto_selecao_1_cobertura").style.display="none";
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase2").style.display="inherit";
				movimento_entrada_comandos();
				$("#jogo_area_tabela_ponto_selecao_1_cobertura").css( "display","none");
		}, 1000);
    });

    $("#jogo_area_tabela_ponto_selecao_2").click(function(){
		document.querySelector("#jogo_area_tabela_ponto_selecao_2_cobertura").style.cursor="default";
		/* Passagem para etapa 3 */
		etapa_objeto=3;
		TrocaInstrucao('Agora pinte de vermelho os múltiplos de 2, que, assim como o número 1, não são primos.');
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_3.play("audio_comando_3_corte");
				document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_3";
			document.querySelector("#jogo_area_tabela_ponto_selecao_2_cobertura").style.cursor="default";
		}, 2000);	
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2").css( "display","inherit");
		document.querySelector("#jogo_area_tabela_ponto_selecao_2_cobertura").style.display="none";
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase3").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			

    });

    $("#jogo_area_tabela_ponto_selecao_3").click(function(){
		document.querySelector("#jogo_area_tabela_ponto_selecao_3_cobertura").style.cursor="default";
		document.querySelector("#jogo_area_tabela_ponto_selecao_3_cobertura_coluna").style.cursor="default";
		/* Passagem para etapa 5 */
		etapa_objeto=5;
		TrocaInstrucao('Pinte de vermelho os múltiplos de 3.');
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_5.play("audio_comando_5_corte");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 2000);	
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_3, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48").css( "display","inherit" );
		document.querySelector("#jogo_area_tabela_ponto_selecao_3_cobertura").style.display="none";
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase5").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			

    });

    $("#jogo_area_tabela_ponto_selecao_5").click(function(){
		document.querySelector("#jogo_area_tabela_ponto_selecao_5_cobertura").style.cursor="default";
		document.querySelector("#jogo_area_tabela_ponto_selecao_5_cobertura_coluna").style.cursor="default";
		document.querySelector("#jogo_area_tabela_ponto_selecao_5_cobertura_coluna").style.display="none";
		document.querySelector("#jogo_area_tabela_ponto_selecao_5_cobertura").style.display="none";
		/* Passagem para etapa 7 */
		etapa_objeto=7;
		TrocaInstrucao('Pinte de vermelho os múltiplos de 5.');
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_7.play("audio_comando_7_corte");
							document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_2";
		}, 2000);
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_3, #jogo_area_tabela_ponto_selecao_5, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48").css( "display","inherit" );
		//
		$("#jogo_area_tabela_ponto_selecao_9, #jogo_area_tabela_ponto_selecao_15, #jogo_area_tabela_ponto_selecao_21, #jogo_area_tabela_ponto_selecao_27, #jogo_area_tabela_ponto_selecao_33, #jogo_area_tabela_ponto_selecao_39, #jogo_area_tabela_ponto_selecao_45").css( "display","inherit" );	
		//
		document.querySelector("#jogo_area_tabela_ponto_selecao_3_cobertura, #jogo_area_tabela_ponto_selecao_5_cobertura").style.display="none";
		
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase7").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			

    });	
    $("#jogo_area_tabela_ponto_selecao_7").click(function(){
		document.querySelector("#jogo_area_tabela_ponto_selecao_7_cobertura").style.cursor="default";
		document.querySelector("#jogo_area_tabela_ponto_selecao_7_cobertura_coluna").style.cursor="default";
		/* Passagem para etapa 9 */
		etapa_objeto=9;
		TrocaInstrucao('Pinte de vermelho os múltiplos de 7.');		
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_9.play("audio_comando_9_corte");
							document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_9";
		}, 2000);
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		// Múltiplos de 2, número 1, 3, 5 e 7
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_3, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_5, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_7, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48").css( "display","inherit" );
		// Múltiplos de 3
		$("#jogo_area_tabela_ponto_selecao_9, #jogo_area_tabela_ponto_selecao_15, #jogo_area_tabela_ponto_selecao_21, #jogo_area_tabela_ponto_selecao_27, #jogo_area_tabela_ponto_selecao_33, #jogo_area_tabela_ponto_selecao_39, #jogo_area_tabela_ponto_selecao_45").css( "display","inherit" );
		// Múltiplos de 5
		$("#jogo_area_tabela_ponto_selecao_25, #jogo_area_tabela_ponto_selecao_35").css( "display","inherit" );
		//		
		document.querySelector("#jogo_area_tabela_ponto_selecao_7_cobertura").style.display="none";
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase9").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			

    });
    $("#jogo_area_tabela_ponto_selecao_49").click(function(){
		document.querySelector("#jogo_area_tabela_ponto_selecao_49_cobertura").style.cursor="default";
		/* Passagem para etapa 10 */
		etapa_objeto=10;
		TrocaInstrucao('E, finalmente, como organizamos os números em uma quantidade igual de linhas e colunas, e já pintamos toda a primeira linha, todo os números que sobraram são primos! Pinte-os de verde.');	
		tipo_mensagem="escolha_cor";
		exibir_coberturas_numeros();
		parar_todos_audios();
		audio_comando_10.play("audio_comando_10_corte");
		document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_0";
		setTimeout(function(){
			document.querySelector("#jogo_area_eratostenes_boca_aberta").className="fala_comando_10";
		}, 2000);
		document.querySelector("#jogo_area_bloco_cores_cobertura").style.display="none";
		document.querySelector("#jogo_area_bloco_nao_primo_btn").style.backgroundImage= "url('./img/jogo_area_bloco_nao_primo_btn.png')";
		movimento_saida_comandos()
		movimento_saida_cores();
		desativar_botoes_tabela();
		// Múltiplos de 2, número 1, 3, 5, 7 e 49
		$("#jogo_area_tabela_ponto_selecao_1, #jogo_area_tabela_ponto_selecao_2, #jogo_area_tabela_ponto_selecao_3, #jogo_area_tabela_ponto_selecao_4, #jogo_area_tabela_ponto_selecao_5, #jogo_area_tabela_ponto_selecao_6, #jogo_area_tabela_ponto_selecao_7, #jogo_area_tabela_ponto_selecao_8, #jogo_area_tabela_ponto_selecao_10, #jogo_area_tabela_ponto_selecao_12, #jogo_area_tabela_ponto_selecao_14, #jogo_area_tabela_ponto_selecao_16, #jogo_area_tabela_ponto_selecao_18, #jogo_area_tabela_ponto_selecao_20, #jogo_area_tabela_ponto_selecao_22, #jogo_area_tabela_ponto_selecao_24, #jogo_area_tabela_ponto_selecao_26, #jogo_area_tabela_ponto_selecao_28, #jogo_area_tabela_ponto_selecao_30, #jogo_area_tabela_ponto_selecao_32, #jogo_area_tabela_ponto_selecao_34 ,#jogo_area_tabela_ponto_selecao_36 ,#jogo_area_tabela_ponto_selecao_38 ,#jogo_area_tabela_ponto_selecao_40 ,#jogo_area_tabela_ponto_selecao_42 ,#jogo_area_tabela_ponto_selecao_44 ,#jogo_area_tabela_ponto_selecao_46 ,#jogo_area_tabela_ponto_selecao_48,#jogo_area_tabela_ponto_selecao_49").css( "display","inherit" );
		// Múltiplos de 3
		$("#jogo_area_tabela_ponto_selecao_9, #jogo_area_tabela_ponto_selecao_15, #jogo_area_tabela_ponto_selecao_21, #jogo_area_tabela_ponto_selecao_27, #jogo_area_tabela_ponto_selecao_33, #jogo_area_tabela_ponto_selecao_39, #jogo_area_tabela_ponto_selecao_45").css( "display","inherit" );
		// Múltiplos de 5
		$("#jogo_area_tabela_ponto_selecao_25, #jogo_area_tabela_ponto_selecao_35").css( "display","inherit" );
		//
		document.querySelector("#jogo_area_tabela_ponto_selecao_49_cobertura").style.display="none";
		setTimeout(function(){
				document.querySelector("#jogo_area_bloco_textos_comando_fase10").style.display="inherit";
				movimento_entrada_comandos();
		}, 1000);			

    });		
/*Etapa #3 - múltiplos de 2*/
$( "#jogo_area_tabela_ponto_selecao_4").click(function(){fim_etapa_3[0]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_4_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_4_cobertura").style.cursor="default";document.querySelector("#jogo_area_tabela_ponto_selecao_4_cobertura_coluna").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_6").click(function(){fim_etapa_3[1]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_6_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_6_cobertura").style.cursor="default";document.querySelector("#jogo_area_tabela_ponto_selecao_6_cobertura_coluna").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_8").click(function(){fim_etapa_3[2]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_8_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_8_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_10").click(function(){fim_etapa_3[3]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_10_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_10_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_12").click(function(){fim_etapa_3[4]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_12_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_12_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_14").click(function(){fim_etapa_3[5]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_14_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_14_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_16").click(function(){fim_etapa_3[6]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_16_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_16_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_18").click(function(){fim_etapa_3[7]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_18_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_18_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_20").click(function(){fim_etapa_3[8]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_20_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_20_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_22").click(function(){fim_etapa_3[9]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_22_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_22_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_24").click(function(){fim_etapa_3[10]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_24_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_24_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_26").click(function(){fim_etapa_3[11]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_26_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_26_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_28").click(function(){fim_etapa_3[12]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_28_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_28_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_30").click(function(){fim_etapa_3[13]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_30_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_30_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_32").click(function(){fim_etapa_3[14]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_32_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_32_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_34").click(function(){fim_etapa_3[15]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_34_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_34_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_36").click(function(){fim_etapa_3[16]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_36_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_36_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_38").click(function(){fim_etapa_3[17]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_38_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_38_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_40").click(function(){fim_etapa_3[18]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_40_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_40_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_42").click(function(){fim_etapa_3[19]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_42_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_42_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_44").click(function(){fim_etapa_3[20]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_44_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_44_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_46").click(function(){fim_etapa_3[21]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_46_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_46_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_48").click(function(){fim_etapa_3[22]="p"; verificar_fim_fase3(); document.querySelector("#jogo_area_tabela_ponto_selecao_48_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_48_cobertura").style.cursor="default";});
/* Etapa #5 - múltiplos de 3 */
$( "#jogo_area_tabela_ponto_selecao_9").click(function(){fim_etapa_5[0]="p"; verificar_fim_fase5(); document.querySelector("#jogo_area_tabela_ponto_selecao_9_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_9_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_15").click(function(){fim_etapa_5[1]="p"; verificar_fim_fase5(); document.querySelector("#jogo_area_tabela_ponto_selecao_15_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_15_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_21").click(function(){fim_etapa_5[2]="p"; verificar_fim_fase5(); document.querySelector("#jogo_area_tabela_ponto_selecao_21_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_21_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_27").click(function(){fim_etapa_5[3]="p"; verificar_fim_fase5(); document.querySelector("#jogo_area_tabela_ponto_selecao_27_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_27_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_33").click(function(){fim_etapa_5[4]="p"; verificar_fim_fase5(); document.querySelector("#jogo_area_tabela_ponto_selecao_33_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_33_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_39").click(function(){fim_etapa_5[5]="p"; verificar_fim_fase5(); document.querySelector("#jogo_area_tabela_ponto_selecao_39_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_39_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_45").click(function(){fim_etapa_5[6]="p"; verificar_fim_fase5(); document.querySelector("#jogo_area_tabela_ponto_selecao_45_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_45_cobertura").style.cursor="default";});
/* Etapa #7 - múltiplos de 5 */
$( "#jogo_area_tabela_ponto_selecao_25").click(function(){fim_etapa_7[0]="p"; verificar_fim_fase7(); document.querySelector("#jogo_area_tabela_ponto_selecao_25_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_25_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_35").click(function(){fim_etapa_7[1]="p"; verificar_fim_fase7(); document.querySelector("#jogo_area_tabela_ponto_selecao_35_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_35_cobertura").style.cursor="default";});
/* Etapa #10 - primos restantes */
$( "#jogo_area_tabela_ponto_selecao_11").click(function(){fim_etapa_10[0]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_11_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_11_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_13").click(function(){fim_etapa_10[1]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_13_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_13_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_17").click(function(){fim_etapa_10[2]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_17_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_17_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_19").click(function(){fim_etapa_10[3]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_19_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_19_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_23").click(function(){fim_etapa_10[4]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_23_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_23_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_29").click(function(){fim_etapa_10[5]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_29_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_29_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_31").click(function(){fim_etapa_10[6]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_31_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_31_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_37").click(function(){fim_etapa_10[7]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_37_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_37_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_41").click(function(){fim_etapa_10[8]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_41_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_41_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_43").click(function(){fim_etapa_10[9]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_43_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_43_cobertura").style.cursor="default";});
$( "#jogo_area_tabela_ponto_selecao_47").click(function(){fim_etapa_10[10]="p"; verificar_fim_fase10(); document.querySelector("#jogo_area_tabela_ponto_selecao_47_cobertura").style.display="none";document.querySelector("#jogo_area_tabela_ponto_selecao_47_cobertura").style.cursor="default";});
