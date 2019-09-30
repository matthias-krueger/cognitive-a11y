import React from 'react';
import a11yIcon from '../assets/a11y.svg';
import { CogA11y } from '../plugins';
import { BehaviorSubject } from 'rxjs';

class CogA {
  constructor(state) {
    this.state = new BehaviorSubject(state);
  }

  renderCaM = props => {
    return <CogA11y isAccessibility={this.state} {...props}></CogA11y>;
  };

  renderButton = (className, label) => (
    <button
      type="button"
      className={className}
      onClick={() => {
        this.state.next(!this.state.getValue());
      }}
    >
      {label}
      <img src={a11yIcon} className="a11y-icon" alt="a11y icon" />
    </button>
  );
}

export default new CogA(false);
