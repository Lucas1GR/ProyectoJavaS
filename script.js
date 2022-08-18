function solicitarNombre(){
    let nombreIngresado = prompt ("ingrese su nombre")
    console.log("Su nombre es "+ nombreIngresado)
}
 solicitarNombre()
 
let numeroCompra= prompt("Es tu primera compra por la página? si/no")
    if (numeroCompra == "si"){
    alert("Genial!! podes acceder a un código único de descuento! Código=PRIMERA");
}   else {
    alert("Gracias por elegirnos nuevamente!! Nos alegra muchisimo :)");
}
//constructor obj cursos
function ofertas (precio, tipo, color, material){
this.precio = precio;
this.tipo = tipo;
this.color = color;
this.material = material;
}
const kitana = new ofertas("2800","bandolera simple","rojo","cuero ecológico");
const eva = new ofertas("3500","bandolera doble","suela","cuero ecológico");
const roma = new ofertas("4000","mochila","negro clásico","cuero ecológico");
console.log(kitana);
console.log(eva);
console.log(roma);

// Arrays
let producto =["producto1","producto2","producto3","producto4"]
console.log(producto);
console.log(producto);

//Descuento 15% off en la compra
function valorProductos(precio,descuento){
    let precioFinal = precio - (precio*descuento/100);
    return precioFinal;
}
let precio= parseInt(prompt("Ingrese el total de su compra para acceder al descuento"));
let valorVenta =  valorProductos(precio,15);
alert("Total de la compra con el 15% off"+ " " + valorVenta);