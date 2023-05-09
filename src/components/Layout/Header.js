import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mainheaderImage from '../../assets/headerBanner.jpg'
import HeaderCartbutton from './HeaderCartbutton';
const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Ordering App</h1>
            <HeaderCartbutton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mainheaderImage} alt="A table full of delicious food!"  />
        </div>
    </Fragment>
  )
}

export default Header