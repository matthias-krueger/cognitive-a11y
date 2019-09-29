import React from 'react';
import a11yIcon from '../assets/a11y.svg';
import styles from './index.module.css';

export const CogA11yButton = () => (
  <button type="button" className={styles.coga11ybutton}>
    cog-a11y
    <img src={a11yIcon} className="a11y-icon" alt="a11y icon" />
  </button>
);
