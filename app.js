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

      $('#pokemon_species').html(".$pokemon_species.(data)")
      console.log(data.pokemon_species);

      $('#types').html(".$types.(data)")
      console.log(data.types);
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
