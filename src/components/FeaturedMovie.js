import React from 'react';

import classes from './FeaturedMovie.module.css';

const FeaturedMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);

  let genres = [];
  for (const i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 300)
    description = description.substring(0, 300) + '...';

  return (
    <section
      className={classes.featured}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className={classes['featured__vertical']}>
        <div className={classes['featured__horizontal']}>
          <div className={classes['featured__name']}>{item.original_name}</div>
          <div className={classes['featured__info']}>
            <div className={classes['featured__points']}>
              Score {item.vote_average}
            </div>
            <div className={classes['featured__year']}>
              {firstDate.getFullYear()}
            </div>
            <div className={classes['featured__seasons']}>
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className={classes['featured__description']}>{description}</div>
          <div className={classes['featured__buttons']}>
            <a
              href={`/watch/${item.id}`}
              className={classes['featured__watch-btn']}
            >
              ► Watch
            </a>
            <a
              href={`/add/${item.id}`}
              className={classes['featured__add-btn']}
            >
              + My List
            </a>
          </div>
          <div className={classes['featured__genres']}>
            <strong>Genres:</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
