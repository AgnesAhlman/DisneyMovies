import InputSearch from 'components/InpupSearch/InputSearch';
import { getMovies } from 'lib/api';
import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);

  const fetchMovies = () => {
    getMovies().then((data) => setMovieList(data));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1> Disney Movies! </h1>
      <p className={styles.p}> Search for title:</p>
      <InputSearch setMovieList={setMovieList} />
      <div className={styles.container}>
        {movieList.map((movie) => (
          <div className={styles.movie}>
            <p key={movie.id}>{movie.title}</p>
            {/* <p>{new Date(movie['Release date (datetime)']).getFullYear()}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
