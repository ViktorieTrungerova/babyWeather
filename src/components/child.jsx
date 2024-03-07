import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Child = ({name, urlImg, allClothes }) => {
    return <>
            <Col xs={12} md={6}>
                <Image src={urlImg} roundedCircle />
                <div>{name}</div>
                <ul className="list">
                    { allClothes.map( (clothes, index) => <li key={index}>{clothes}</li> )}
                </ul>
            </Col>
    </>
}

export default Child;