import React from 'react';
import { CogaText } from '../plugins';
import sl from '../data/simpleLanguage';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer plain-sec">
        <div className="wrapper">
          <h3>Moduswechsel</h3>
          <CogaText
            isAccessibility={this.props.toggleState}
            content={sl['footer']}
          ></CogaText>
        </div>
      </footer>
    );
  }
}

export default Footer;
