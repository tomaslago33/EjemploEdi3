window.addEventListener('load',agregarEvento);

function agregarEvento() {
	var boton = document.querySelectorAll("input[type='submit']");
	for (var i = 0; i < boton.length; i++) {
		boton[i].addEventListener('click',validar);
	}
	var boton1 = document.querySelector("input[type='button']");
	boton1.addEventListener('click',function (){location.href='Registrar.html'})
}
function validar (event){

	var user = document.querySelector("input[type='text']").value;
	var pass = document.querySelector("input[type='password']").value;
	var vacio = document.getElementById("error");
	var cont = 0;

	var expresionR=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!-*\s).{6,12}$/;
	var resultado = expresionR.test(pass);
	vacio.innerHTML = "";
	
	for (var i=0; i<user.length; i++){
		if (user[i]==" "){
			cont=2;
		}
	}
	if (user == "" || pass == ""){
		vacio.innerHTML += "<p>Los campos no pueden ser vacios</p>";
		
		cont=1;
	}
		else {
			if (cont == 2){
				vacio.innerHTML += "<p> El usuario no puede contener espacio en blanco</p>";
				cont = 1;
			}

			if (pass.indexOf(user) >-1){
				vacio.innerHTML += "<p>El usuario no puede formar parte de la contraseña</p>";
				cont=1;
			}
			if (resultado != true){
				vacio.innerHTML += "<p>La clave debe tener como minimo de 6 caracteres, una mayuscula y una minuscula</p>";
				cont=1;
			}
		}

	if (cont == 1) {
		event.preventDefault();
	}
}
