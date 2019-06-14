import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
  return(
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <ul>
        <NavigationItems />
      </ul>
    </div>
  );
}

export default sideDrawer;