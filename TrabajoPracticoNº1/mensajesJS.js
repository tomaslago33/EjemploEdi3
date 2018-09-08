window.addEventListener('load',validar);

function validar() {
	var boton = document.querySelector("input[type='button']");
	boton.addEventListener('click',validarTexto);
}

function validarTexto(event){
	var texto = document.getElementById('mensajeNuevo').value;
	var vacio = document.getElementById('error');
	var etiqueta = document.getElementById('enviar').value
	var cont = 0;
	vacio.innerHTML = "";
	if (texto.length >255){
		vacio.innerHTML += "<p>El mensaje ingresado supera los 255 caracteres. Ingrese un mensaje más corto</p>";
		cont = 1;
	}
	for (var i = 0; i < etiqueta.length; i++) {
		if (etiqueta[i] == " " || etiqueta.length >50){
			cont=2;
		}
	}
	if (cont == 2){
		vacio.innerHTML += "<p>La etiqueta no puede contener espacio en blanco o no debe superar los 50 caracteres</p>";
		cont = 1;
	}
	if (texto == ""){
		vacio.innerHTML += "<p>Debe ingresarse un texto</p>";
		cont = 1;
	}
	if (cont == 1){
		event.preventDefault();
	}

}
