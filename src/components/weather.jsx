import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';

const Weather = ({temperature, feelsLike, icon, describe, place, onClickWeatherForecast}) => {

    return <>
        <Card className='weatherCard'>
            <Card.Body onClick={onClickWeatherForecast}>
                <Card.Img variant="top" src={icon} />
                <Card.Title>{temperature} °C</Card.Title>
                <Card.Text>
                    <div>Feels like {feelsLike} °C</div>
                    <div>{describe}</div>
                    <div>{place}</div>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default Weather;