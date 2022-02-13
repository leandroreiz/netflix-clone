import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';

import classes from './App.module.css';

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [headerBackground, setheaderBackground] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // get the data from the api
      let list = await Tmdb.getHomeList();

      setMovieList(list);

      // get featured movie
      let originals = list.filter((item) => item.slug === 'originals');
      let randomFeatured = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let featured = originals[0].items.results[randomFeatured];
      let featuredInfo = await Tmdb.getMovieInfo(featured.id, 'tv');

      setFeaturedData(featuredInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setheaderBackground(true);
      } else {
        setheaderBackground(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className={classes.page}>
      <Header background={headerBackground} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className={classes.lists}>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <Footer>
        All rights reserved to{' '}
        <a href="https://www.netflix.com" target="_blank">
          Netflix
        </a>
        . <br />
        All data collected from{' '}
        <a href="https://www.themoviedb.org" target="_blank">
          themoviedb.org
        </a>
        .
      </Footer>

      {movieList.length <= 0 && (
        <div className={classes.loading}>
          <img
            src="https://www.rchandru.com/images/portfolio/loading.gif"
            alt="Loading"
          ></img>
        </div>
      )}
    </div>
  );
};

export default App;
