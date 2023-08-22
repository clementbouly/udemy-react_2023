import React, { useContext } from 'react';

import { ThemeContext } from '../../../App';
import classes from './Button.module.css';

const Button = (props) => {
  const theme = useContext(ThemeContext)
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className} ${theme === "dark" ? classes.dark : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
