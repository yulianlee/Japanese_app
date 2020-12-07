import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';
const namethatobjectinstructions = () => {
    return (
        <>
            <Row>
                <h1 style={{textDecoration:'underline'}}>Instructions</h1>                
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li className = 'instruction-font'>The objective of this exercise is to name the object that you see on screen using Hiragana.</li>
                        <li className = 'instruction-font'>There will a place for you to type the appropriate Hiragana corresponding to the object on screen. Enter your answer there.</li>
                        <p style={{color:'red'}}>[Make sure you have your Japanese keyboard enabled on your device!!]</p>
                        <li className = 'instruction-font'>You only have 5 seconds to write each word. You will be immediately graded after that time.</li>
                    </ul>
                </Col>
            </Row>

            <Row className = 'mt-4'>
                <Link to ='/namethatobject' className='link-font'>
                    <p className='link-font'>Got it! <span className='jap_text_body'>わかりました！ </span></p>
                </Link>
            </Row>
        </>
    )
}

export default namethatobjectinstructions
