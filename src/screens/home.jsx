import React from 'react'
import {Container, Row} from "react-bootstrap";
import Header from "../components/header.jsx";
import Child from "../components/child.jsx";
import Weather from "../components/weather.jsx";

const allClothes = ['bunda', 'rifle', 'cepice']

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Weather temperature="28°C" describe="wind" place="Hostalkova" icon="https://placehold.jp/150x150.png"/>
                <Row>
                    <Child name="Eliska" urlImg="https://placehold.jp/150x150.png" allClothes={allClothes}/>
                    <Child name="Filip" urlImg="https://placehold.jp/150x150.png" allClothes={allClothes}/>
                </Row>
            </Container>
        </>

    )
}
export default Home;