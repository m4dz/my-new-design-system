import React, { Component } from 'react';
import styles from './button.module.scss';

type State = {};
type Props = {
  text?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'neutral' | null;
  className?: string;
  onPress: Function;
};

export class Button extends Component<Props, State> {
  render() {
    const {
      text,
      disabled,
      variant,
      className,
      onPress,
      children = 'Click',
    } = this.props;
    const value = text || children;
    const classes = [
      disabled ? 'disabled' : undefined,
      variant ? variant : 'neutral',
      `
      ${styles.button} ${styles[variant]}
      ${disabled ? styles.disabled : ''}
      `,
    ]
      .join(' ')
      .trim();
    return (
      <button className={classes} onClick={(e) => onPress(e)}>
        {value}
      </button>
    );
  }
}
