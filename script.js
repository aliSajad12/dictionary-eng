let wordValue = document.getElementById('wordValue');
const loader = document.getElementById('loader');
let accessURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const meaningValue = document.getElementById('wordMean');
const audio = document.getElementById('audio');

async function fetchAPI (word){

    try {
        loader.style.display = 'block';
        loader.innerText = `Searching for '${word}'`;
        meaningValue.style.display = 'none';
        
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res)=>res.json());

        loader.style.display = 'none';
        meaningValue.style.display = 'block';
        meaningValue.innerText = result[0].meanings[0].definitions[0].definition;

        audio.style.display = 'block';
        audio.setAttribute('src', `${result[0].phonetics[0].audio}`)
        console.log(result)
    } catch (error) {
        console.log(error);
    }


}

wordValue.addEventListener('keyup', (e)=>{
    if(e.target.value && e.key === 'Enter'){
        fetchAPI(e.target.value);
    }
})