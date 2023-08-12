import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  let links = null;
  if (props.isLoggedIn) {
    links = (
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        <li>
          <button onClick={props.onLogout}>Logout</button>
        </li>
      </ul>
    );
  }
  return <nav className={classes.nav}>{links}</nav>;
};

export default Navigation;
