import React from 'react'

const weatherForecast = ({weatherForecastHourly, onClickForecast}) => {
    return <>
        <h2 className="text-center mt-5">Hourly Forecast</h2>
        <ul className="weatherForecast">
            {weatherForecastHourly.map((weatherForecastHourlyItem, key) => <li key={key} onClick={() => onClickForecast(key)}>
                <div><img src={`https://openweathermap.org/img/wn/${weatherForecastHourlyItem.weather[0].icon}@2x.png`}/></div>
                {Math.round(weatherForecastHourlyItem.temp - 275.15)} °C
                {key === 0 ? <div>Now</div> : <div>{new Date(weatherForecastHourlyItem.dt * 1000).getHours()}:00</div>}
            </li>)}
        </ul>
    </>
}

export default weatherForecast;