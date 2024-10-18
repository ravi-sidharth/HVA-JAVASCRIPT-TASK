const input = document.querySelector('input')
const button = document.querySelector('button')

const definition = document.getElementById('definition')
const partsOfSpeech = document.getElementById('partsOfSpeech')
const example = document.getElementById('example')
const synonyms = document.getElementById('synonyms')
const antonyms = document.getElementById('antonyms')

button.addEventListener('click',()=> {
    const word = input.value 
    fetchData(word)
})

async function fetchData(word) {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await res.json()
    console.log(data)
}