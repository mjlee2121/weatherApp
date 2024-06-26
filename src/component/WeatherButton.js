import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({cities, selectedCity, handleCityChange}) => {

  return (
    <div>
        <div className="menu-container">
          <Button variant={`${selectedCity === null ? "outline-warning" : "warning"}`} onClick={()=>handleCityChange("current")}>
            Current Location
          </Button>

          {cities.map((city)=>
            (<Button variant={`${selectedCity === city ? "outline-warning" : "warning"}`} onClick={()=>handleCityChange(city)}>
              {city} 
            </Button>)
          )}
        </div>
    </div>
  )
}

export default WeatherButton