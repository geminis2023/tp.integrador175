
//(funtion() {
//    let formulario = document.getElementsByName("formulario")[0];
//       elementos = formulario.elements;
//        boton = document.getElementById("btn");
//
 //   let validarNombre = function(e){
 //       if (formulario.nombre.value == 0) { 
  //         alert("Completa el campo nombre");
 //          e.preventDefault(); 
//        }
 //   } ;  
    
 //   let validarRadio = function(e) {
 //       if (formulario.gender[0].checked == true || formulario.gender[1].checked == true||
  //          formulario.gender[2].checkedd == true) {
    
 //   }   else{
 //       alert("Completa el campo gènero");
 //       e.preventDefault(); 
 //   } 
//};    
//let validarEmail = function(e) {

        if (formulario.email == 0) {
            alert("Complete el campo email");
            e.preventDefault();
        }
//};

 //   let validar = function(e) {
 //           validarNombre(e);
 //           validarRadio(e);
 //           validarEmail(e);
 //   };

 //   formulario.addEventListener("submit",(e)=> {
 //       e.preventDefault();
       
 //   });

//})

function validar(){
let nombre, apellido, direccion, ciudad, codigoPostal, telefono, fechaDeNacimiento, email, expresion;
nombre = document.getElementById("nombre").value;
apellido = document.getElementById("apellido").value;
direccion = document.getElementById("direccion").value;
ciudad = document.getElementById("ciudad").value;
codigoPostal = document.getElementById("codigoPostal").value;
telefono = document.getElementById("telefono").value;
fechaDeNacimiento = document.getElementById("fechaDeNacimieneto").value;
email = document.getElementById("email").value;

expresion = /\w+@\w+\.+[a-z]/;

if(nombre==="" || apellido === "" || direccion === "" || ciudad === "" || codigoPostal === "" || telefono === "" || email === ""){
    alert("Todos los campos son obligatorios");
return false;
}
else if(!expresion.test(email)) {
    alert("El correo no es válido");
}
else if(isNaN(telefono)) {
    alert("El teléfono ingresado no es un número");
    return false;
}

}