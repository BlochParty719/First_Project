console.log("The link cables are connected");

$(() => {
      // https://www.youtube.com/watch?v=8MzrRffXMkQ&t=2919s
  $('form').on('submit', (event) => {

  event.preventDefault()

  const userInput = $('input[type = "text"]').val()

  $.ajax({
      url: "https://pokeapi.co/api/v2/generation/1",
  }).then(
    (data) => {
const pokemon_species = ["Bulbasaur", "Ivysaur", "Venusaur","Charmander","Charmeleon","Charizard",
"Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill",
"Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu",
"Raichu","Sandshrew","Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking",
"Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom",
"Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck",
"Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra",
"Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel",
"Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d",
"Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix",
"Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak",
"Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan",
"Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir",
"Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon",
"Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres",
"Dratini","Dragonair","Dragonite", "Mewtwo", "Mew"]

const types = ["Normal","Grass","Fire","Water","Electric","Rock","Ground","Psychic","Poison","Dragon",
"","","","",]

    $('#pokemon_species').html(".$pokemon_species.(data)")
    console.log(data.pokemon_species.array);
    $('#types').html(".$types.(data)")
    console.log(data.types.array);
})
  }
)
    })
$(() => {

const $openButton = $('#openModal')
const $modal = $('#modal')
const $closeButton = $('#close')

const openModal = () => {
  $modal.css('display', 'block')
}
const closeModal = () => {
  $modal.css('display', 'none')
}
$openButton.on('click', openModal)
$closeButton.on('click', closeModal)
})

// https://pokeapi.co/api/v2/pokemon/bulbasaur
// https://pokeapi.co/api/v2/pokemon/charmander
// https://pokeapi.co/api/v2/pokemon/squirtle
