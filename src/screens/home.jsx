import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import Header from "../components/header.jsx";
import Child from "../components/child.jsx";
import Weather from "../components/weather.jsx";
import {weatherApi} from "../weatherApiClient.jsx";
import {determinator} from "../model/clothesDeterminer.jsx";
import WeatherForecast from "../components/weatherForecast.jsx";
import {supabaseApi} from "../supabaseApiClient.jsx";


const Home = () => {
    const [weather, setWeather] = useState(null);
    const [children, setChildren] = useState([]);
    const [selectedWeatherIndex, setSelectedWeatherIndex] = useState(0)
    const [weatherForecast, setWeatherForecast] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            weatherApi.getData().then(data => setWeather(data))
            supabaseApi.getChildren().then(data => setChildren(data))
        }
        loadData()
    }, [])

    const selectForecast = (index) => {
        setSelectedWeatherIndex(index);
        setWeatherForecast(false)
    };

    const handleDelete = async (id) => {
        await supabaseApi.deleteChild(id);
        location.reload();
    }

    console.log(weather, 'data')
    return (
        <>
            {
                weather === null
                    ? <div>Loading</div>
                    : <>
                        <Header />
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    {weatherForecast && <WeatherForecast weatherForecastHourly={weather.hourly.slice(0, 8)} onClickForecast={selectForecast}/>}
                                    <Weather
                                        onClickWeatherForecast={() => (setWeatherForecast(!weatherForecast))}
                                        temperature={Math.round(weather.hourly[selectedWeatherIndex].temp - 275.15)}
                                        describe={weather.hourly[selectedWeatherIndex].weather[0].description}
                                        feelsLike={Math.round(weather.hourly[selectedWeatherIndex].feels_like - 275.15)}
                                        timeForecast={selectedWeatherIndex > 0 && `Forecast for ${ new Date(weather.hourly[selectedWeatherIndex].dt * 1000).getHours()}:00`}
                                        icon={`https://openweathermap.org/img/wn/${weather.hourly[selectedWeatherIndex].weather[0].icon}@2x.png`}/>
                                    {selectedWeatherIndex > 0 && <div className="currentWeather" onClick={() => setSelectedWeatherIndex(0)}><img src="assets/img/nounBack.png"/>Back to current weather</div>}
                                </Col>
                            </Row>
                            <Row className="justify-content-between">
                                {children.map((child, key) => {
                                    const clothes = determinator.getSuitableClothes(
                                        Math.round(weather.hourly[selectedWeatherIndex].temp - 275.15),
                                        child.age,
                                    )
                                    return <Child id={child.id} key={key} name={child.name} onClickDelete={handleDelete} sex={child.sex} allClothes={clothes} />;
                                })}
                            </Row>
                        </Container>
                    </>
            }
        </>
    )
}
export default Home;