import React, {useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap";
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
    };


    console.log(weather, 'data')
    return (
        <>
            {
                weather === null
                    ? <div>Nacitam data</div>
                    : <>
                        <Header />
                        <Container>
                            {weatherForecast && <WeatherForecast weatherForecastHourly={weather.hourly} onClickForecast={selectForecast}/>}
                            <Weather
                                onClickWeatherForecast={() => (setWeatherForecast(!weatherForecast))}
                                temperature={Math.round(weather.hourly[selectedWeatherIndex].temp - 275.15)}
                                describe={weather.hourly[selectedWeatherIndex].weather[0].description}
                                feelsLike={Math.round(weather.hourly[selectedWeatherIndex].feels_like - 275.15)}
                                place="Hostalkova" icon={`https://openweathermap.org/img/wn/${weather.hourly[selectedWeatherIndex].weather[0].icon}@2x.png`}/>
                            <Row>
                                {children.map((child, key) => {
                                    const clothes = determinator.getSuitableClothes(
                                        Math.round(weather.hourly[selectedWeatherIndex].temp - 275.15),
                                        child.age,
                                    )
                                    return <Child key={key} name={child.name} urlImg="https://placehold.jp/150x150.png" allClothes={clothes} />;
                                })}
                            </Row>
                        </Container>
                    </>
            }
        </>
    )
}
export default Home;