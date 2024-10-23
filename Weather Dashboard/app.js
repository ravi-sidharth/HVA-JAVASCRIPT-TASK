const input = document.querySelector('input')
const formSubmit = document.querySelector('#formSubmit')
const apiKey = '84c8a6982ed02cee6d19c6df55534ff2'

formSubmit.addEventListener('submit',(event)=> {
    event.preventDefault()

    cityName = input.value 
    fetchWeather(cityName)
    
})

async function fetchWeather() {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    const data = await res.json()
    console.log(data)
    console.log("CityName",data[0].name)
    let lat = data[0].lat
    // console.log(lat)
    let lon = data[0].lon
    // console.log(lon);
    
    const res1 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const data1 = await res1.json()
    console.log(data1)      
    bindData(data1)
}

function bindData(data1) {
    console.log(data1)
    console.log("Humidity",data1.list[0].main.humidity)
    console.log("Temperature",data1.list[0].main.temp)
    console.log("Description",data1.list[0].weather[0].description)
    console.log("Wind Speed",data1.list[0].wind.speed)

    const weatherDetail =document.getElementById('weather-detail')
    const weatherTemplate =document.getElementById('weather-template')

    const weatherClone = weatherTemplate.content.cloneNode(true)
    const cityName = weatherClone.getElementById('cityName')
    const date = weatherClone.getElementById('cityName')
    const temperature= weatherClone.getElementById('cityName')
    const description = weatherClone.getElementById('cityName')
    const humadityPercentage = weatherClone.getElementById('cityName')
    const windSpeed = weatherClone.getElementById('cityName')

    date.innerText =""
    cityName.innerText =""
    temperature.innerText =""
    description.innerText =""
    humadityPercentage.innerText =""
    windSpeed.innerText =""
    

}