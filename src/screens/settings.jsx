import React from 'react'
import AddChildForm from "../components/addChildForm.jsx";
import Header from "../components/header.jsx";
import {Container} from "react-bootstrap";

const SettingsScreen = () => {
    return (
        <>
            <Header />
            <Container>
                <h1>Settings</h1>
                <AddChildForm />
            </Container>

        </>
    )
}

export default SettingsScreen;