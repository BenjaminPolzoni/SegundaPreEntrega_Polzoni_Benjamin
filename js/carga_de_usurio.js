/*
    Crear un programa que me permita cargar productos por teclado utilizando arrays y objetos y sus respectivos elementos.
    La idea es que este prgrama sea lo mas cercano a lo que yo deberia relizar para la carga de productos en mi programa de la peluqueria asi que tomar en cuenta todas las carcteristicas que podrian llegar a servir. 

    1- Deberas hacer que la carga de objetos este dividida por categoria.
    2- Deberas incluir un sistema de busqueda por categoria 
    3- Deberas incluir una opcion que te permita actualizar algun parametro o agregarlo
*/

console.log('Bien venido al progrma.')

// Inicializacion de las clases
class producto{
    constructor(categoria, nombre, precio, marca){
        this.categoria = categoria,
        this.nombre = nombre,
        this.precio = precio,
        this.marca = marca
    }
    
    cambiar_precio(nuevoPrecio){
        this.precio = nuevoPrecio
    }
}

// Inicializacion de todas las funciones
function mostrar_opciones(){
    console.log('Ingrese "1" para cargar un nuevo procucto')
    console.log('Ingrese "2" para mostrar los productos')
    console.log('Ingrese "3" para filtrar por categoria')
    console.log('Ingrese "4" para actualizar el precio de algun producto')
    console.log('Ingrese "5" para finalizar')
}

// Inicializacion de las variables a utilizar 
const productos = []
let opcion = 0

mostrar_opciones()
while(opcion != 5){

    // Pedimos que se ingrese la opcion
    opcion = parseInt(prompt('Ingrese una opcion (Con "5" finaliza)'))
    switch(opcion){

        case 1: // Cargar productos

            alert('Usted eligió la primera opcion')
            let mismaCat = prompt('Desea cargar todos productos de la misma categoria? ("1" =  si ; "2" = no)')
            let catDeProd = 0

            if(mismaCat == 1){
                catDeProd = prompt('Ingrese la categoria de los prodcutos que desea cargar')
                mismaCat = true
            }else{
                mismaCat = false
            }
            const Cargar = parseInt(prompt('Ingrese la cantidad de elementos que desea ingresar'))

            // Ciclo for donde cada vuelta se cargara un nuevo element
            for (let i = 0; i < Cargar; i++){
                
                
                if (mismaCat){ // Si quiero que todos mis elementos sean de la misma categoria se ejecutara este if
                    const categoria = catDeProd
                    const nombre = prompt('Ingrese el nombre del producto')
                    const precio = parseInt(prompt('Ingrese el precio del producto'))
                    const marca = prompt('Ingrese la marca del producto')
                    
                    const crearNuevoProducto = new producto(categoria, nombre, precio, marca)
                    productos.push(crearNuevoProducto)

                }else{// Si no son de la misma categoria se ejecutara este else
                    const categoria = prompt('Ingrese la categoria del producto')
                    const nombre = prompt('Ingrese el nombre del producto')
                    const precio = parseInt(prompt('Ingrese el precio del producto'))
                    const marca = prompt('Ingrese la marca del producto')

                    const crearNuevoProducto = new producto(categoria, nombre, precio, marca)
                    productos.push(crearNuevoProducto)
                }
            }
            break;

        case 2: // Mostrar productos

            alert('Usted eligió la segunda opcion')
            console.log('-------------------------------------')
            productos.forEach((elemento) =>{
                console.log(elemento)
            })
            break;
        case 3:// Filtrar por categoría

            alert('Usted eligio la tercera opcion')
            const opcionFiltro = prompt('Ingrese por que categoria desea realizar la busqueda: ')

            const arrayFiltrado = productos.filter((elemento) => {
                return elemento.categoria.includes(opcionFiltro);
            })
            arrayFiltrado.forEach((elemento) => {
                console.log(elemento)
            })
            break;

        case 4:// Actualizar precio

            alert('Usted eligio la cuarta opcion')
            console.log('-------------------------------------')
            let nombreExiste = false
            const nomProducto = prompt('Ingrese el nombre del producto al que quiere actualizar el precio')
            productos.forEach((elemento) =>{
                if(elemento.nombre === nomProducto){
                    elemento.cambiar_precio(parseInt(prompt('ingrese el nuevo precio')))
                    nombreExiste = true
                }
            })
            if(!nombreExiste){
                alert('No existe un producto con el nombre ingresado!!')
            }
            break;

        case 5:// Finalizar
            alert('Ha finalizado el programa')
            break;

        default: // Opción no válida
            alert('Por favor ingrese una opcion valida')
    }
}