import React, { useState } from 'react';
import 'bulma/css/bulma.css';
// import { CogA11y } from '../plugins';
import a11yIcon from '../assets/a11y.svg';

function Header() {
  const [toggleState, setToggleState] = useState(false);

  //   const CaM = props => (
  //     <CogA11y isAccessibility={toggleState} {...props}></CogA11y>
  //   );

  return (
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
  );
}

export default Header;
