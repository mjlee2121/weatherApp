import React from 'react'
import Button from 'react-bootstrap/Button';

const WeatherButton = ({cities, setCity}) => {

  return (
    <div>
        <div>
        <Button variant="warning">Current Location</Button>

        {cities.map((item, index)=>
          (<Button variant='warning' key={index} onClick={()=>setCity(item)}>{item}</Button>)
        )}
        </div>
    </div>
  )
}

export default WeatherButton