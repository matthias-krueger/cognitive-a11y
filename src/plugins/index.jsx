import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.module.css';

export const CogA11y = ({
  content,
  children,
  isAccessibility,
  isBigger,
  isSharper
}) => (
  <div
    className={cn({
      [styles.isBigger]: isAccessibility && isBigger,
      [styles.isSharper]: isAccessibility && isSharper
    })}
  >
    {children
      ? children
      : isAccessibility
      ? content.simpleText
      : content.normalText}
  </div>
);

CogA11y.propTypes = {
  isBigger: PropTypes.bool,
  isSharper: PropTypes.bool,
  renderNormalText: PropTypes.node,
  renderSimpleText: PropTypes.node
};
