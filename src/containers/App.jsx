import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { CogA11y } from '../plugins';
import sl from '../data/simpleLanguage';
import Header from '../components/header';
import Footer from '../components/footer';

function App() {
  const [toggleState, setToggleState] = useState(false);

  const CaM = props => (
    <CogA11y isAccessibility={toggleState} {...props}></CogA11y>
  );

  return (
    <React.Fragment>
      <Header toggleState={toggleState} setToggleState={setToggleState} />
      <main className="site-main">
        <div className="wrapper">
          <CaM isBigger content={sl['welcomeMessage']} isSharper></CaM>
          <CaM content={sl['hundMessage']} isSharper></CaM>
          <CaM content={sl['NavComponent']} />
          <CaM isBigger>HansPeterAusDerAlm</CaM>
          <CaM>Hnohuntoehun</CaM>
        </div>
      </main>
      <Footer toggleState={toggleState} setToggleState={setToggleState} />
    </React.Fragment>
  );
}

export default App;
