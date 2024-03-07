import React from 'react'
import {Container, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Header = () => {
    return <>
        <div className="header">
            <Container>
                <Row>
                    <Col className="header__wrapper">
                        <a href="http://localhost:5173" alt="Home">Home</a>
                        <a href="http://localhost:5173/settings" alt="Settings">Setting</a>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}

export default Header;
