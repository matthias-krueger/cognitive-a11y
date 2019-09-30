import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { CogA11y } from '../plugins';
import sl from '../data/simpleLanguage';
import a11yIcon from '../assets/a11y.svg';
import { CogA11yButton } from '../plugins/cogA11yButton';

function App() {
  const [toggleState, setToggleState] = useState(false);

  const CaM = props => (
    <CogA11y isAccessibility={toggleState} {...props}></CogA11y>
  );

  return (
    <>
      <header className="site-header">
        <div className="wrapper">
          <button
            type="button"
            className="button is-primary"
            onClick={() => setToggleState(!toggleState)}
            title={
              !toggleState
                ? 'activate accessibility mode'
                : 'turn accessibility mode off'
            }
          >
            cog-a11y
            {toggleState ? ' On' : ' Off'}
            <img src={a11yIcon} className="a11y-icon" alt="a11y icon" />
          </button>
        </div>
      </header>
      <main className="site-main">
        <div className="wrapper">
          <CaM isBigger content={sl['welcomeMessage']}></CaM>
          <CaM content={sl['hundMessage']} isSharper></CaM>
          <CaM content={sl['wtfMes']} isBigger isSharper></CaM>
          <CaM content={sl['NavComponent']} />
          <CaM isBigger>HansPeterAusDerAlm</CaM>
          <CaM isImage>
            <img />
          </CaM>
          <CaM>Hnohuntoehun</CaM>
          <CogA11yButton></CogA11yButton>
        </div>
      </main>
    </>
  );
}

export default App;
