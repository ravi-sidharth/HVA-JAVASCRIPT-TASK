const input = document.querySelector('input')
const formSubmit = document.querySelector('#formSubmit')
const apiKey = '84c8a6982ed02cee6d19c6df55534ff2'

formSubmit.addEventListener('submit',(event)=> {
    event.preventDefault()

    cityName = input.value 
    fetchWeather("Delhi")
})

async function fetchWeather(city) {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=84c8a6982ed02cee6d19c6df55534ff2`)
    const data = await res.json()
    console.log(data)

    let lat = data.lat
    let lon = data.lon

    const res1 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=28.6517178&lon=77.2219388&appid=84c8a6982ed02cee6d19c6df55534ff2`)
    const data1 = await res1.json()
    console.log(data1)      
    bindData(res1)
}

function bindData(data1) {
    const weatherDetail =document.getElementById('weather-detail')
    const weatherTemplate =document.getElementById('weather-template')

    const weatherClone = weatherTemplate.content.cloneNode(true)
    const cityName = weatherClone.getElementById('cityName')
    const date = weatherClone.getElementById('cityName')
    const temperature= weatherClone.getElementById('cityName')
    const description = weatherClone.getElementById('cityName')
    const humadityPercentage = weatherClone.getElementById('cityName')
    const windSpeed = weatherClone.getElementById('cityName')

}