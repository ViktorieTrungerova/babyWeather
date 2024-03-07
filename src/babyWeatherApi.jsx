import React, {useState, useEffect} from 'react';

const API_KEY = '7fb42e5e75ac7e086e9a3d34d0f8f97c'
const LAT = '50.073658'
const LON = '14.418540'

const BabyWeatherApi = () => {

    const [weather, setWeather] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${LAT}&lon=-${LON}&exclude=hourly,daily&appid=${API_KEY}&lang=zh_cz`)
            const data = await response.json()
            setWeather(data.current.weather[0])
            console.log(data.current.weather[0], "weather1")
        }
        loadData()
    }, [])

    return (
        <>
            {
                weather === false
                    ? <p>Nacitam data</p>
                    : <div className="list">
                        { weather.description}
                    </div>
            }
        </>
    );
};


export default BabyWeatherApi;
