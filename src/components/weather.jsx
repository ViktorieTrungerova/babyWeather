import React, {useState} from 'react'

const Weather = ({temperature, feelsLike, icon, describe, onClickWeatherForecast, timeForecast}) => {

    return <div className="weather" onClick={onClickWeatherForecast}>
                <p className="weather__forecastTime">{timeForecast}</p>
                <img src={icon} />
                <h1>{temperature} °C</h1>
                <p>
                    <div>Feels like {feelsLike} °C</div>
                    <div>{describe}</div>
                </p>
            </div>
}

export default Weather;