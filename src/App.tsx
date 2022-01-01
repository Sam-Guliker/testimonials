import React from 'react';
import logo from './logo.svg';
import './styles/main.scss';

import TestimonialContainer from './components/TestimonialContainer';
import Card from './components/Card';


import daniel from './images/image-daniel.jpg'

function App() {
  return (
    <div className="App">
      <TestimonialContainer>
        <Card 
            image={daniel}
            name="Daniel Clifford"
            role="Verified Graduate"
            highlightParagraph="I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
            paragraph="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
            quote={true}
          />
      </TestimonialContainer>
    </div>
  );
}

export default App;
