import React from 'react';
import 'bulma/css/bulma.css';
// import { CogA } from '../plugins';
import a11yIcon from '../assets/a11y.svg';

class Header extends React.Component {
  render() {
    const { toggleState, setToggleState } = this.props;
    const { toggleStateHome, setToggleStateHome } = this.props;

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
          <nav className="site-nav">
            <button
              type="button"
              className={`button is-link ${
                toggleStateHome ? 'is-inverted' : ''
              }`}
              onClick={() => setToggleStateHome(!toggleStateHome)}
              title="Home"
            >
              Home
            </button>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
