import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.module.css';

export const CogaText = ({
  content,
  children,
  isAccessibility,
  useDefaultLink,
  useFont
}) => (
  <p
    className={cn('coga-text', {
      [styles.useDefaultLink]: isAccessibility && useDefaultLink,
      [styles.useFont]: isAccessibility && useFont
    })}
  >
    {children
      ? children
      : isAccessibility
      ? content.simpleText
      : content.normalText}
  </p>
);

CogaText.propTypes = {
  useDefaultLink: PropTypes.bool,
  useFont: PropTypes.bool
};

export const CogaMotion = ({
  content,
  children,
  isAccessibility,
  useGrayscale,
  reduceMotion
}) => (
  <div
    className={cn('coga-motion', {
      [styles.reduceMotion]: isAccessibility && reduceMotion,
      [styles.useGrayscale]: isAccessibility && useGrayscale
    })}
  >
    {children ? children : isAccessibility ? content.static : content.motion}
  </div>
);

CogaMotion.propTypes = {
  reduceMotion: PropTypes.bool,
  useGrayscale: PropTypes.bool
};
