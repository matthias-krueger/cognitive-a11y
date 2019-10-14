import React from 'react';
import 'bulma/css/bulma.css';
import { CogA } from '../plugins';
import sl from '../data/simpleLanguage';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="wrapper">
          <CogA
            isAccessibility={this.props.toggleState}
            content={sl['footer']}
            useBigger
            useSharper
          ></CogA>
        </div>
      </footer>
    );
  }
}

export default Footer;
