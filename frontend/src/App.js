import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Features from './screens/Features.js'
import questionScreen from './screens/question.js';
import vocabScreen from './screens/vocabulary.js';
import namethatobject from './screens/namethatobject.js';
import dicatation from './screens/dicatation.js';
import namethatobjectinstructions from './screens/namethatobjectinstructions.js';


function App() {
  return (
    <Router>
      <div className="App" style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${"./images/paperbackground.jpg"})`,
            }}>
        <Header />
        <main >
          <Container className='p-5 my-5' >
            <Route path = '/' component = {Features} exact />
            <Route path = '/question' component = {questionScreen} />
            <Route path = '/vocabulary' component = {vocabScreen} />
            <Route path = '/dictation' component = {dicatation} />
            <Route path = '/namethatobjectinstructions' component = {namethatobjectinstructions} />
            <Route path = '/namethatobject' component = {namethatobject} />
          </Container>
          <Footer/>
        </main>
        
      </div>
    </Router>

  );
}

export default App;
