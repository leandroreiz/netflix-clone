import React from 'react';

import classes from './Header.module.css';

const Header = ({ background }) => {
  const headerClass = background && 'header__background';

  return (
    <header className={`${classes.header} ${classes[headerClass]}`}>
      <div className={classes['header__logo']}>
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
            alt="Netflix"
          />
        </a>
      </div>
      <div className={classes['header__user']}>
        <a href="#">
          <img
            src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
            alt="User"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
