import React from 'react';
import classes from './NavigationItems.module.css';
import NavigaItem from './NavigationItem/NavigationItem';

const navigationItems = ()=>(
  <ul className={classes.NavigationItems}>
    <NavigaItem link="/" active>BURGER-BUILDER</NavigaItem>
    <NavigaItem link="/">CHECKOUT</NavigaItem>
  </ul>
);

export default navigationItems;