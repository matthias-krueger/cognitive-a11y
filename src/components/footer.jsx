import React from 'react';
import 'bulma/css/bulma.css';
import { CogaText } from '../plugins';
import sl from '../data/simpleLanguage';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="wrapper">
          <CogaText
            isAccessibility={this.props.toggleState}
            content={sl['footer']}
            useBigger
            useSharper
          ></CogaText>
        </div>
      </footer>
    );
  }
}

export default Footer;
