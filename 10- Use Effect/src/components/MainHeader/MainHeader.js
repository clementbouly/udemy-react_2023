import React, { useContext } from 'react';

import { AuthContext, ThemeContext } from '../../App';
import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = () => {
  const theme = useContext(ThemeContext)
  const {isLoggedIn, onLogout} = useContext(AuthContext)
  return (
    <header className={`${classes['main-header']} ${theme === "dark" ? classes.dark : ""}` }>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isLoggedIn} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
