/**
 * Autor: Leonardo Fernandes
 * Versão:0.0.1
 * Objetivo desse arquivo é prover ojetos para a criação da parte mobile do projeto
 */
var usuarioRequest={};
usuarioRequest.email='nononono@nonon.com.br';
usuarioRequest.senha='1234!@#$';
var divResultado = document.getElementById("resultado");
divResultado.innerHTML = 'Inicio<br\>';

function casoDeUso1FluxoBasico(usuarioRequest){
	appendMocks("Caso de uso 1 request <br/> <div style='padding-left:20px' >"+JSON.stringify(usuarioRequest)+"</div><br/>");
	var usuario={};
	usuario.id=1;
	usuario.senha=usuarioRequest.senha;
	usuario.email=usuarioRequest.email;
	return usuario;
}
appendMocks("Caso de uso 1 response <br/> <div style='padding-left:20px' >"+JSON.stringify(casoDeUso1FluxoBasico(usuarioRequest))+"</div><br/>");

function casoDeUso2FluxoBasico(usuarioRequest){
	appendMocks("Caso de uso 2 request <br/> <div style='padding-left:20px' >"+JSON.stringify(usuarioRequest)+"</div><br/>");
	var usuario={};
	usuario.id=1;
	usuario.senha=usuarioRequest.senha;
	usuario.email=usuarioRequest.email;
	return usuario;
}

appendMocks("Caso de uso 2 response <br/> <div style='padding-left:20px' >"+JSON.stringify(casoDeUso2FluxoBasico(usuarioRequest))+"</div><br/>");

function casoDeUso3FluxoBasico(usuarioRequest){
	appendMocks("Caso de uso 3 request <br/> <div style='padding-left:20px' >"+JSON.stringify(usuarioRequest)+"</div><br/>");
	var usuario={};
	usuario.id=1;
	usuario.senha=usuarioRequest.senha;
	usuario.email=usuarioRequest.email;
	return usuario;
}

appendMocks("Caso de uso 3 response <br/> <div style='padding-left:20px' >"+JSON.stringify(casoDeUso3FluxoBasico(usuarioRequest))+"</div><br/>");

var usuarioSessionRequest={};
usuarioSessionRequest.email='nononono@nonon.com.br';
usuarioSessionRequest.senha='1234!@#$';;
usuarioSessionRequest.id=1;


function casoDeUso4FluxoBasico(usuarioSessionRequest){
	appendMocks("Caso de uso 4 resquest <br/> <div style='padding-left:20px' >"+JSON.stringify(usuarioSessionRequest)+"</div><br/>");
	var usuario={};
	usuario = usuarioSessionRequest;
	usuario.gatos=[];
	for (i=0;i<3;i++){
		var gato ={};
		gato.id=i;
		gato.nome="gato"+i;
		gato.foto="foto string Base64";
		gato.dtNasc="11/11/1111";
		gato.sexo="Macho";
		gato.pelagem="Curto";
		gato.cor="Preto";
		gato.naturalidade="Rio de Janeiro";
		gato.microchip="125AFBB";
		//gato.perguntas=getPerguntasArray();
		usuario.gatos[i]=gato;
	}
	return usuario;
}


appendMocks("Caso de uso 4 response <br/> <div style='padding-left:20px' >"+JSON.stringify(casoDeUso4FluxoBasico(usuarioSessionRequest))+"</div><br/>");


function casoDeUso5FluxoBasico(usuarioSessionRequest){
	var usuario={};
	usuario = usuarioSessionRequest;
	usuario.gatos=[];
	i=0;
		var gato ={};
		gato.id=i;
		gato.nome="gato"+i;
		gato.foto="foto string Base64";
		gato.dtNasc="11/11/1111";
		gato.sexo="Macho";
		gato.pelagem="Curto";
		gato.cor="Preto";
		gato.naturalidade="Rio de Janeiro";
		gato.microchip="125AFBB";
		gato.perguntas="Todas as perguntas e seus respequitivos estados como estão mantidos no dispositivo "
		usuario.gatos[i]=gato;
	appendMocks("Caso de uso 5 request <br/> <div style='padding-left:20px' >"+JSON.stringify(usuarioSessionRequest)+"</div><br/>");
	return 200;
}


appendMocks("Caso de uso 5 response <br/> <div style='padding-left:20px' >"+JSON.stringify(casoDeUso5FluxoBasico(usuarioSessionRequest))+"</div><br/>");


function casoDeUso5FluxoBasico(usuarioSessionRequest){
	var usuario={};
	usuario = usuarioSessionRequest;
	usuario.gatos=[];
	i=0;
		var gato ={};
		gato.id=i;
		gato.nome="gato"+i;
		gato.foto="foto string Base64";
		gato.dtNasc="11/11/1111";
		gato.sexo="Macho";
		gato.pelagem="Curto";
		gato.cor="Preto";
		gato.naturalidade="Rio de Janeiro";
		gato.microchip="125AFBB";
		gato.perguntas="Todas as perguntas e seus respequitivos estados como estão mantidos no dispositivo "
		usuario.gatos[i]=gato;
	appendMocks("Caso de uso 5 request <br/> <div style='padding-left:20px' >"+JSON.stringify(usuarioSessionRequest)+"</div><br/>");
	return 200;
}


appendMocks("Caso de uso 5 response <br/> <div style='padding-left:20px' >"+JSON.stringify(casoDeUso5FluxoBasico(usuarioSessionRequest))+"</div><br/>");

function casoDeUso6FluxoBasico(usuarioSessionRequest){
	var usuario={};
	usuario = usuarioSessionRequest;
	usuario.gatos=[];
	i=0;
		var gato ={};
		gato.id=i;
		gato.nome="gato"+i;
		gato.foto="foto string Base64";
		gato.dtNasc="11/11/1111";
		gato.sexo="Macho";
		gato.pelagem="Curto";
		gato.cor="Preto";
		gato.naturalidade="Rio de Janeiro";
		gato.microchip="125AFBB";
		usuario.gatos[i]=gato;
	appendMocks("Caso de uso 6 request <br/> <div style='padding-left:20px' >"+JSON.stringify(usuarioSessionRequest)+"</div><br/>");
	return 201;
}


appendMocks("Caso de uso 5 response <br/> <div style='padding-left:20px' >"+JSON.stringify(casoDeUso5FluxoBasico(usuarioSessionRequest))+"</div><br/>");




function getPerguntasArray(){
	var perguntas=[];
		perguntas[0]={
			id:"0",
			titulo:"Castrado?",
			valor:"10",
			subTitulo:"",
			tipo:"multiple-choice",
			categoria:"Saúde",
			possiveis:["Sim","Não","Não Ainda"],
			resposta:""

		}

	return perguntas;
}

function appendMocks (str){
	divResultado.innerHTML = divResultado.innerHTML + str;
}
