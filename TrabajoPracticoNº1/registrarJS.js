window.addEventListener("load",validarBoton);
function validarBoton() {

	var boton = document.querySelectorAll("input[type='submit']");
	for (var i = 0; i < boton.length; i++) {
		boton[i].addEventListener("click",validarUsuarioYContraseña);
	}
}

function validarUsuarioYContraseña(event){
	var user = document.querySelector("input[type='text']").value;
	var pass = document.querySelectorAll("input[type='password']");
	var mail = document.querySelector("input[type='email']").value;
	var check = document.querySelector("input[type='checkbox']");
	var vacio = document.getElementById("error");
	
	
	var expresionR=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!-*\s).{6,12}$/;
	var resultado = expresionR.test(pass[0].value);
	var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	var resultadoE = emailRegex.test(mail);
	var cont = 0;
	vacio.innerHTML = "";
	for (var i=0; i<user.length; i++){
		if (user[i]==" "){
			cont=2;
		}
	}
	if (user == "" || pass[0].value == "" || pass[1].value == "" || mail ==""){
			vacio.innerHTML += "<p>Los campos no pueden ser vacios</p>";
			cont=1;
	}
	
	else {
		if (cont == 2){
		vacio.innerHTML += "<p> El usuario no puede contener espacio en blanco</p>";
		event.preventDefault();
		cont = 1;
		}
		
		if (pass[0].value.indexOf(user) >-1){
			vacio.innerHTML += "<p>El usuario no puede formar parte de la contraseña</p>";
			cont=1;
		}
		
		if (resultado != true){
			vacio.innerHTML += "<p>La clave debe tener como minimo de 6 caracteres, una mayuscula y una minuscula</p>";
			cont=1;
			}
		if (pass[0].value != pass[1].value){
			vacio.innerHTML += "<p>Los campos Clave y Confirmar Clave son distintos. Para registrarse los campos tiene que tener el mismo valor</p>";
			cont=1;
		}
		if (resultadoE != true){
			vacio.innerHTML += "<p>El e-mail ingresado es invalido</p>";
			cont=1;
		}
		if (check.checked == false){
			vacio.innerHTML += "<p>Los terminos de uso deben ser aceptados</p>";
			cont=1;
		}
	}
	if (cont == 1) {
		event.preventDefault();
	}
}
