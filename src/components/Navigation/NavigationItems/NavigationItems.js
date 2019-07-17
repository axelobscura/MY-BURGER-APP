import React from 'react';
import classes from './NavigationItems.module.css';
import NavigaItem from './NavigationItem/NavigationItem';

const navigationItems = ()=>(
  <ul className={classes.NavigationItems}>
    <NavigaItem link="/" active>Burger Builder</NavigaItem>
    <NavigaItem link="/orders">Orders</NavigaItem>
  </ul>
);

export default navigationItems;