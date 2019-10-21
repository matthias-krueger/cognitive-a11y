import React from 'react';
import Navigation from './navigation';

class Header extends React.Component {
  render() {
    const { toggleState, setToggleState } = this.props;
    const fill = '#043949';

    return (
      <header className="site-header">
        <div className="wrapper">
          <Navigation />
          <button
            type="button"
            className={`button ${toggleState ? 'active' : ''}`}
            onClick={() => setToggleState(!toggleState)}
            title={`Modus für kognitive Barrierefreiheit ${
              toggleState ? 'aus' : 'ein'
            }schalten.`}
          >
            <svg
              version="1.1"
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
            >
              <circle
                className="iconA11y"
                fill={fill}
                cx="16"
                cy="3.583"
                r="3.583"
              />
              <path
                className="iconA11y"
                fill={fill}
                d="M28.241,7.646C26.361,7.98,16,9.686,16,9.686S5.661,7.98,3.781,7.646c-2.04-0.467-2.259,1.594-1,2.04
	C4.04,10.132,12,12.745,12,12.745v7.139c0,0-2.716,9.779-3.1,11.219c-0.096,1.2,1.701,1.19,2.02,0c0.54-1.2,5.08-11.219,5.08-11.219
	s4.561,10.019,5.101,11.219c0.319,1.19,2.096,1.2,2,0C22.717,29.664,20,19.885,20,19.885v-7.139c0,0,7.961-2.614,9.22-3.06
	S30.281,7.178,28.241,7.646z"
              />
            </svg>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
