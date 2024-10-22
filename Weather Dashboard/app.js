const input = document.querySelector('input')
const formSubmit = document.querySelector('#formSubmit')
const apiKey = '84c8a6982ed02cee6d19c6df55534ff2'

formSubmit.addEventListener('submit',(event)=> {
    event.preventDefault()

    cityName = input.value 
    fetchWeather(city)
})

async function fetchWeather(city) {
    const res = await fetch(`https://openweathermap.org/api`)
    const data = await res.json()
    console.log(data)
}

function bindData(data) {
    const weatherDetail =document.getElementById('weather-detail')
    const weatherTemplate =document.getElementById('weather-template')
}