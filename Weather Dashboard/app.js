const input = document.querySelector('input')
const formSubmit = document.querySelector('#formSubmit')
const apiKey = '84c8a6982ed02cee6d19c6df55534ff2'
let cityName =""
let lat =""
let lon=""


const weatherDetail =document.getElementById('weather-detail')
const weatherTemplate =document.getElementById('weather-template')

formSubmit.addEventListener('submit',(event)=> {
    event.preventDefault()

    cityName = input.value 
    fetchWeather(cityName)
    
})

async function fetchWeather() {
   try {
     const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    const data = await res.json()
    console.log("CityName",data[0].name)
    
    lat = data[0].lat
    lon = data[0].lon
    
    // const res1 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const data1 = await res1.json()
    console.log(data1)      
    bindData(data1)
   } catch(e) {
        weatherDetail.innerText=`Error Input city is not exits!`
   }
}

function bindData(data1) {
    const TodayDate = new Date((data1.timezone)*1000).toLocaleString()
    
    const weatherClone = weatherTemplate.content.cloneNode(true)
    const cityNameEle = weatherClone.getElementById('cityName')
    const date = weatherClone.getElementById('date')
    const temperature= weatherClone.getElementById('temperature')
    const description = weatherClone.getElementById('description')
    const humadityPercentage = weatherClone.getElementById('humadityPercentage')
    const windSpeed = weatherClone.getElementById('windSpeed')

    weatherDetail.innerText="This is Current Weather Data"
    date.innerText =`Date: ${TodayDate}`
    cityNameEle.innerText =`City Name: ${cityName}`
    temperature.innerText =`Temperature: ${data1.main.temp} Kelvin`
    description.innerText =`Description: ${data1.weather[0].description}`
    humadityPercentage.innerText =`Humidity: ${data1.main.humidity}%`
    windSpeed.innerText =`Wind Speep: ${data1.wind.speed} meter/sec` 
    weatherDetail.appendChild(weatherClone)
    forecast()
}

async function forecast() {
    console.log(lat,lon)
    const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}`)
    const data2 = await res2.json()
    console.log(data2)

    const weatherDetail =document.getElementById('weather-detail')
    const weatherTemplate =document.getElementById('weather-template')
    data2.list.forEach(forecastItem=> {
        const weatherClone = weatherTemplate.content.cloneNode(true)

        const forcastDate = weatherClone.getElementById('date')
        const temperature= weatherClone.getElementById('temperature')
        const description = weatherClone.getElementById('description')
        
        forcastDate.innerHTML = new Date((forecastItem.dt)*1000).toLocaleString()
        temperature.innerHTML = forecastItem.main.temp
        description.innerHTML = forecastItem.weather[0].description
        weatherDetail.appendChild(weatherClone)
    })
    
}
