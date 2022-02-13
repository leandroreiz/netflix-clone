import React, { useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import classes from './MovieRow.module.css';

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const leftArrowHandler = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) x = 0;
    setScrollX(x);
  };

  const rightArrowHandler = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.results.length * 150;
    if (window.innerWidth - listWidth > x)
      x = window.innerWidth - listWidth - 60;
    setScrollX(x);
  };

  return (
    <div className={classes['movie-row']}>
      <h2>{title}</h2>

      <div className={classes['movie-row__left']} onClick={leftArrowHandler}>
        <NavigateBeforeIcon sx={{ fontSize: 50 }} />
      </div>

      <div className={classes['movie-row__right']} onClick={rightArrowHandler}>
        <NavigateNextIcon sx={{ fontSize: 50 }} />
      </div>

      <div className={classes['movie-row__list-area']}>
        <div
          className={classes['movie-row__list']}
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className={classes['movie-row__item']}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
