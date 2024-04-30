import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    getLocation()
  }, []) // when []is empty, it activates as soon as it the App renders. 

  const x = document.getElementById("demo");

  const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      let latitude = position.coords.latitude
      let longitude = position.coords.longitude

    });
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

  return (
    <div className="App">
        
    </div>
  );
}

export default App;
