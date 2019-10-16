import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.module.css';

export const CogaText = ({
  content,
  children,
  isAccessibility,
  useBigger,
  useSharper,
  useGrayscale,
  useFont
}) => (
  <p
    className={cn('coga-text', {
      [styles.useBigger]: isAccessibility && useBigger,
      [styles.useSharper]: isAccessibility && useSharper,
      [styles.useGrayscale]: isAccessibility && useGrayscale,
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
  useBigger: PropTypes.bool,
  useSharper: PropTypes.bool,
  useGrayscale: PropTypes.bool,
  useFont: PropTypes.bool
};

export const CogaMotion = ({
  content,
  children,
  isAccessibility,
  reduceMotion
}) => (
  <div
    className={cn('coga-motion', {
      [styles.reduceMotion]: isAccessibility && reduceMotion
    })}
  >
    {children ? children : isAccessibility ? content.static : content.motion}
  </div>
);

CogaMotion.propTypes = {
  reduceMotion: PropTypes.bool
};
