import React from 'react'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Child = ({name, urlImg, allClothes }) => {
    return <>
            <Col xs={12} md={6} className="child">
                <Image src={urlImg} roundedCircle />
                <h2 className="child__name">{name}</h2>
                <ul className="list clothes">
                    { allClothes.map( (clothes, key) => <li key={key}><img src={clothes.imageUrl}/></li> )}
                </ul>
            </Col>
    </>
}

export default Child;