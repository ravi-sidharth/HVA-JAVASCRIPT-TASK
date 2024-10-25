const input = document.querySelector('input')
const formSubmit = document.querySelector('#formSubmit')
const apiKey = '84c8a6982ed02cee6d19c6df55534ff2'
let cityName =""


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
    console.log(data)
    console.log("CityName",data[0].name)
    
    let lat = data[0].lat
    let lon = data[0].lon
    
    const res1 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    // const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const data1 = await res1.json()
    console.log(data1)      
    bindData(data1)
   } catch(e) {
        weatherDetail.innerText=`Error Input city is not exits!`
   }
}

function bindData(data1) {
    console.log(data1)
    // console.log("Humidity",data1.list[0].main.humidity)
    // console.log("Temperature",data1.list[0].main.temp)
    // console.log("Description",data1.list[0].weather[0].description)
    // console.log("Wind Speed",data1.list[0].wind.speed)


    const weatherClone = weatherTemplate.content.cloneNode(true)

    const cityNameEle = weatherClone.getElementById('cityName')
    const date = weatherClone.getElementById('date')
    const temperature= weatherClone.getElementById('temperature')
    const description = weatherClone.getElementById('description')
    const humadityPercentage = weatherClone.getElementById('humadityPercentage')
    const windSpeed = weatherClone.getElementById('windSpeed')
   
    // weatherDetail.innerText="This is Current Weather Data"
    date.innerText =`Date: Now I'm not getting how to do ${data1.timezone}`
    cityNameEle.innerText =`City Name: ${cityName}`
    temperature.innerText =`Temperature: ${data1.main.temp}`
    description.innerText =`Description: ${data1.weather[0].description}`
    humadityPercentage.innerText =`Humidity: ${data1.main.humidity}`
    windSpeed.innerText =`Wind Speep: ${data1.wind.speed}` 

    weatherDetail.appendChild(weatherClone)
}