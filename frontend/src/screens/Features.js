import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Feature from '../components/Feature.js';
import {LinkContainer} from 'react-router-bootstrap';


const Features = () => {
    return (
        <div>
            <Row className='mx-auto'>
                <LinkContainer to='/vocabulary'>
                        <Col xs = {12} sm = {12} md = {6} lg = {6} xl={6} align='center'>
                            <Feature title = 'Random Vocabulary' 
                                    jap_title = 'ごい'
                                    // description = 'Test your skills by learning random vocab!' 
                                    img='./images/fish_balloon_round.jpg' />
                        </Col>
                    </LinkContainer>
                    <LinkContainer to='/question'>
                        <Col xs = {12} sm = {12} md = {6} lg = {6} xl={6} align='center'>
                                <Feature title = 'Ask me a question' 
                                jap_title = 'しつもんどぞ！'
                                // description = 'Ask me a question!' 
                                img='./images/talking_fish_round.jpg'/>
                        </Col>
                    </LinkContainer>
                </Row>
                <Row className='mx-auto feature_row'>
                    <LinkContainer to='/namethatobjectinstructions'>
                        <Col xs = {12} sm = {12} md = {6} lg = {6} xl={6} align='center'>
                                <Feature title = 'Name that object'
                                jap_title = '識別する'
                                // description = 'desc' 
                                img='./images/header-640x_round.jpg'/>
                        </Col>
                    </LinkContainer>
                    <LinkContainer to='/dictation'>
                        <Col xs = {12} sm = {12} md = {6} lg = {6} xl={6} align='center'>
                                <Feature title = 'Dictation' 
                                jap_title = '口述'
                                img='./images/dictation_round.jpg'/>
                        </Col>
                    </LinkContainer>
                </Row>

        </div>

    )
}

export default Features
