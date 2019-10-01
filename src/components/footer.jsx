import React from 'react';
import 'bulma/css/bulma.css';
import { CogA11y } from '../plugins';
import sl from '../data/simpleLanguage';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="wrapper">
          <CogA11y
            isAccessibility={this.props.toggleState}
            content={sl['footer']}
            isBigger
            isSharper
          ></CogA11y>
        </div>
      </footer>
    );
  }
}

export default Footer;
