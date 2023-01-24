// const calcularAreaTriangulo = (base,altura) => {
//     // let resultado=(base*altura)/2
//     // return resultado

//     return (base*altura)/2
//  }

// console.log(calcularAreaTriangulo(5,6))

// calcularAreaTriangulo(5, 6) 
//resultado 15
//30)Definí una función removerDuplicados que tome por 
//parámetros un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.


//removerDuplicados([1, 1, 1])
//[1]

//removerDuplicados([5, 23, 8, 5, 5, 44, 23])
//[5, 23 ,8, 44]

// const removerDuplicados = (array) => { 
//     let unicos=[]
//     for (let i=0;i<array.length;i++){
//         if(!unicos.includes(array[i])){
//             unicos.push(array[i])
//     }

//     }
//     return unicos
// }

// console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23]))

// function removerDuplicados(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index)
// }


//)Definí una función separar que tome por parámetro un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro.

//separar('🐶🐱🐶🐱🐱🐶🐶') 
//'🐶🐶🐶🐶🐱🐱🐱'


// const separar = (animales) => {
//     let perro=''
//     let gato=''
    
//     for(let animal of animales){
//         animal=='🐶'? perro+=animal : gato+=animal

//     }
    
//     return perro+gato
//  }

// console.log(separar('🐱🐶🐱🐶🐱🐱🐶🐶🐱'))

// let nombre='roberto'
// let nombre2='julio'

// console.log(`${nombre}
// ${nombre2}
// `)

// Necesitamos crear un contador . Para esto necesitaremos
// un span que muestre un número (que comience en 0);
// 6 botones con los siguientes valores: : -1, +1, -5, +5, -10, +10;
// al clickear un botón se tiene que actualizar el valor del span sumando o restando la cantidad correspondiente.


// const numeroInicial=document.getElementById('numeroInicial')
// const btn1=document.getElementById('btn-1')
// const btn2=document.getElementById('btn-2')
// const btn3=document.getElementById('btn-3')
// const btn4=document.getElementById('btn-4')
// const btn5=document.getElementById('btn-5')
// const btn6=document.getElementById('btn-6')
// let resultado=0

// const restaUno = () => {
//    // resultado+=1
//    resultado=resultado-1
//    numeroInicial.innerText=resultado

// }

// btn1.addEventListener('click',restaUno)

// const sumaUno = () => {
//     // resultado+=1
//     resultado=resultado+1
//     numeroInicial.innerText=resultado

//  }

//  btn2.addEventListener('click',sumaUno)

//  const sumaDiez = () => {
//     // resultado+=1
//     resultado=resultado+10
//     numeroInicial.innerText=resultado

//  }

//  btn6.addEventListener('click',sumaDiez)

//41)A partir de un array de bandas queremos saber si están activas o no 

//
// `
// Nirvana no está activa
// Foo Fighters está activa desde el año 1994
// Led Zeppelin no está activa
// Queens of the Stone Age está activa desde el año 1997
// Pearl Jam está activa desde el año 1990
// `


// let bandas = [
//     { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
//     { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
//     { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
//     { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
//     { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
//   ];
  
//   const estanActivas = (info) => { 
//     let mensaje=''
//     for(let banda of info){
//        if(banda.activa){
//         mensaje+=`${banda.nombre} esta activa desde el año ${banda.fundacion}
//         `
//        }
//        else{
//         mensaje+=`${banda.nombre} no esta activa
//         `
//        }

//     } return mensaje


//   }

//   console.log(estanActivas(bandas))

// const cuadrado=document.getElementById('cuadrado') 

//  const cambiar_fondo = (e) => {
//     let rgb = [Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255)]

//     if(e.keyCode == 32) {
//         console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)       
//         document.body.style.backgroundColor= `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
//     }
// }
// document.addEventListener(`keydown`,cambiar_fondo) 

const uno=document.getElementById('uno')
const dos=document.getElementById('dos')
const tres=document.getElementById('tres')
const cuatro=document.getElementById('cuatro')
const cinco=document.getElementById('cinco')

let imagenes=document.querySelectorAll('.altura')

const agrandarImagenUno = () => {
    uno.style.height='500px'
    dos.style.height='100px'
    tres.style.height='100px'
    cuatro.style.height='100px'
    cinco.style.height='100px'
 }

 uno.addEventListener('click',agrandarImagenUno)