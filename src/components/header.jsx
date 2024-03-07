import React from 'react'
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Header = () => {
    return <>
            <Row>
                <Col>
                    <div className="header">
                        <a href="http://localhost:5173" alt="Home">Home</a>
                        <a href="http://localhost:5173/settings" alt="Settings">Setting</a>
                    </div>
                </Col>
            </Row>
    </>
}

export default Header;
