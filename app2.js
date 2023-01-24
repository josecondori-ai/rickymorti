// const datos={
//     nombre:'julio',
//     apellido:'lopez',
//     edad:45
// }

//asincronismo
const URLbase='https://rickandmortyapi.com/api/'
const endPointPersonajes='character'



const contenedor=document.getElementById('contenedor')
const anterior=document.getElementById('anterior')
const siguiente=document.getElementById('siguiente')

// let pagina=2

const getPersonajes = (id) => {
console.log(id)
    fetch(`${id}`)
    .then(response=>response.json())
    .then(data=>mostrarPersonajes(data.results))
    .catch(error=>console.log(error))
    .finally(()=>console.log('finalizo la conexion a la api'))

 }

getPersonajes()


const mostrarPersonajes = (personajes) => {

    for(let personaje of personajes){
        
        contenedor.innerHTML+=`
        <div class="card m-3" style="width: 18rem;">
        <div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">${personaje.status}</p>
          <p class="card-text">${personaje.gender}</p>
         
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>`
    }

 }


 const siguientePagina = (parametro) => { 
    contenedor.innerHTML=``
    fetch(`${URLbase}${endPointPersonajes}`)
    .then(response=>response.json())
    .then(data=>getPersonajes(data.info.next))
    .catch(error=>console.log(error))
    .finally(()=>console.log('finalizo la conexion a la api'))

 }

 siguiente.addEventListener('click',siguientePagina)

//get==>traer o obtener

//post==> enviar y guardar
//put==> modificar
//delete==> borrar




