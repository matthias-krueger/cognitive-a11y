import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.module.css';

export const CogA = ({
  content,
  children,
  isAccessibility,
  useBigger,
  useSharper,
  useGrayscale,
  useFont
}) => (
  <div
    className={cn({
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
  </div>
);

CogA.propTypes = {
  useBigger: PropTypes.bool,
  useSharper: PropTypes.bool,
  useGrayscale: PropTypes.bool,
  useFont: PropTypes.bool
};
