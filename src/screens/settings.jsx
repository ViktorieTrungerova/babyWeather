import React from 'react'
import AddChildForm from "../components/addChildForm.jsx";
import Header from "../components/header.jsx";

const SettingsScreen = () => {
    return (
        <>
            <Header />
            <h1>Settings</h1>
            <AddChildForm />
        </>
    )
}

export default SettingsScreen;