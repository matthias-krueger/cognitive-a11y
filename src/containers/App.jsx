import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { CogA } from '../plugins/index';
import sl from '../data/simpleLanguage';
import Header from '../components/header';
import Footer from '../components/footer';
import image from '../assets/images/bosch.jpg';

function App() {
  // just put that in the root container; App
  const [toggleState, setToggleState] = useState(false);
  const [toggleStateHome, setToggleStateHome] = useState(false);

  const Cog = props => <CogA isAccessibility={toggleState} {...props}></CogA>;

  return (
    <React.Fragment>
      {/* <Cog useGrayscale useFont> */}
      <Header
        toggleState={toggleState}
        setToggleState={setToggleState}
        toggleStateHome={toggleStateHome}
        setToggleStateHome={setToggleStateHome}
      ></Header>
      <main className="site-main">
        <div className="wrapper">
          <Cog useBigger content={sl['welcomeMessage']} useSharper></Cog>
          <Cog content={sl['hundMessage']} useSharper></Cog>
          <Cog content={sl['NavComponent']} />
          <Cog useBigger>HansPeterAusDerAlm</Cog>
          <Cog>Hnohuntoehun</Cog>
          <img src={image} className="bosch-image" alt="car" />
        </div>
      </main>
      <Footer toggleState={toggleState} setToggleState={setToggleState} />
      {/* </Cog> */}
    </React.Fragment>
  );
}

export default App;
