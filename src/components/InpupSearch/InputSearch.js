/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
import { getMoviesByTitle } from 'lib/api';
import React, { useState } from 'react';

const InputSearch = (props) => {
  const [movieInputSearch, setmovieInputSearch] = useState('');
  console.log(movieInputSearch);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    getMoviesByTitle(title).then((data) => props.setMovieList(data));
  };

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="movie-input">
        <input
          id="movie-input"
          name="title"
          type="text"
          value={movieInputSearch}
          onChange={(event) => setmovieInputSearch(event.target.value)}
        />
      </label>
      <button type="submit"> Search </button>
    </form>
  );
};

export default InputSearch;
