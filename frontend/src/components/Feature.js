import React from 'react'
import {Col, Card} from 'react-bootstrap';

const Feature = (props) => {
    return (
        // <Card style={{ width: '18rem' }}>
        <Card style={{ width: '18rem'}}>
        <Col >
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title　className = 'jap_text_body'>{props.title}</Card.Title>
                <p className = 'jap_text_body'>({props.jap_title})</p>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            </Col>
        </Card>
    )
}

export default Feature
