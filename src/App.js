import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { API_KEY } from './constants.js'
import WeatherBox from './components/WeatherBox.js'
import WeatherButton from './components/WeatherButton.js'
import ClipLoader from "react-spinners/ClipLoader"

const App = () => {
  const [ weather, setWeather ]= useState(null)
  const cities =['Paris','New york','Boston', 'Seoul']
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)

  const getCurrentLocation = () => {
  
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude

      getWeatherByCurrentLocation(lat, lon)

    })
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      let response = await fetch(url)
      let data = await response.json()

      console.log('data is :', data)
  }
  
  const getWeatherByCity = async(city) => {
    console.log('getting weather by city')
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    console.log('data by city', data)
    setLoading(false)
    setWeather(data)

  }

  useEffect(() => {
    if (city===''){
      console.log('mj no city')
      getCurrentLocation()
      
    }
    else{
      getWeatherByCity(city)
    }
  }, [city]) // when []is empty, it activates as soon as it the App renders. 


  return (
    <div>
        {loading ? (
        <div className='container'>
          <ClipLoader color='blue' loading={loading} size={150}></ClipLoader> 
        </div>) :
        (
        <div className='container'>
          <WeatherBox weather={weather}/>
          <WeatherButton cities={cities} setCity={setCity}/>
          
        </div>
        )}
        
        
      <div>

      </div>
    </div>

    
  );
}

export default App;
