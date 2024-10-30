const input = document.querySelector('#city-name')
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

async function fetchWeather(cityName) {
   try {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
    const data = await res.json()
    // console.log("CityName",data[0].name)
    lat = data[0].lat
    lon = data[0].lon

    const res1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const data1 = await res1.json()
    console.log(data1)      
    bindWeather(data1)
   } catch(e) {
        alert(`Input city is not exists! ,change another city ERROR:${e}`)
   }
}

function bindWeather(data1) {
    const TodayDate = new Date((data1.dt)*1000).toLocaleString()

    const weatherClone = weatherTemplate.content.cloneNode(true)
    const cityNameEle = weatherClone.getElementById('cityName')
    const date = weatherClone.getElementById('date')
    const temperature= weatherClone.getElementById('temperature')
    const description = weatherClone.getElementById('description')
    const humidityPercentage = weatherClone.getElementById('humidityPercentage')
    const windSpeed = weatherClone.getElementById('windSpeed')
    const dataHeader = weatherClone.getElementById('data')

    dataHeader.innerText="Today's weather is 👇"
    date.innerText =`Date: ${TodayDate}`
    cityNameEle.innerText =`City Name: ${cityName}`
    temperature.innerText =`Temperature: ${data1.main.temp -273.15}° Celcius`

    const iconurl = "http://openweathermap.org/img/w/" + data1.weather[0].icon + ".png";
    description.innerHTML =`Description: ${data1.weather[0].description} <img class="inline-block" src="${iconurl}" alt="weather icon">`
    humidityPercentage.innerText =`Humidity: ${data1.main.humidity}%`
    windSpeed.innerText =`Wind Speed: ${data1.wind.speed} meter/sec` 
    weatherDetail.appendChild(weatherClone)
    forecastWeather()
}

async function forecastWeather() {
    // console.log(lat,lon)
    try {
        const res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data2 = await res2.json()
        // console.log(data2)

        let count=1
        for (let i=7; i<data2.list.length; i+=8) {
            const weatherClone = weatherTemplate.content.cloneNode(true)
            const dataHeader = weatherClone.getElementById('data')
            const forcastDate = weatherClone.getElementById('date')
            const temperature= weatherClone.getElementById('temperature')
            const description = weatherClone.getElementById('description')

            dataHeader.innerText=`Day ${count} expected weather is 👇`
            forcastDate.innerHTML = `Date: ${data2.list[i].dt_txt}`
            temperature.innerHTML = `Expected Temperature: ${data2.list[i].main.temp - 273.15}° Celcius`

            const iconurl = "http://openweathermap.org/img/w/" + data2.list[i].weather[0].icon + ".png";
            description.innerHTML = `Description: ${data2.list[i].weather[0].description}<img class="inline-block" src="${iconurl}" alt="weather icon">`
          
            weatherDetail.appendChild(weatherClone)
            count++
        }
    } catch(e) {
        // weatherDetail.innerText=`${e}`
        alert(e)
   }
   
}