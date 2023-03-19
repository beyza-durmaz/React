import React, { useEffect, useState } from 'react'
import { useWeather } from '../Context/WeatherContext';

function Card() {
  const { weather, current } = useWeather();
  const [day, setDay] = useState("");
  const daysOfWeek = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Pzr"];

  useEffect(() => {
    setDay(daysOfWeek)
  }, [weather])

  const icon_src = `http://openweathermap.org/img/w/`

  return (
    <div className='card'>
      <>
        {
          weather && weather.map((item, id) => item.weather.map(weather => 
            <div key={weather.id} className="box">
              <h2 className='title'>{day[id]}</h2>
              <img src={icon_src + weather.icon + ".png"} alt="" className='img' />
              <br />
              <br />
              <h5>{weather.description}</h5>
              <h5 className='temp'>{current.temp_min} °C <span>{current.temp_max} °C</span></h5>
            </div>
          ))
        }
      </>
    </div>
  )
}

export default Card