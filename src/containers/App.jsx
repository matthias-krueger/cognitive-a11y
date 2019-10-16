import React, { useState } from 'react';
// import 'bulma/css/bulma.css';
import { CogaText, CogaMotion } from '../plugins/index';
import sl from '../data/simpleLanguage';
import motion from '../data/particles';
import Header from '../components/header';
import Footer from '../components/footer';
import image from '../assets/images/bosch.jpg';
// import { Parallax } from 'react-parallax';

function App() {
  // just put that in the root container; App
  const [toggleState, setToggleState] = useState(false);

  // add class avtive-coga-mode to the html tag
  toggleState
    ? document.documentElement.classList.add('avtive-coga-mode')
    : document.documentElement.classList.remove('avtive-coga-mode');

  const ModeText = props => (
    <CogaText isAccessibility={toggleState} {...props}></CogaText>
  );
  const ModeMotion = props => (
    <CogaMotion isAccessibility={toggleState} {...props}></CogaMotion>
  );

  return (
    <React.Fragment>
      <Header
        toggleState={toggleState}
        setToggleState={setToggleState}
      ></Header>
      <main className="site-main">
        <ModeMotion content={motion['particles']}></ModeMotion>
        <div className="wrapper">
          {/* <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../assets/images/bosch.jpg')}
            bgImageAlt="the cat"
            strength={800}
          >
            <p>
              Put some text content here - even an empty div with fixed
              dimensions to have a height for the parallax.
            </p>
            <div style={{ height: '80vh' }} />
          </Parallax> */}
          <h2>Web-Barrierefreiheit</h2>
          <ModeText content={sl['introduction']} useFont></ModeText>
          <img src={image} className="bosch-image" alt="car" />
        </div>
      </main>
      <Footer toggleState={toggleState} setToggleState={setToggleState} />
    </React.Fragment>
  );
}

export default App;
