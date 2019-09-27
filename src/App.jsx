import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { MkAccessibility } from './plugins';
import sl from './simpleLanguage';

function App() {
  const [toggleState, setToggleState] = useState(false);

  const MK = props => <MkAccessibility isAccessibility={toggleState} {...props}></MkAccessibility>;

  return (
    <>
      <div className="App">
        <button type="button" className="button is-primary" onClick={() => setToggleState(!toggleState)}>
          Toggle State
        </button>
        {toggleState ? 'ADHS' : 'Normal'}
      </div>
      <div className="box">
        <MK isBigger content={sl['welcomeMessage']}></MK>
        <MK content={sl['hundMessage']} isSharper></MK>
        <MK content={sl['wtfMes']}></MK>
        <MK content={sl['NavComponent']} />
        <MK isBigger>HansPeterAusDerAlm</MK>
        <MK>Hnohuntoehun</MK>
      </div>
    </>
  );
}

export default App;
