/* alert("bienvenidos a la clase del pela")

Swal.fire({
    icon: "warning",
    title: "me parece que la cagamos",
    text:"en este momento no podemos acceder al contenido, porque david esta buscando a la shisha",
}) */

/* let boton = document.getElementById("boton")

boton.addEventListener("click", ()=>{
    const { value: fruit } =  Swal.fire({
  title: "Select field validation",
  input: "select",
  inputOptions: {
    Fruits: {
      apples: "Apples",
      bananas: "Bananas",
      grapes: "Grapes",
      oranges: "Oranges"
    },
    Vegetables: {
      potato: "Potato",
      broccoli: "Broccoli",
      carrot: "Carrot"
    },
    icecream: "Ice cream"
  },
  inputPlaceholder: "Select a fruit",
  showCancelButton: true,
  inputValidator: (value) => {
    return new Promise((resolve) => {
      if (value === "oranges") {
        resolve();
      } else {
        resolve("You need to select oranges :)");
      }
    });
  }
});
if (fruit) {
  Swal.fire(`You selected: ${fruit}`);
}
}) */


/* const tiempo = new Date()
let time = tiempo.getFullYear
console.log(time)
 */

/* 
const dataTime = luxon.dataTime;
const now = dataTime.now()
console.log(now)

 */


/* 
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json =>{

      }) */



      let URL = 'https://pokeapi.co/api/v2/pokemon?limit=3'

  const pokemonContainer = document.getElementById('pokemon-container');

fetch(URL)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;

    pokemons.forEach(   (pokemon) => {
      fetch(pokemon.url)
        .then(response => response.json())
        .then(pokemonData => {
          const pokemonElement = document.createElement('div');
          pokemonElement.innerHTML = `
            <h2>${pokemonData.name}</h2>
            <img src="${pokemonData.sprites.back_default}" >
            <p>Tipo: ${pokemonData.types.map(type => type.type.name).join(', ')}</p>
          `;
          pokemonContainer.appendChild(pokemonElement);
        }).catch(error => {
            console.error('Ha ocurrido un error al obtener los datos del Pokémon:', error);
          });
      });
    }).catch(error =>{
        console.error("ocurrio un error blablabal")
    }   );