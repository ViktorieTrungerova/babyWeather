import React, {useState, useEffect} from 'react'
import {Container, Row} from "react-bootstrap";
import Header from "../components/header.jsx";
import Child from "../components/child.jsx";
import Weather from "../components/weather.jsx";
import {weatherApi} from "../weatherApiClient.jsx";
import {determinator} from "../model/clothesDeterminer.jsx";


const Home = () => {
    const [weather, setWeather] = useState(null);
    const [children] = useState([
        {name: 'Eliska', age: 3},
        {name: 'Filip', age: 0},
    ]);

    useEffect(() => {
        const loadData = async () => {
            weatherApi.getData().then(data => setWeather(data))
        }
        loadData()
    }, [])


    console.log(weather, 'data')
    return (
        <>
            {
                weather === null
                    ? <div>Nacitam data</div>
                    : <>
                        <Header />
                        <Container>
                            <Weather
                                temperature={Math.round(weather.current.temp - 275.15)}
                                describe={weather.current.weather[0].description}
                                feelsLike={Math.round(weather.current.feels_like - 275.15)}
                                place="Hostalkova" icon={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}/>
                            <Row>
                                {children.map((child, key) => {
                                    const clothes = determinator.getSuitableClothes(
                                        Math.round(weather.current.temp - 275.15),
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