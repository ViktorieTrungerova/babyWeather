import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {supabaseApi} from "../supabaseApiClient.jsx";

function AddChildForm() {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [optionsSex] = useState(['male', 'female'])
    const [optionsAge] = useState([0,1,2,3,4,5])
    const [sex, setSex] = useState('')

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)

        const newChild = {
            name: name,
            sex: sex,
            age: +age
        }

        supabaseApi.addChild(name, sex, +age)
            .then(() => alert('ulozeno'))
            .catch(() => alert('chyba'));
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="addChildForm">
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Age</Form.Label>
                    <Form.Select onChange={(e) => {setAge(e.target.value)}}>
                        <option></option>
                        {optionsAge.map((optionAge, index) => <option key={index}>{optionAge}</option>)}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Sex</Form.Label>
                    <Form.Select onChange={(e) => {setSex(e.target.value)}}>
                        <option></option>
                        {optionsSex.map((optionSex, index) => <option key={index}>{optionSex}</option>)}
                    </Form.Select>
                </Form.Group>
            </Row>
            <div className="mb-3 ">
                <Button type="submit">Add child</Button>
            </div>
        </Form>
    );
}

export default AddChildForm;