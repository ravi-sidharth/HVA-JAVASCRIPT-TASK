const input = document.querySelector('input')
const button = document.querySelector('button')



button.addEventListener('click', () => {
    const word = input.value
    fetchData(word)
})

async function fetchData(word) {
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const data = await res.json()
        console.log(data)
        showResult(data)
    } catch (e) {
        console.log("ERROR: ", e)

    }


}



function showResult(data) {
    let wordMeaning = document.querySelector('#word-meaning')
    let templateWordMeaning = document.querySelector('#template-word-meaning')

    wordMeaning.innerHTML=""
    const cloneWord = templateWordMeaning.content.cloneNode(true)

    const definition = cloneWord.getElementById('definition')
    const partsOfSpeech = cloneWord.getElementById('partsOfSpeech')
    const example = cloneWord.getElementById('example')
    const synonyms = cloneWord.getElementById('synonyms')
    const antonyms = cloneWord.getElementById('antonyms')
    definition.innerHTML =`Definition: ${data[0].meanings[0].definitions[0].definition}`
    partsOfSpeech.innerText = `Part Of Speech: ${data[0].meanings[0].partOfSpeech}`
    if (data[0]?.meanings[0]?.definitions[0]?.example) {
         example.innerText = `Example: ${data[0].meanings[0].definitions[0].example}`
    } else{
        example.innerText="" 
    } 
    if (data[0]?.meanings[0]?.antonyms && data[0]?.meanings[0]?.antonyms.length>0) {
        synonyms.innerText = `Synonyms: ${data[0].meanings[0].antonyms}`
    } else {
        synonyms.innerText=""
    }

    if (data[0].meanings[0].synonyms && data[0].meanings[0].synonyms.length>0) {
        antonyms.innerText = `Antonyms: ${data[0].meanings[0].synonyms}`
    } else{
        antonyms.innerText=""
    }

    wordMeaning.appendChild(cloneWord)
}

