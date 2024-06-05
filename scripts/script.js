let posicaoDoMouse = 0;
let assinar = document.getElementsByClassName("assinar")[0];
let nav = document.getElementsByTagName("nav")[0];
let imagem = document.getElementsByClassName("imagem")[0]

function botaoELogoSurge(scrollPos){
	//let assinar = document.querySelector("a.assinar");
	if (scrollPos > 530) {
		assinar.style.transitionProperty = 'background-color, color, pointer-events';
		assinar.style.transitionDuration = '500ms';
		assinar.style.backgroundColor = '#0063e5';
		assinar.style.color = 'white';
		assinar.style.pointerEvents = 'auto';
		//
		nav.style.transitionProperty = 'background-color';
		nav.style.transitionDuration = '500ms';
		nav.style.backgroundColor = '#040814';
		//
		imagem.style.transitionProperty = 'opacity, pointer-events';
		imagem.style.transitionDuration = '500ms';
		imagem.style.opacity = '1';
		imagem.style.pointerEvents = 'auto';
	}else{
		assinar.style.transitionProperty = 'background-color, color, pointer-events';
		assinar.style.transitionDuration = '500ms';
		assinar.style.backgroundColor = 'transparent';
		assinar.style.color = 'transparent';
		assinar.style.pointerEvents = 'none';
		//
		nav.style.transitionProperty = 'background-color';
		nav.style.transitionDuration = '500ms';
		nav.style.backgroundColor = 'transparent';
		//
		imagem.style.transitionProperty = 'opacity, pointer-events';
		imagem.style.transitionDuration = '500ms';
		imagem.style.opacity = '0';
		imagem.style.pointerEvents = 'none';
		console.log()
		console.log()
	}
}

document.addEventListener('scroll', function(){
	posicaoDoMouse = window.scrollY;
	botaoELogoSurge(posicaoDoMouse);
})