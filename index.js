
const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);
// p.name[0] obtenemos el primer caracter de esa cadena de texto, es decir, el nombre del pokemon
// p representa un pokemon en el array pokemon

const pkmnIds = pokemon.map( p => p.id )
console.log(pkmnIds);


// Id divisible por 3
const idDivTres = pokemon.filter(p => p.id % 3 === 0);
console.log(idDivTres);

// Del tipo fuego
const tipoFuego = pokemon.filter(p => p.types.includes("fire"));
console.log(tipoFuego);


// Que tienen más de un tipo
const mayorDosTipos = pokemon.filter(p => p.types.length>1);
console.log(mayorDosTipos);


// Solo nombre de Pokemon
const nombrePkmn = pokemon.map(p => p.name);
console.log(nombrePkmn);

// Nombres de pokemon con un id>99
const idMayor = pokemon.filter(p => p.id > 99);
console.log(idMayor);

// Los nombres de los pokemon de tipo "veneno"
const tipoVeneno = pokemon.filter(p => p.types.includes("poison")).map(p => p.name);
console.log(tipoVeneno);

// Tipo volador
const tipoVolador = pokemon.filter(p => p.types[1] === `flying`).map(p => p.types[0]);
console.log(tipoVolador);

// Recuento de la cantidad de pokémon que son de tipo "normal"
const tipoNormal = pokemon.filter(p => p.types.includes("normal")).length;
console.log(tipoNormal);