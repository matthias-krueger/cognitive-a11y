import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './mk-content.module.css';

export const MkAccessibility = ({content, isAccessibility, isBigger, isSharper, children }) => (
  <div className={
      cn({
          [styles.isBigger]: isAccessibility && isBigger,
          [styles.isSharper]: isAccessibility && isSharper,
      })
  }>
  {children ? children : isAccessibility ? content.access : content.content}
  </div>
);

MkAccessibility.propTypes = {
  isBigger: PropTypes.bool,
  isSharper: PropTypes.bool,
  renderContent: PropTypes.node,
  renderAccess: PropTypes.node,
}