import './App.css';
import Sidebar from './component/Sidebar.js'
import React from 'react';
import { useEffect, useState } from 'react';
import { API_KEY } from './constants.js'
import WeatherBox from './component/WeatherBox.js'
import WeatherButton from './component/WeatherButton.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import ClipLoader from "react-spinners/ClipLoader"
import Home from './pages/Home'
import WaterTemperature from './pages/WaterTemperature'
import Weather from './pages/Weather'
import { Routes, Route, Navigate } from 'react-router-dom'

const cities =['Paris','New york','Boston', 'Seoul']

const App = () => {

  const [weather, setWeather]= useState(null)
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [apiError, setAPIError] = useState("")
  
  const getWeatherByCurrentLocation = async(lat, lon) => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      let response = await fetch(url)
      let data = await response.json()
  
      setWeather(data)
      setLoading(false)
    } catch (err){
      setAPIError(err.message)
      setLoading(false)
    }
    
}

  const getCurrentLocation = () => {
  
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude

      getWeatherByCurrentLocation(lat, lon)

    })
  }
  const handleCityChange = (city) => {
    if (city === "current"){
      setCity(null)
    }else{
      setCity(city)
    }
  }
  
  
  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    let response = await fetch(url)
    let data = await response.json()
    
    setWeather(data)
    setLoading(false)

  }

  useEffect(() => {
    if (city===''){
      setLoading(true)
      getCurrentLocation()
    }
    else{
      getWeatherByCity(city)
    }
  }, [city]) // when []is empty, it activates as soon as it the App renders. 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/water_temperature' element={<WaterTemperature />} />
      </Routes>
      <div className='sidebar'>
        <Sidebar />
      </div>
      { loading ? (
        <div className='container'>
          <ClipLoader color='blue' loading={loading} size={150}></ClipLoader> 
        </div>) : !apiError ? (
          <div className='container'>
            <WeatherBox weather={weather}/>
            <WeatherButton cities={cities} selectedCity={city} handleCityChange={handleCityChange}/>
          
          </div>
        ) : (apiError)
      }  
        
      <div>

      </div>
    </div>

    
  );
}

export default App;
