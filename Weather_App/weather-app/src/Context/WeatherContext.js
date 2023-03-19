import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({children}) => {
    const [city, setCity] = useState("Bursa");
    const [weather, setWeather] = useState([]);
    const [current, setCurrent] = useState("");

    useEffect(() => {
        const key = "2912d6deb1d8181f1cf27ae9e55889ed";
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=tr&cnt=7`)
            .then(res => {
                setWeather(res.data.list)
                res.data.list.map(item => setCurrent(item.main))
            })
            .catch(err => console.log(err))
    }, [city]);

    const values = {
        city,
        setCity,
        weather,
        setWeather,
        current
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };