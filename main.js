let nombre = prompt("Ingrese su nombre para poder continuar");
 alert("Hola " +
  nombre +  
  " Estas ingresanto a tu Petshop favorito");

function tuMascota() {
    mascota = prompt( `Que mascota tienes \n1: perro \n2: gato \n3: pez \n4: roedor`
    );

    if (mascota === "1") {
      alert("Tu mascota es un perro, encuentra los productos que tenemos para vos en el siguiente paso") ;
    } else if (mascota === "2") {
      alert("Tu mascota es un gato")
    } else if (mascota === "3") {
      alert("Tu mascota es un pez")
    } else if (mascota === "4") {
      alert("Tu mascota es un roedor")
    }

    productos()

}
function productos() {
    eleccion = prompt(`Elige tu opcion deseada \n 1: Juguetes y mordedores \n 2: Alimento balanceado \n 3: Platos y bebederos \n 4: Bandejas Sanitarias `);
    if (eleccion === "1") {
        alert("En breves minutos un asesor se pondra en contacto, para mostrarte todas las opciones de juguetes y mordederos, que tenemos para vos") ;
      } else if (eleccion === "2") {
        alert("En breves minutos un asesor se pondra en contacto, para mostrarte todas las opciones de Alimentos, que tenemos para vos")
      } else if (eleccion === "3") {
        alert("En breves minutos un asesor se pondra en contacto, para mostrarte todas las opciones de Platos y bebederos, que tenemos para vos")
      } else if (eleccion === "4") {
        alert("En breves minutos un asesor se pondra en contacto, para mostrarte todas las opciones de Bandejas sanitarias, que tenemos para vos")
    };
}
let mascota;
tuMascota()

pregunta = prompt("¿Podemos ayudarlo/a en algo mas?")
while(pregunta === "no") {
    alert ("Gracias por visitar nuestro sitio");
}  if (pregunta != "no") {
}


menu()
function menu (){
opcionMenu = prompt (` \n 1: Volver al menu anterior  \n 2: Volver al menu inicial \n 3: Salir `)
while (opcionMenu === "3") {
    alert ("Gracias por visitar nuestro sitio")
}   if (opcionMenu === "1") {
        productos();
}   else if (opcionMenu === "2") {
        tuMascota();  
    }

}
