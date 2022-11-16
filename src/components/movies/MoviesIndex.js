import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);

  const fetchMovies = () => {
    fetch('https://express-api-starter-3bvpqy4hiq-lz.a.run.app/movies')
      .then((res) => res.json())
      .then((data) => setMovieList(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1> Disney Movies! </h1>
      <div className={styles.container}>
        {movieList.map((movie) => (
          <>
            <p key={movie.id}>{movie.title}</p>
            {/* <p>{new Date(movie['Release date (datetime)']).getFullYear()}</p> */}
          </>
        ))}
      </div>
    </>
  );
};

export default Movies;
