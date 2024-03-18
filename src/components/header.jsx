import React from 'react'
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Header = () => {
    return <>
        <div className="header">
            <Container>
                <Row>
                    <Col className="header__wrapper">
                        <a href="http://localhost:5173" alt="Home"><img src="assets/img/home.png"/>HOME</a>
                        <a href="http://localhost:5173/settings" alt="Settings"><img src="assets/img/settings.png"/>SETTINGS</a>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}

export default Header;
