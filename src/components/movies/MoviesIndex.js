import React, { useEffect, useState } from 'react';

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
    <section>
      {movieList.map((movie) => (
        <p key={movie.id}> {movie.title}</p>
      ))}
    </section>
  );
};

export default Movies;
