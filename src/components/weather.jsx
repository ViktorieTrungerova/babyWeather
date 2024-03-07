import React from 'react'
import Card from 'react-bootstrap/Card';

const Weather = ({temperature, icon, describe, place}) => {
    return <>
        <Card className='weatherCard'>
            <Card.Body>
                <Card.Img variant="top" src={icon} />
                <Card.Title>{temperature}</Card.Title>
                <Card.Text>
                    {describe}
                    <p>{place}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export default Weather;