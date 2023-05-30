class Productos{
  constructor(producto, precio, unidad) {
    this.producto = producto;
    this.precio = precio;
    this.unidad = unidad;
  }
}

const productos = [
  {producto: "pelota", precio: 300},
  {producto: "cuerda", precio: 900},
  {producto: "hueso de cuero", precio: 650},
  {producto: "alimento cachorro", precio: 3900},
  {producto: "alimento adulto", precio: 3700},
  {producto: "alimento adulto mayor", precio: 4200},
  {producto: "plato y bebedero simple", precio: 3500},
  {producto: "plato y bebedero metal", precio: 4500},
  {producto: "plato y bebedero inteligente", precio: 7000},
  {producto: "pasto sintetico con bandeja plastica", precio: 4500},
  {producto: "pasto sintetico con bandeja de madera", precio: 5500},
  {producto: "pasto real con bandeja de madera", precio: 7500},
 ]

 let arrayCarrito = [];

 function agregarArticulos() {
  let producto = prompt("¿Que producto desea?");
  let  precio = prompt ("Ingrese el precio");
  let unidad = prompt ("¿Cuantas unidades desea llevar?")
  const productoElegido = new Productos(producto,precio,unidad);
  arrayCarrito.push(productoElegido);
  alert("Se ha cargado un producto a su carrito");
  return menu();
 }

function verCarrito() {
  arrayCarrito.forEach((articulo) => {
    alert(`Producto: ${articulo.producto}, Precio: ${articulo.precio}`);  
  });
}
verCarrito();

function finalizarCompra() {
const total = arrayCarrito.reduce((acc, el) => acc + el.precio * el.unidad, 0)
console.log(`El total a pagar por su compra es: ${total}`)
}

finalizarCompra();

let envioGratis = productos.filter((producto) => {
	if (producto.precio >= 4000) {
		return true;
	} else {
		return false;
	}
});

function crearCliente(nombre) {
  this.nombre = nombre || prompt("Ingresa tu nombre");
  this.saludarCliente = function () {
    return `¡Hola ${this.nombre}!, Bienvenido a KIRA tu petshop favorito`;
  };
}

const cliente1 = new crearCliente();
alert(cliente1.saludarCliente());

function tuMascota() {
  mascota = prompt( `Que mascota tienes \n1: perro \n2: gato \n3: pez \n4: roedor`);
  if (mascota === "1") {
    alert("Tu mascota es un perro, encuentra los productos que tenemos para vos en el siguiente paso") ;
  } else if (mascota === "2") {
    alert("Tu mascota es un gato")
  } else if (mascota === "3") {
    alert("Tu mascota es un pez")
  } else if (mascota === "4") {
    alert("Tu mascota es un roedor")
  }
}

tuMascota();

const eleccion = prompt(`Elige tu opcion deseada \n 1: Juguetes y mordedores \n 2: Alimento balanceado \n 3: Platos y bebederos \n 4: Bandejas Sanitarias`);

while (eleccion !== "5") {
  if (eleccion === "1") {
    alert("\n 1: Pelota $300 \n 2: Cuerda $900 \n 3: Hueso de cuero $650");
    agregarArticulos();
    break
  } else if (eleccion === "2") {
    alert("\n 1: Alimento cachorro 3kg por $3900 \n 2: Alimento adulto 3kg por $3700 \n 3: Alimento adulto mayor por $4200");
    agregarArticulos();
    break
  } else if (eleccion === "3") {
    alert("\n 1: Plato y bebedero simple $3500 \n 2: Plato y bebedero metal $4500 \n 3: Plato y bebedero inteligente $7000 ");
    agregarArticulos();
    break
  } else if (eleccion === "4") {
    alert("\n 1: Pasto sintetico con bandeja plastica $4500 \n 2: Pasto sintetico con bandeja de madera $5500 \n 3: Pasto real con bandeja de madera $7500 ");
    agregarArticulos();
    break
  }
  let pregunta = prompt("¿Podemos ayudarlo/a en algo mas")
  if (pregunta === "no"){
     alert ("Gracias por visitar nuestro sitio");
    break
  };}

agregarArticulos();
menu();

function menu () {
  let opcionMenu = prompt (` \n 1: Volver al menu inicial \n 2: Salir `)
  while (opcionMenu !== "2") {
    if (opcionMenu ==="1") {
      tuMascota();
      break;
    } else {
      opcionMenu = prompt(`Opción inválida. Por favor,elige una opcioón valida.\n1: Volver al menú inicial\n2: Salir`);
    }
  }
  if (opcionMenu ==="2"){
    alert("Gracias por visitar nuestro sitio.");
  }
}