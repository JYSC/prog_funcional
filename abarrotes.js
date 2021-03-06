class Producto{
  constructor(id='0', clasificacion=" ", precio ='0',  existencia='0', item=" ",  existencia_maxima='0',existencia_minima='0'){
    this.id = id;
    this.clasificacion = clasificacion;
    this.precio = precio;
    this.existencia = existencia;
    this.item = item;
    this.existencia_maxima =existencia_maxima; 
    this.existencia_minima =existencia_minima;
  }
}
class Abarrotes{
  constructor(lista_productos){
    this.lista_productos = lista_productos;
  }
  productosExistencia_mayor(valor){
      return this.lista_productos.filter(producto => producto.existencia > valor);
  }
  productosExistencia_menor(valor){
    return this.lista_productos.filter(producto => producto.existencia < valor);
  }
  productosm_clasificacion(clasificacion, precio){
      return this.lista_productos.filter( producto => producto.precio > precio & producto.clasificacion === clasificacion);
  }
  productos_ePrecio(x,y){
      return this.lista_productos.filter(producto => producto.precio > x & producto.precio < y);
  }
  productosmm_clasificacion(clasificacion){
      return this.lista_productos.filter(producto => producto.clasificacion === clasificacion);
  }
}

let lista_productos=[];
lista_productos.push(new Producto(1,"frituras",  20 ,  30,"sabritas limon", 50, 20));
lista_productos.push(new Producto(2,"frituras",  21 ,  40,"chips fuego", 50, 15));
lista_productos.push(new Producto(3,"lacteos",  22 ,  50,"queso", 500, 15));
lista_productos.push(new Producto(4,"lacteos",  23 ,  60,"crema", 500, 15));
lista_productos.push(new Producto(5,"higiene",  24 ,  50,"shampoo", 500, 15));
lista_productos.push(new Producto(6,"frituras",  25 ,  40,"palomitas", 500, 15));
lista_productos.push(new Producto(7,"verduras",  26 ,  30,"limon", 500, 15));
lista_productos.push(new Producto(8,"futas",  27 ,  20,"fresas", 50, 20));
lista_productos.push(new Producto(9,"utencilios cocina", 28 , 25, "molde hielos", 500, 30));
lista_productos.push(new Producto(10,"dulceria", 28 ,  30,"gomitas", 500, 30));

lista_productos.push(new Producto(11,"verduras",  10 ,  31,"apio", 500, 30));
lista_productos.push(new Producto(12,"verduras",  11 ,  32,"papa", 500, 30));
lista_productos.push(new Producto(13,"verduras",  12 ,  32,"aguacate", 500, 40));
lista_productos.push(new Producto(14,"condimento",  12 ,  33,"pimienta-limon", 500, 50));
lista_productos.push(new Producto(15,"condimento",  14 ,  34,"comino", 500, 50));
lista_productos.push(new Producto(16,"verduras",  15 ,  35,"tomate", 500, 50));
lista_productos.push(new Producto(17,"verduras",  17 ,  35,"jalape??o", 500, 50));
lista_productos.push(new Producto(18,"verduras",  19 ,  36,"ajo", 500, 50));
lista_productos.push(new Producto(19,"verduras",  20, 30,"lechuga", 500, 20));
lista_productos.push(new Producto(20,"verduras",  8 ,  50,"pepino", 500, 20));

let i = new Abarrotes_b(lista-productos);


console.log("1. N??mero de productos con existencia mayor a 20.");
console.log(i.productosExistencia_mayor(20))
console.log("");

console.log("2. N??mero de productos con existencia menos a 15.");
console.log(i. productosExistencia_menor(15))
console.log("");

console.log("3. Lista de productos con la misma clasificaci??n y precio mayor 15.50.");
console.log(i.productosm_clasificacion("Fruta", 15.50))
console.log("");

console.log("4. Lista de productos con precio mayor a 20.30 y menor a 45.00.");
console.log(i.productos_ePrecio(20.30, 45.00))
console.log("");

console.log("5. N??mero de productos agrupados por su clasificaci??n.");
console.log(i.productosmm_clasificacion("Carnes"))
console.log("");
